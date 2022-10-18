import React, { useEffect, useState } from "react";
import { SafeAreaView ,Text, TextInput,StyleSheet ,View,Input,Pressable,Image, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import Nanumitem from "../components/NanumItem";
import { widthPercentage } from "../ResponsiveSize";

const Search=()=>{

    const [value, setValue] = useState();
    const [data, setData] = useState([]);
    const [arr, setArr] = useState([])

    const path="http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/posts";

    useEffect(()=>{
        fetch(path).then((res)=>res.json()).then((response)=>
            setData(response.data)     
        )
    },[])

    const onPressSearch = () => {
        setArr([...data].filter((item) => item?.title?.includes(value) || item?.content?.includes(value)))
        console.log(arr)
    }

    return(
        <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
            <ScrollView contentContainerStyle={{alignItems: 'center', backgroundColor: '#ffffff',}}>
            <SearchBar value={value} setValue={setValue} onPressSearch={onPressSearch}/>
            <View style={{width: '100%'}}> 
                {arr.reverse().map(item=>(
                    <Nanumitem userIdx={item.userIdx} postId={item.postIdx} title={item.title} createdTime={item.createdAt} hastag={item.hastag} like={item.totalHearts} d_day={item.expirationDate} locate={item.globalLocation} imgUrl={item.imgUrls} />
                ))}
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search;