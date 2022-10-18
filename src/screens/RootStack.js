import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./MainScreen";
import InitialScreen from "./auth/InitialScreen"
import WriteAdress from './nanumi/WriteAdress';
import Profile from './auth/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();


const AuthStackScreen = () => {

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
          headerShown:false,
        }}>
        <AuthStack.Screen name="Initial" component={InitialScreen}/>
        <AuthStack.Screen name="Nickname" component={Profile} />
        <AuthStack.Screen name="MainScreen" component={MainScreen} />
        <AuthStack.Screen name="WriteAdress" component={WriteAdress} />
      </Stack.Navigator>
    );
};

const RootStack = () => {

  const [isLoggedIn, setIsLoggedIn] = useState("Loading");

  useEffect(()=>{
    AsyncStorage.getItem('userData', (err, result) => {
      if(JSON.parse(result).id) setIsLoggedIn(true);
      else setIsLoggedIn(false);

      console.log(JSON.parse(result))
    });;
    console.log(isLoggedIn)
  },[])

    return (isLoggedIn != "Loading" &&
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isLoggedIn ? "Main" : "Auth"} screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Auth"
            component={AuthStackScreen}
          />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default RootStack;
  