import React from 'react';
import {View, StyleSheet, Text, Alert, SafeAreaView, Button, Platform} from 'react-native';
import { NaverLogin, getProfile } from "@react-native-seoul/naver-login";
import KakaoLogin from './components/KakaoLogin';
import NanumList from './components/NanumList';
import StackScreen from './components/NanumList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const App = () => {
  const [naverToken, setNaverToken] = React.useState(null);

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

  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken(null);
  };

  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === '024') {
      Alert.alert('로그인 실패', profileResult.message);
      return;
    }
    console.log('profileResult', profileResult);
  };

  return (
   /* <SafeAreaView style={styles.container}>
      <Button
        title="네이버 아이디로 로그인하기"
        onPress={() => naverLogin(initials)}
        styles={styles.button}
      />
      {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout} />}

      {!!naverToken && (
        <Button title="회원정보 가져오기" onPress={getUserProfile} />
      )}

      <KakaoLogin/>
      </SafeAreaView> */
      <NanumList/>
  );
};

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

export default App;