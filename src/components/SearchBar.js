import React from "react"
import { SafeAreaView ,Text, TextInput,StyleSheet ,View, Input,Pressable,Image, Platform} from "react-native";
import { heightPercentage, widthPercentage } from "../ResponsiveSize";


const SearchBar=(props)=>{
    const {value, setValue, onPressSearch} = props;

    return(
            <View style={searchStyles.container}>
                <Pressable style={searchStyles.btn} onPress={()=> onPressSearch()}>
                    <Image source={require('../assets/images/search.png')} style={searchStyles.img}/>
                </Pressable>
                <TextInput style={searchStyles.input} placeholder={'검색어를 입력해주세요'} placeholderTextColor='#151515' value={value} onChangeText={(value) => setValue(value)}/>
            </View>
    )
}

const searchStyles = StyleSheet.create({
    container: {
        width:widthPercentage(337),
        height:heightPercentage(35),
        marginTop: heightPercentage(15),
        marginBottom: heightPercentage(15),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:12,
        backgroundColor:'#ffffff',
        ...Platform.select({
            ios: {
                shadowColor: "#000000",
                shadowOffset: {
                    width: 1,
                    height: 1,
                },
                shadowOpacity: 0.25,
                shadowRadius: 6,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    btn:{
        marginLeft: widthPercentage(8),
    },
    input:{
        width:widthPercentage(300),
        height:heightPercentage(35),
        padding: 0,
        paddingLeft: widthPercentage(15),
        margin: 0,
        borderRadius:12,
        backgroundColor:'#ffffff',
    },
    img:{
        width:widthPercentage(20),
        height:heightPercentage(21),
        marginLeft: widthPercentage(11),
        resizeMode: 'stretch'
    }
});

export default SearchBar;