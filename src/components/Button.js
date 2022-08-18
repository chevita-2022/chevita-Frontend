import React from 'react';
import {Image} from 'react-native';

const BackBtn = () => {
    return (
      <Image
        source={require('../assets/images/back-btn.png')}
        style={{marginLeft: 10, width: 22, height: 22}}
      />
    );
}

export {BackBtn};