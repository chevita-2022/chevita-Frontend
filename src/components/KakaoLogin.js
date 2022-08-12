import React from "react";
import { Pressable ,TouchableOpacity,Image} from "react-native";
import {
  KakaoOAuthToken,
  KakaoProfile,
  //getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from "@react-native-seoul/kakao-login";

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
          source={require("../assets/images/kakaoStart.png")}
          style={{ top: 150 }} />
    </TouchableOpacity>
  )

  export default KakaoLogin;

