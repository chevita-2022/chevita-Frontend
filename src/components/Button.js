import React from 'react';
import {Image, TouchableOpacity, StyleSheet, View, Text} from 'react-native';
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

const AlarmBtn = () => {
  return (
    <TouchableOpacity style={styles.alarmBtn.container}>
      <Image source={require('../assets/images/bell.png')} style={styles.alarmBtn.image}/>
    </TouchableOpacity>
  )
}

const HeartBtn = ({full}) => {
  const image=(full===true? require('../assets/images/fullHeart.png'):require('../assets/images/heart.png'))
  return (
    <View style={styles.heartBtn.container} /*onPress={() => goBack()}*/>
      <Image source={image} style={styles.heartBtn.image}/>
    </View>
  );
}

const ImageBtn1 = (props) => {
  const {type} = props;
  const label = type == "major" ? '대표사진' : '상세사진'
  return(
    <View style={styles.imageBtn1.container}>
      <Text style={styles.imageBtn1.text}>{label}</Text>
      <Text style={styles.imageBtn1.plus}>+</Text>
    </View>
  )
}

const ImageBtn2 = () => {
  return(
    <View style={styles.imageBtn2.container} onPress={() => ImagePicker()}>
      <Text style={styles.imageBtn2.text}>영수증 사진</Text>
      <Text style={styles.imageBtn2.plus}>+</Text>
    </View>
  )
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
  alarmBtn: {
    container: {
      position: 'absolute',
      right: widthPercentage(18),
      bottom: heightPercentage(20),
    },
    image:{
      width: widthPercentage(22),
      height: heightPercentage(22),
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
  },
  imageBtn1:{
    container:{
      width: widthPercentage(81),
      height: heightPercentage(133),
      alignItems: 'center',
      justifyContent: 'center',
      height: heightPercentage(133),
      marginLeft: 1,
      marginRight: widthPercentage(4),
      marginVertical: 1,
      backgroundColor: '#FAFAFA',
      borderColor: "#FAFAFA",
      borderRadius: 12,
      ...Platform.select({
          ios: {
              shadowColor: "#000000",
              shadowOffset: {
                  width: 1,
                  height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 6,
          },
          android: {
              elevation: 3,
          },
      }),
  },
  text:{
      fontSize: fontPercentage(12),
      color: '#374957',
  },
  plus:{
      marginTop: heightPercentage(2),
      fontSize: fontPercentage(16),
      color: '#374957',
  }
  },
  imageBtn2:{
    container:{
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: heightPercentage(79),
      backgroundColor: '#FAFAFA',
      borderColor: "#FAFAFA",
      borderRadius: 12,
      ...Platform.select({
          ios: {
              shadowColor: "#000000",
              shadowOffset: {
                  width: 1,
                  height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 6,
          },
          android: {
              elevation: 3,
          },
      }),
    },
    text:{
        fontSize: fontPercentage(12),
        color: '#151515',
    },
    plus:{
        marginTop: heightPercentage(2),
        fontSize: fontPercentage(16),
        color: '#151515',
    }
  }
});

export {BackBtn, SearchBtn, AlarmBtn, HeartBtn, ImageBtn1, ImageBtn2};
