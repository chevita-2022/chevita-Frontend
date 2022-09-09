import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {View, Image, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import NanumList from './nanumi/NanumList';
import WriteNanum from './nanumi/WriteNanum';
import WriteNanum2 from './nanumi/WriteNanum2';
import WriteAdress from './nanumi/WriteAdress';
import Map from './Map';
import ChattingBubble from './chatting/ChattingBubble';
import ChattingList from './chatting/ChattingList';
import MyPage from './mypage/MyPage';
import Header from '../components/Header';
import { widthPercentage, heightPercentage, fontPercentage } from '../ResponsiveSize';
import NanumDetail from './nanumi/NanumDetail';
import NanumRecord from './mypage/NanumRecord';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();
const NanumiStack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();
const ChattingStack = createNativeStackNavigator();
const MyPageStack = createNativeStackNavigator();


const hideTapBar = (navigation, route) => {
  const arr = ['WriteAdress']
  const routeName = getFocusedRouteNameFromRoute(route);
  
  if (arr.includes(routeName)) { 
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  } else {
    navigation.setOptions({tabBarStyle: {display: undefined}});
  }
}

const NanumiStackScreen = ({navigation, route}) => {

    return (
      <Stack.Navigator>
        <NanumiStack.Screen name="Nanumi" component={NanumList} options={{header:()=>(<Header title='나누미' shadow={true} type={1} navigation={navigation}/> )}}/>
        <NanumiStack.Screen name="WriteNanum" component={WriteNanum} options={{header:()=>(<Header title='나누미 글 작성' shadow={false} type={2} navigation={navigation} before='Nanumi'/>)}}/>
        <NanumiStack.Screen name="WriteNanum2" component={WriteNanum2} options={{header:()=>(<Header title='나누미 글 작성' shadow={false} type={2} navigation={navigation} before='WriteNanum'/>)}}/>
        <NanumiStack.Screen name="WriteAdress" component={WriteAdress} options={{header:()=>(<Header title='주소 검색' shadow={false} type={2} navigation={navigation} before='WriteNanum2'/>)}}/>
        <NanumiStack.Screen name="NanumDetail" component={NanumDetail} options={{header:()=>(<Header title='' shadow={false} type={3} navigation={navigation} before='Nanumi'/>)}}/>
      </Stack.Navigator>
    );
};

const MapStackScreen = () => {
    return (
      <Stack.Navigator>
        <MapStack.Screen name="Map" component={Map} options={{header:()=>(<Header title='지도' shadow={false} type={1}/>)}}/>
      </Stack.Navigator>
    );
};

const ChattingStackScreen = () => {
    return (
      <Stack.Navigator>
        <ChattingStack.Screen name="ChattingList" component={ChattingList} options={{header:()=>(<Header title='채팅' shadow={true} type={4}/>)}}/>
        <ChattingStack.Screen name="ChattingBubble" component={ChattingBubble} options={{header:()=>(<Header title='채팅창' shadow={true} type={4}/>)}} />
      </Stack.Navigator>
    );
};

const MyPageStackScreen = ({navigation}) => {
    return (
      <Stack.Navigator>
        <MyPageStack.Screen name="MyPage" component={MyPage} options={{header:()=>(<Header title='마이페이지' shadow={true} type={4}/>)}}/>
        <MyPageStack.Screen name="NanumRecord" component={NanumRecord} options={{header:()=>(<Header title='나눔 기록' shadow={true} type={2} navigation={navigation} before="MyPage"/>)}}/>
      </Stack.Navigator>
    );
};


const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
      }} >
      <Tab.Screen
        name="NanumiStack"
        component={NanumiStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            focused ? 
            <Image source={require('../assets/images/focused_nanumi.png')} style={styles.tabBarIcon}/>
            : 
            <Image source={require('../assets/images/nanumi.png')} style={styles.tabBarIcon}/>
          )
        }}
      />
      <Tab.Screen
        name="MapStack"
        component={MapStackScreen}
        options={{
          title: '지도',
          tabBarIcon: ({focused}) => (
            focused ? 
            <Image source={require('../assets/images/focused_map.png')} style={styles.tabBarIcon}/>
            : 
            <Image source={require('../assets/images/map.png')} style={styles.tabBarIcon}/>
          )
        }}
      />
      <Tab.Screen
        name="ChattingStack"
        component={ChattingStackScreen}
        options={{
          title: '채팅',
          tabBarIcon: ({focused}) => (
            focused ? 
            <Image source={require('../assets/images/focused_chatting.png')} style={styles.tabBarIcon}/>
            : 
            <Image source={require('../assets/images/chatting.png')} style={styles.tabBarIcon}/>
          )
        }}
      />
      <Tab.Screen
        name="MypageStack"
        component={MyPageStackScreen}
        options={{
          title: '마이페이지',
          tabBarIcon: ({focused}) => (
            focused ? 
            <Image source={require('../assets/images/focused_mypage.png')} style={styles.tabBarIcon}/>
            : 
            <Image source={require('../assets/images/mypage.png')} style={styles.tabBarIcon}/>
          )
        }}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  
  tabBarIcon:{
    width: widthPercentage(28),
    height: heightPercentage(28),
    resizeMode: 'stretch'
  }
});

export default MainScreen;