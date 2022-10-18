import React, {useEffect, useState} from "react";
import { Text,StyleSheet, ScrollView, SafeAreaView,View, Pressable, Button, TouchableOpacity,Image} from "react-native";
import { NaverLogin, getProfile } from "@react-native-seoul/naver-login";
import { heightPercentage, widthPercentage } from "../../ResponsiveSize";

const iosKeys = {
    kConsumerKey: "DHjT1zinlPR3aGq0LB1c",
    kConsumerSecret: "zWMe8giAna",
    kServiceAppName: "채비타",
    kServiceAppUrlScheme: "naverLogin" // only for iOS
  };
  
const androidKeys = {
    kConsumerKey: "DHjT1zinlPR3aGq0LB1c",
    kConsumerSecret: "zWMe8giAna",
    kServiceAppName: "채비타"
};
  
const initials = Platform.OS === 'ios' ? iosKeys : androidKeys;

const Naver_Login = ({navigation}) => {
  const [naverToken, setNaverToken] = React.useState(null);
  const [userId, setUserId] = useState()

  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === '024') {
      Alert.alert('로그인 실패', profileResult.message);
      return;
    }
    console.log('profileResult', profileResult);
    fetch("http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/user/login",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({'token':profileResult.response.id})
      }).then(response=>response.json()).then(res=> {
          console.log(res)
          if(res == 0){
            navigation.navigate('Nickname',{token:profileResult.response.id});
            console.log('existBool is false')
          }
          else  {
            navigation.navigate('MainScreen');
            console.log('existBool is true');
          }
      })
  };

    const naverLogin = props => {
      return new Promise((resolve, reject) => {
        NaverLogin.login(props, (err, token) => {
          console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
          setNaverToken(token);
          console.log("navertoken: "+ JSON.stringify(token))
          if (err) {
            reject(err);
            return;
          }
          resolve(token);
        });
      });
    };

    useEffect(()=>{
      if(naverToken){
        getUserProfile();
      }
    },[naverToken])

    const signInWithNaver = async() => {
      await naverLogin(initials);
    }

    return(
      <View>
        <TouchableOpacity onPress={()=>signInWithNaver()}>
          <Image source={require('../../assets/images/auth/NaverLogin.png')}
                  style={{width:widthPercentage(263),height:heightPercentage(40),top:482,alignSelf:'center'}} />
        </TouchableOpacity>
      </View>
    )
}

const NaverLogout = () => {

    const naverLogout = () => {
        NaverLogin.logout();
        setNaverToken(null);
      };

    return(
        <View>
            <TouchableOpacity>
                {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout} />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: widthPercentage(263),
      height: heightPercentage(40),
    },
});

export {Naver_Login, NaverLogout, };