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
import { useNavigation } from "@react-navigation/native";

export const SIGN_WITH_KAKAO = async () => {
  const token = await login();

  console.log("toKEN?"+token.accessToken);
  return token
};

const KakaoLogin = () => {

  const navigation=useNavigation();
  const [result, setResult] = useState('');
  const [exist,setExist]=useState();
  let existBool='';

  const signInWithKakao = async () => {
    const token = await login();

    setResult(JSON.stringify(token));
    
    const profile = await getKakaoProfile();
    
    setResult(JSON.stringify(profile));
    console.log(profile.id);

  fetch("http://52.78.161.124/user/login",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({'token':profile.id})
    }).then(response=>response.json()).then(res=> {
      console.log(res);

      if(res===0){
        navigation.navigate('Nickname',{token:profile.id});
        console.log('existBool is false')
      }
      else  {
        navigation.navigate('MainScreen');
        console.log('existBool is true');
      }
     })

    /*  if(exist.existingUser===false && exist.existingUser!= null){
        navigation.navigate('Profile');
      }
      else if (exist.existingUser===true) {
        navigation.navigate('MainScreen');
        console.log('true');
      }*/
  };

  const signOutWithKakao = async () => {
    const message = await logout();

    setResult(message);
    //console.log(result);
  };
  
  return (
    <TouchableOpacity onPress={signInWithKakao}>
        <Image
          source={require("../../assets/images/auth/KakaoLogin.png")}
          style={{width:widthPercentage(263),height:heightPercentage(40),top:470,alignSelf:'center' }} />
    </TouchableOpacity>
  );

}

export default KakaoLogin;
