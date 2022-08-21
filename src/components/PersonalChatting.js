import React from "react";
import { SafeAreaView,Text,Image,View } from "react-native";

const time=new Date();

const PersonalChatting=()=>{
    return(
        <SafeAreaView style={{flexDirection:'row', paddingLeft:15,paddingRight:15,paddingVertical:7}}>

            <Image source={require("../assets/images/carrotEx1.jpeg")}
             style={{width:60, height:60,borderRadius:12}} />
            <View style={{flexDirection:'column',paddingLeft:10}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontFamily:'Noto Sans KR',fontStyle:'normal',fontWeight:'700',fontSize:14,color:'#374957',top:5}}>
                        세척 당근 반토막 나눔해요
                    </Text>
                    <Text style={{left:'400%',fontFamily:'Noto Sans KR',fontStyle:'normal',fontWeight:'400',fontSize:10,color:'#7D7D7D',top:8}}>
                        오전 11:48 
                    </Text>
                </View>
                <Text style={{paddingTop:14,fontFamily:'Noto Sans KR',fontStyle:'normal',fontWeight:'400',fontSize:13,color:'#7D7D7D'}}>혹시 어디 쯤이신가요?</Text>
            </View>

        </SafeAreaView>
    )
}

export default PersonalChatting;