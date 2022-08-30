import React from "react";
import { View,Image, Platform, StyleSheet } from "react-native";
import { widthPercentage,heightPercentage } from "../ResponsiveSize";

const AppLogo=()=>{
    return(
        <View style={Logo.logo}>
                <Image source={require('../assets/images/AppLogo.png')} style={{position:'absolute',width:widthPercentage(42),height:heightPercentage(44),alignSelf:'center',top:13}}/>
        </View>
    )
}

const Logo=StyleSheet.create({
    logo:{
        borderRadius:12.5,
        width:widthPercentage(69),
        height:heightPercentage(69),
        top:190,
        alignSelf:'center',
        backgroundColor:'#ffffff',
        ...Platform.select({
            android:{
                elevation:3
            }
        })
    }
})

export default AppLogo;