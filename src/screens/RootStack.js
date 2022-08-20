import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./auth/Login";
import MainScreen from "./MainScreen";

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();


const AuthStackScreen = () => {
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
        <AuthStack.Screen name="Auth" component={Login} />
      </Stack.Navigator>
    );
};

const RootStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
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
  