import React from 'react';
import {View, StyleSheet, Text, Alert, SafeAreaView, Button, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStack from './screens/RootStack';
import InitalScreen from './screens/InitialScreen/InitialScreen';
import Nickname from './screens/InitialScreen/Nickname';

const App = () => {

  return (
    <RootStack/>
  );
};

export default App;