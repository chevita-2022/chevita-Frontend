import React from 'react';
import {View, StyleSheet, Text, Alert, SafeAreaView, Button, Platform} from 'react-native';
import NanumList from './components/NanumList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStack from './screens/RootStack';

const App = () => {

  return (
    <RootStack/>
  );
};

export default App;