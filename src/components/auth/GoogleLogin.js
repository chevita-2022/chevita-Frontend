import React from "react";
import { Image,StyleSheet,TouchableOpacity } from "react-native";
import { heightPercentage, widthPercentage } from "../../ResponsiveSize";

const GoogleLogin=()=>{
    return(
        <TouchableOpacity>
            <Image source={require('../../assets/images/auth/GoogleLogin.png')} 
                style={googleLogin.googleLogin}/>
        </TouchableOpacity>
    )
}

const googleLogin=StyleSheet.create({
    googleLogin:{
        width:widthPercentage(263),
        height:heightPercentage(40),
        top:450,
        alignSelf:'center'
    }
})

export default GoogleLogin; 