import React from "react";
import { Image, StyleSheet, View, Text, Button, TouchableOpacity, Platform } from "react-native";
import { heightPercentage, widthPercentage } from "../ResponsiveSize";

const ProfileImage = (props) => {
    const {image} = props;
    
    const uri = image ? {uri: image} : require('../assets/images/profile.png')
    
    return(
        <View style={styles.container}>
                <Image source={uri} style={styles.profile}/>
        </View>
    )
}

const ProfileImage1 = (props) => {
    const {image} = props;

    const uri = image ? {uri: image} : require('../assets/images/profile2.png')

    return(/*
        <>
            <View style={{width:widthPercentage(126),margin:30,height:heightPercentage(126),borderRadius:100,alignSelf:'center',backgroundColor:'linear-gradient(134.17deg, rgba(247, 59, 0, 0.57) 20.54%, #FFB800 51.1%, #FFF7D0 96.74%)',}} />
                    <View style={{position:'absolute',left:170,top:110,width:widthPercentage(40),height:heightPercentage(40),borderRadius:100,backgroundColor:'#ffffff',...Platform.select({android:{elevation:3}})}}>
                        <Image source={require('../assets/images/camera1.png')} style={{width:widthPercentage(24),height:heightPercentage(24),alignSelf:'center',top:6}} />
                    </View>
        </>*/
        <View style={{padding:15}}>
            <Image source={uri} style={{alignSelf:'center',width:widthPercentage(126),height:heightPercentage(129), borderRadius: 90, resizeMode: 'stretch'}} />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: widthPercentage(74),
        height: heightPercentage(94),
        paddingTop: heightPercentage(15),
    },
    profile:{
        width: widthPercentage(74),
        height: heightPercentage(74),
        resizeMode: 'stretch'
    },
})

export {ProfileImage, ProfileImage1};