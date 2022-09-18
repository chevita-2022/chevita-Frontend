import React, { useEffect, useState } from "react";
import { SafeAreaView ,Text, TextInput,StyleSheet ,View,Input,Pressable,Image} from "react-native";
import SearchBar from "../components/SearchBar";
import Nanumitem from "../components/NanumItem";

const Search=()=>{

    const [value, setValue] = useState();
    const [data, setData] = useState([]);
    const [arr, setArr] = useState([])

    const path="http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/posts";

    const onPressSearch = () => {
        console.log(value)
        fetch(path).then((res)=>res.json()).then((response)=>
            setData(response.data)     
        );

        let item = [...data]
        console.log(item)
        item.map((item) => console.log(item.title))
        
        setArr(item.filter((item) => item?.title?.includes(value) || item?.content?.includes(value)))
        console.log(arr)

    }

    

    return(
        <SafeAreaView style={{backgroundColor:'#ffffff', flex:1, alignItems: 'center'}}>
            <SearchBar value={value} setValue={setValue} onPressSearch={onPressSearch}/>
            <View> 
                {arr.map(item=>(
                    <Nanumitem userIdx={item.userIdx} postId={item.postIdx} title={item.title} createdTime={item.createdAt} hastag={item.hastag} like={item.totalHearts} d_day={item.expirationDate} locate={item.globalLocation} imgUrl={item.imgUrls} />
                ))}
            </View>
        </SafeAreaView>
    )
}

export default Search;