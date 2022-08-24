import React from 'react';
import {Image} from 'react-native';

const BackBtnNavy = () => {
    return (
      <Image
        source={require('../assets/images/back-btn-navy.png')}
        style={{marginLeft: 10, width: 22, height: 22}}
      />
    );
}

const BackBtnWhite = () => {
  return (
    <Image
      source={require('../assets/images/back-btn-white.png')}
      style={{marginLeft: 10, width: 22, height: 22}}
    />
  );
}

export {BackBtnNavy,BackBtnWhite};