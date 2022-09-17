import React from "react"
import { SafeAreaView ,Text, TextInput,StyleSheet ,View,Input,Pressable,Image, Platform} from "react-native";
import { heightPercentage, widthPercentage } from "../ResponsiveSize";


const SearchBar=()=>{
    return(
            <View style={searchStyles.container}>
                <Image source={require('../assets/images/search.png')} style={searchStyles.img} />
                <TextInput style={searchStyles.input} placeholder={'검색어를 입력해주세요'} placeholderTextColor='#151515' />
            </View>
    )
}

const searchStyles = StyleSheet.create({
    container: {
        position:'absolute',
        width:widthPercentage(337),
        height:heightPercentage(35),
        margin:10,
        borderRadius:12,
        backgroundColor:'#ffffff',
        padding:10,
        ...Platform.select({
            android:{elevation:3}
        }),
    },
    input:{
        position:'absolute',
        width:widthPercentage(300),
        height:heightPercentage(35),
        borderRadius:12,
        backgroundColor:'#ffffff',
        padding:10,
        marginLeft:35
    },
    img:{
        position:'absolute',
        width:widthPercentage(20),
        height:heightPercentage(21),
        marginLeft:13,
        marginTop:7
    }
});

export default SearchBar;