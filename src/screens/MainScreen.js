import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Button, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import NanumList from './nanumi/NanumList';
import WriteNanum from './nanumi/WriteNanum';
import Map from './Map';
import ChattingList from './chatting/ChattingList';
import MyPage from './mypage/MyPage';
import { BackBtn } from '../components/Button';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();
const NanumiStack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();
const ChattingStack = createNativeStackNavigator();
const MyPageStack = createNativeStackNavigator();


const HomeStackScreen = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
          tabBarActiveTintColor: '#fb8c00',
          tabBarShowLabel: false,
          headerStyle:{
              backgroundColor:'#fff',
          },
          headerTintColor:'#374957',
          headerTitleStyle:{
              fontWeight:'900',
              fontSize:16,
              fontFamily:'Noto Sans KR',
          },
          headerTitleAlign:'center',
        }}>
        <HomeStack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
};

const NanumiStackScreen = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
          tabBarActiveTintColor: '#fb8c00',
          tabBarShowLabel: false,
          headerStyle:{
              backgroundColor:'#fff',
          },
          headerTintColor:'#374957',
          headerTitleStyle:{
              fontWeight:'900',
              fontSize:16,
              fontFamily:'Noto Sans KR',
          },
          headerTitleAlign:'center',
        }}>
        <NanumiStack.Screen name="Nanumi" component={NanumList} options={{title:'나누미'}}/>
        <NanumiStack.Screen name="WriteNanum" component={WriteNanum} options={{title:'나누미 글 작성'}}/>
      </Stack.Navigator>
    );
};

const MapStackScreen = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
          tabBarActiveTintColor: '#fb8c00',
          tabBarShowLabel: false,
          headerStyle:{
              backgroundColor:'#fff',
          },
          headerTintColor:'#374957',
          headerTitleStyle:{
              fontWeight:'900',
              fontSize:16,
              fontFamily:'Noto Sans KR',
          },
          headerTitleAlign:'center',
        }}>
        <MapStack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    );
};

const ChattingStackScreen = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
          tabBarActiveTintColor: '#fb8c00',
          tabBarShowLabel: false,
          headerStyle:{
              backgroundColor:'#fff',
          },
          headerTintColor:'#374957',
          headerTitleStyle:{
              fontWeight:'900',
              fontSize:16,
              fontFamily:'Noto Sans KR',
          },
          headerTitleAlign:'center',
        }}>
        <ChattingStack.Screen name="ChattingList" component={ChattingList} />
      </Stack.Navigator>
    );
};

const MyPageStackScreen = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
          tabBarActiveTintColor: '#fb8c00',
          tabBarShowLabel: false,
          headerStyle:{
              backgroundColor:'#fff',
          },
          headerTintColor:'#374957',
          headerTitleStyle:{
              fontWeight:'900',
              fontSize:16,
              fontFamily:'Noto Sans KR',
          },
          headerTitleAlign:'center',
        }}>
        <MyPageStack.Screen name="MyPage" component={MyPage} />
      </Stack.Navigator>
    );
};

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown:false
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
            title: '홈',
            tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="NanumiStack"
        component={NanumiStackScreen}
        options={{
          title: '나누미',
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MapStack"
        component={MapStackScreen}
        options={{
          title: '지도',
          tabBarIcon: ({color, size}) => (
            <Icon name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ChattingStack"
        component={ChattingStackScreen}
        options={{
          title: '채팅',
          tabBarIcon: ({color, size}) => (
            <Icon name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MypageStack"
        component={MyPageStackScreen}
        options={{
          title: '마이페이지',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default MainScreen;