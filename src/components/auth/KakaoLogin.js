import React from "react";
import { Pressable ,TouchableOpacity,Image,Text} from "react-native";
import {
  KakaoOAuthToken,
  KakaoProfile,
  //getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from "@react-native-seoul/kakao-login";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

const signInWithKakao = async () => {
    const token = await login();
  
    setResult(JSON.stringify(token));
  };
  
  const signOutWithKakao = async () => {
    const message = await logout();
  
    setResult(message);
  };
  
  const getKakaoProfile = async () => {
    const profile = await getProfile();
  
    setResult(JSON.stringify(profile));
  };
  
  const unlinkKakao = async () => {
    const message = await unlink();
  
    setResult(message);
  };

  const KakaoLogin=()=>(
    <TouchableOpacity onPress={signInWithKakao}>
        <Image
          source={require("../../assets/images/auth/KakaoLogin.png")}
          style={{ top: 190,width:widthPercentage(263),height:heightPercentage(40),top:423,alignSelf:'center' }} />
    </TouchableOpacity>
  )

  export default KakaoLogin;

