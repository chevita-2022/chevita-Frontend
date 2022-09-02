import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./MainScreen";
import InitialScreen from "./auth/InitialScreen"
import Nickname from './auth/Nickname';

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
        }}>
        <AuthStack.Screen name="Initial" component={InitialScreen} />
        <AuthStack.Screen name="Nickname" component={Nickname} />
      </Stack.Navigator>
    );
};

const RootStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth" screenOptions={{headerShown: false}}>
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
  