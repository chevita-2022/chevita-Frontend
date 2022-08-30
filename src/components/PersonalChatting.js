import React from "react";
import { SafeAreaView,Text,Image,View } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../ResponsiveSize";

const time=new Date();

const PersonalChatting=({title,time,message,key})=>{

    return(
        <SafeAreaView style={{flexDirection:'row', paddingLeft:15,paddingRight:15,paddingVertical:7}}>
            <Image source={require("../assets/images/carrotEx1.jpeg")}
             style={{width:widthPercentage(60), height:heightPercentage(60),borderRadius:12,borderColor:'gray',borderWidth:1}} />
            <View style={{flexDirection:'column',paddingLeft:10}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{position:'absolute',top:7,fontFamily:'Noto Sans KR',fontStyle:'normal',fontWeight:'700',fontSize:fontPercentage(14),color:'#374957'}}>
                        {title}
                    </Text>
                    <Text style={{position:'absolute',left:244,top:9,fontFamily:'Noto Sans KR',fontStyle:'normal',fontWeight:'400',fontSize:fontPercentage(10),color:'#7D7D7D'}}>
                        {time} 
                    </Text>
                </View>
                <Text style={{position:'absolute',top:21,left:10,paddingTop:14,fontFamily:'Noto Sans KR',fontStyle:'normal',fontWeight:'400',fontSize:fontPercentage(13),color:'#7D7D7D'}}>{message}</Text>
            </View>
        </SafeAreaView>
    )
}

export default PersonalChatting;