import React,{useState} from "react";
import { Pressable ,TouchableOpacity,Image,Text} from "react-native";
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from "@react-native-seoul/kakao-login";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

export const SIGN_WITH_KAKAO = async () => {
  const token = await login();

  console.log("toKEN?"+token.accessToken);
  return token
};

const KakaoLogin = () => {

  const [result, setResult] = useState('');
  const signInWithKakao = async () => {
    const token = await login();

    setResult(JSON.stringify(token));
    console.log(token);
    console.log(token.accessToken);
  };

  const signOutWithKakao = async () => {
    const message = await logout();

    setResult(message);
    //console.log(result);
  };

  const getProfile = async () => {
    const profile = await getKakaoProfile();

    setResult(JSON.stringify(profile));
    console.log(profile.nickname);
    console.log(profile.id);
  };
  
  return (
    <TouchableOpacity onPress={signInWithKakao}>
        <Image
          source={require("../../assets/images/auth/KakaoLogin.png")}
          style={{ top: 190,width:widthPercentage(263),height:heightPercentage(40),top:423,alignSelf:'center' }} />
    </TouchableOpacity>
  );
};

export default KakaoLogin;
