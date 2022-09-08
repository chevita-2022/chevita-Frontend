import React from 'react';
import {View, Image, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import { BackBtn, SearchBtn, RightBtns, HeartBtn } from '../components/Button';
import { widthPercentage, heightPercentage, fontPercentage } from '../ResponsiveSize';

const Header = (props) => {
    const {title, shadow, type, navigation, before} = props;
  
    const goBack = () => navigation.navigate(before);
  
    const LeftIcon = () => {
      if(type == 1)
        return <SearchBtn/>
      else if(type == 2)
        return <BackBtn goBack={goBack} color='navy'/>
      else if(type == 3)
        return <BackBtn goBack={goBack} color='white'/>
      else
        return <></>
    }
  
    const RightIcon = () => {
      return(
        (type == 1 || type == 4) ? <RightBtns/> : (type == 3 ? <HeartBtn/> : <></>)
      )
    }
  
    const transparent = (type == 3 ? true : false)
    
    return (
      <View style={ styles(shadow, transparent).header.container}>
        <LeftIcon />
        <Text style={styles(shadow).header.title}>{title}</Text>
        <RightIcon/>
      </View>);
  }

const styles = (shadow, transparent) => StyleSheet.create({
    header:{
        container: {
          width: '100%',
          height: heightPercentage(70), 
          marginBottom: shadow ? 3 : 0,
          paddingBottom: heightPercentage(20),
          backgroundColor: !transparent ? '#ffffff' : 'transparent',
          borderBottomWidth: 0,
          flexDirection:'row', 
          alignItems: 'flex-end',
          justifyContent: 'center',
          ...Platform.select({
            ios: {
                shadowColor: '#d8d8d8',
                shadowOffset: {
                    width: 0,
                    height: shadow ? 10 : 0,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3,
            },
            android: {
                elevation: shadow ? 3 : 0,
            },
          }),
        },
        title:{
          color:'#374957',
          fontWeight:'bold',
          fontSize: fontPercentage(16),
          fontFamily:'Noto Sans KR',
        },
        leftIcon:{
          position: 'absolute',
          left: widthPercentage(18),
          bottom: heightPercentage(20)
        },
        backBtn:{
          alignSelf:'flex-start',
          width: widthPercentage(24),
          height: heightPercentage(25.6),
          resizeMode: 'stretch'
        },
      },
})

export default Header