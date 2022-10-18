import React from 'react';
import {View, StyleSheet, Text, Alert, SafeAreaView, Button, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStack from './screens/RootStack';
import { RecoilRoot } from 'recoil';

const App = () => {

  return (
    <RecoilRoot>
      <RootStack/>
    </RecoilRoot>
  );
};

export default App;