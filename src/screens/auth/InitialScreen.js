import React from "react";
import { Image, SafeAreaView, View, Text, Button } from "react-native";
import AppLogo from "../../components/AppLogo";
import GoogleLogin from "../../components/auth/GoogleLogin";
import KakaoLogin from "../../components/auth/KakaoLogin";
import { fontPercentage } from "../../ResponsiveSize";
import { Naver_Login } from "../../components/auth/NaverLogin";

const InitalScreen=({navigation})=>{
    return(
        <SafeAreaView style={{backgroundColor:'#ffffff',flex:1}}>
            <AppLogo/>
            <Text style={{color:'rgba(0, 0, 0, 0.8)',fontSize:fontPercentage(12),fontWeight:'400',top:220,alignSelf:'center'}}>냉장고 속 잠자는 식재료를 일깨워줄</Text>
            <Text style={{fontFamily:'alata-regular',fontSize:fontPercentage(36),alignSelf:'center',color:'#151515',top:215, fontFamily: 'Alata-Regular'}}>chevita</Text>
            <KakaoLogin/>
            <Naver_Login/>
            <GoogleLogin/>
            {/*<Button title="Nickname" onPress={() => navigation.navigate("Nickname")}/>
            <Button title="Home" onPress={() => navigation.navigate("Main")}/>*/}
        </SafeAreaView>
        
    )
}

export default InitalScreen;