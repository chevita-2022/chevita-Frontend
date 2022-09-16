import React from "react";
import { SafeAreaView ,Text, TextInput,StyleSheet ,View,Input,Pressable,Image} from "react-native";
import SearchBar from "../components/SearchBar";

const Search=()=>{
    return(
        <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
            <SearchBar />
        </SafeAreaView>
    )
}

export default Search;