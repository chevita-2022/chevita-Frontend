import React, {useEffect, useState} from "react";
import { Text,StyleSheet, ScrollView, SafeAreaView,View, Pressable, Button, TouchableOpacity,Image} from "react-native";
import { NaverLogin, getProfile } from "@react-native-seoul/naver-login";
import { heightPercentage, widthPercentage } from "../../ResponsiveSize";
import { useRecoilState } from "recoil";
import { userID } from "../../recoil/recoil";

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
  const [userId,setUserId]=useRecoilState(userID);

  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === '024') {
      Alert.alert('로그인 실패', profileResult.message);
      return;
    }
    console.log('profileResult', profileResult);
    return profileResult.response.id;
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

    const signInWithNaver = async() => {
      const result = await naverLogin(initials);

      const id = await getUserProfile(); 

      fetch("http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/user/login",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({'token':id})
      }).then(response=>response.json()).then(res=> {
          setUserId(res);
          
          if(res == 0){
            navigation.navigate('Nickname',{token:id});
            console.log('existBool is false')
          }
          else  {
            navigation.navigate('MainScreen');
            console.log('existBool is true');
          }
      })

  
    }

    return(
      <View>
        <TouchableOpacity onPress={()=>signInWithNaver()}>
          <Image source={require('../../assets/images/auth/NaverLogin.png')}
                  style={{width:widthPercentage(253),height:heightPercentage(40),top:482,alignSelf:'center'}} />
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
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'red',
    }
});

export {Naver_Login, NaverLogout, };