import React, { useEffect, useState } from "react";
import { SafeAreaView ,Text, TextInput,StyleSheet ,View,Input,Pressable,Image} from "react-native";
import SearchBar from "../components/SearchBar";
import Nanumitem from "../components/NanumItem";

const Search=()=>{

    const [value, setValue] = useState();
    const [data, setData] = useState([]);
    const [arr, setArr] = useState([])

    const path="chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/posts";



    const onPressSearch = async () => {
        console.log(value)
        console.log(data)
        await fetch(path).then((res)=>res.json()).then((response)=>
            console.log(response.data)     
        );
        //console.log(data)
        //let item = [...data]
        //setArr(item.filter((item) => item.title.includes(value)))} 

    }

    

    return(
        <SafeAreaView style={{backgroundColor:'#ffffff', flex:1, alignItems: 'center'}}>
            <SearchBar value={value} setValue={setValue} onPressSearch={onPressSearch}/>
        </SafeAreaView>
    )
}

export default Search;