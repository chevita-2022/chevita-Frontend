import React from "react";
import { Image, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { heightPercentage, widthPercentage } from "../ResponsiveSize";

const ProfileImage = () => {

    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../assets/images/profile.png')} style={styles.profile}/>
                <Image source={require('../assets/images/camera.png')} style={styles.camera}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: widthPercentage(74),
        height: heightPercentage(93),
        paddingTop: heightPercentage(15),
    },
    profile:{
        width: widthPercentage(70),
        height: heightPercentage(71),
        resizeMode: 'stretch'
    },
    camera:{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: widthPercentage(23),
        height: heightPercentage(23),
        resizeMode: 'stretch'
    }
})

export default ProfileImage;