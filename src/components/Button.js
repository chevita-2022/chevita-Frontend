import React from 'react';
import {Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import { widthPercentage, heightPercentage, fontPercentage } from '../ResponsiveSize';

const BackBtn = ({goBack, color}) => {
  const image = (color === 'navy' ? require('../assets/images/back-btn-navy.png') : require('../assets/images/back-btn-white.png'))
    return (
      <TouchableOpacity style={styles.backBtn.container} onPress={() => goBack()}>
        <Image source={image} style={styles.backBtn.image}/>
      </TouchableOpacity>
    );
}

const SearchBtn = () => {
  return (
    <TouchableOpacity style={styles.searchBtn.container} onPress={() => goBack()}>
      <Image source={require('../assets/images/search.png')} style={styles.searchBtn.image}/>
    </TouchableOpacity>
  );
}

const RightBtns = () => {
  return (
    <View style={styles.rightBtns.container}>
      <TouchableOpacity style={styles.rightBtns.icon}>
        <Image source={require('../assets/images/bell.png')} style={styles.rightBtns.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightBtns.icon}>
        <Image source={require('../assets/images/menu.png')} style={styles.rightBtns.image}/>
      </TouchableOpacity>
    </View>
  )
}

const HeartBtn = ({full}) => {
  const image=(full===true? require('../assets/images/fullHeart.png'):require('../assets/images/heart.png'))
  console.log(full);
  return (
    <View style={styles.heartBtn.container} /*onPress={() => goBack()}*/>
      <Image source={image} style={styles.heartBtn.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtn:{
    container:{
      position: 'absolute',
      left: widthPercentage(18),
      bottom: heightPercentage(20)
    },
    image:{
      alignSelf:'flex-start',
      width: widthPercentage(24),
      height: heightPercentage(25.6),
      resizeMode: 'stretch'
    },
  },
  searchBtn:{
    container:{
      position: 'absolute',
      left: widthPercentage(18),
      bottom: heightPercentage(20)
    },
    image:{
      alignSelf:'flex-start',
      width: widthPercentage(22),
      height: heightPercentage(22),
      resizeMode: 'stretch'
    },
  },
  rightBtns: {
    container: {
      position: 'absolute',
      right: widthPercentage(18),
      bottom: heightPercentage(20),
      width: widthPercentage(64),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    icon:{

    },
    image:{
      width: widthPercentage(24),
      height: heightPercentage(24),
      resizeMode: 'stretch'
    }
  },
  heartBtn:{
    container:{
      position: 'absolute',
      right: widthPercentage(18),
      bottom: heightPercentage(20)
    },
    image:{
      width: widthPercentage(15),
      height: heightPercentage(15),
      resizeMode: 'stretch'
    },
  }
});

export {BackBtn, SearchBtn, RightBtns, HeartBtn};
