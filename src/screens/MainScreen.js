import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Image, Text, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import NanumList from './nanumi/NanumList';
import WriteNanum from './nanumi/WriteNanum';
import Map from './Map';
import ChattingList from './chatting/ChattingList';
import MyPage from './mypage/MyPage';
import { BackBtn } from '../components/Button';
import { widthPercentage, heightPercentage, fontPercentage } from '../ResponsiveSize';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();
const NanumiStack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();
const ChattingStack = createNativeStackNavigator();
const MyPageStack = createNativeStackNavigator();


const Header = (props) => {
  const {title, shadow} = props;
  return (
    <View style={styles(shadow).header}>
      <Text style={styles().headerText}>{title}</Text>
    </View>);
}

const HomeStackScreen = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
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
          headerStyle:{
              height: 0,
              backgroundColor:'#ffffff',
          },
          headerTintColor:'#374957',
          headerTitleStyle:{
              fontWeight:'900',
              fontSize:16,
              fontFamily:'Noto Sans KR',
          },
          headerTitleAlign:'center',
        }} >
        <NanumiStack.Screen name="Nanumi" component={NanumList} options={{title:'나누미'}}/>
        <NanumiStack.Screen name="WriteNanum" component={WriteNanum} options={{title:'나누미 글 작성'}}/>
      </Stack.Navigator>
    );
};

const MapStackScreen = () => {
    return (
      <Stack.Navigator 
        screenOptions={({name}) => ({       
        })}>
        <MapStack.Screen name="Map" component={Map} options={{header:()=>(<Header title='지도' shadow={true}/>)}}/>
      </Stack.Navigator>
    );
};

const ChattingStackScreen = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
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
        <MyPageStack.Screen name="MyPage" component={MyPage} options={{headerStyle:{height:30}}}/>
      </Stack.Navigator>
    );
};

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: '#374957',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
            title: '홈',
            tabBarIcon: ({focused}) => (
              focused ? 
              <Image source={require('../assets/images/focused_home.png')} style={styles().tabBarIcon}/>
              : 
              <Image source={require('../assets/images/home.png')} style={styles().tabBarIcon}/>
            )
        }}
      />
      <Tab.Screen
        name="NanumiStack"
        component={NanumiStackScreen}
        options={{
          title: '나누미',
          tabBarIcon: ({focused}) => (
            focused ? 
            <Image source={require('../assets/images/focused_nanumi.png')} style={styles().tabBarIcon}/>
            : 
            <Image source={require('../assets/images/nanumi.png')} style={styles().tabBarIcon}/>
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
            <Image source={require('../assets/images/focused_map.png')} style={styles().tabBarIcon}/>
            : 
            <Image source={require('../assets/images/map.png')} style={styles().tabBarIcon}/>
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
            <Image source={require('../assets/images/focused_chatting.png')} style={styles().tabBarIcon}/>
            : 
            <Image source={require('../assets/images/chatting.png')} style={styles().tabBarIcon}/>
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
            <Image source={require('../assets/images/focused_mypage.png')} style={styles().tabBarIcon}/>
            : 
            <Image source={require('../assets/images/mypage.png')} style={styles().tabBarIcon}/>
          )
        }}
      />

    </Tab.Navigator>
  );
}

const styles = (shadow) => StyleSheet.create({
  header: {
    height: 45, 
    marginBottom: 3,
    backgroundColor: '#ffffff', 
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
          shadowColor: '#d8d8d8',
          shadowOffset: {
              width: 0,
              height: shadow ? 10 : 0,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3,
      },
      android: {
          elevation: shadow ? 3 : 0,
      },
    }),
  },
  headerText:{
    color:'#374957',
    fontWeight:'bold',
    fontSize: fontPercentage(16),
    fontFamily:'Noto Sans KR',
  },
  tabBarIcon:{
    width: widthPercentage(28),
    height: heightPercentage(28),
    resizeMode: 'stretch'
  }
});

export default MainScreen;