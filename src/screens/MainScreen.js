import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {View, Image, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Home from './Home';
import NanumList from './nanumi/NanumList';
import WriteNanum from './nanumi/WriteNanum';
import WriteNanum2 from './nanumi/WriteNanum2';
import Map from './Map';
import ChattingBubble from './chatting/ChattingBubble';
import ChattingList from './chatting/ChattingList';
import MyPage from './mypage/MyPage';
import { BackBtn, SearchBtn, RightBtns, HeartBtn } from '../components/Button';
import { widthPercentage, heightPercentage, fontPercentage } from '../ResponsiveSize';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();
const NanumiStack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();
const ChattingStack = createNativeStackNavigator();
const MyPageStack = createNativeStackNavigator();


const Header = (props) => {
  const {title, shadow, type, navigation, before, transparent} = props;

  const goBack = () => navigation.navigate(before);
  
  return (
    <View style={styles(shadow).header.container}>
      {type == 1 ? <SearchBtn/> : ( type == 2 && <BackBtn goBack={goBack}/>)}
      <Text style={styles().header.title}>{title}</Text>
      {(type == 1 || type == 4) ? <RightBtns/> : (type == 3 && <HeartBtn/>)}
    </View>);
}


const hideTapBar = (navigation, route) => {
  const arr = ['WriteNanum']
  const routeName = getFocusedRouteNameFromRoute(route);
  
  if (arr.includes(routeName)) { 
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  } else {
    navigation.setOptions({tabBarStyle: {display: undefined}});
  }
}


const HomeStackScreen = ({navigation, route}) => {
    return (
      <Stack.Navigator>
        <HomeStack.Screen name="Home" component={Home} options={{header:()=>(<Header title='홈' shadow={true} type={1}/>)}}/>
      </Stack.Navigator>
    );
};

const NanumiStackScreen = ({navigation, route}) => {
    return (
      <Stack.Navigator>
        <NanumiStack.Screen name="Nanumi" component={NanumList} options={{header:()=>(<Header title='나누미' shadow={true} type={1} navigation={navigation}/> )}}/>
        <NanumiStack.Screen name="WriteNanum" component={WriteNanum} options={{header:()=>(<Header title='나누미 글 작성' shadow={false} type={2} navigation={navigation} before='Nanumi'/>)}}/>
        <NanumiStack.Screen name="WriteNanum2" component={WriteNanum2} options={{header:()=>(<Header title='나누미 글 작성' shadow={false} type={2} navigation={navigation} before='WriteNanum'/>)}}/>
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
        <ChattingStack.Screen name="ChattingList" component={ChattingList} options={{header:()=>(<Header title='채팅' shadow={true} type={4}/>)}}/>
        <ChattingStack.Screen name="ChattingBubble" component={ChattingBubble} options={{header:()=>(<Header title='채팅창' shadow={true} type={4}/>)}} />
      </Stack.Navigator>
    );
};

const MyPageStackScreen = () => {
    return (
      <Stack.Navigator>
        <MyPageStack.Screen name="MyPage" component={MyPage} options={{header:()=>(<Header title='마이페이지' shadow={true} type={4}/>)}}/>
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
  header:{
    container: {
      width: '100%',
      height: 50, 
      marginBottom: shadow ? 3 : 0,
      backgroundColor: '#ffffff',
      flexDirection:'row', 
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
    title:{
      color:'#374957',
      fontWeight:'bold',
      fontSize: fontPercentage(16),
      fontFamily:'Noto Sans KR',
    },
    leftIcon:{
      position: 'absolute',
      left: widthPercentage(18),
    },
    backBtn:{
      alignSelf:'flex-start',
      width: widthPercentage(24),
      height: heightPercentage(25.6),
      resizeMode: 'stretch'
    },
  },
  tabBarIcon:{
    width: widthPercentage(28),
    height: heightPercentage(28),
    resizeMode: 'stretch'
  }
});

export default MainScreen;