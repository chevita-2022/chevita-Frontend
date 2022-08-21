import React, { useState } from "react";
import { Text, Image, View, TouchableOpacity,StyleSheet, ScrollView, Platform} from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";


const ProgressBarForDate = (props) =>{
    const {start, end} = props;
    const value = 23
    return(
        <View style={barStyles().dateBar.container}>
            <View style={barStyles().dateBar.barGroup}>
                <View style={barStyles().dateBar.startCircle}/>
                <View style={barStyles().dateBar.bar}>
                    <View style={barStyles(10).dateBar.currentBar}>
                        <View style={barStyles().dateBar.currentCircle}>
                            <View style={barStyles().dateBar.textBallon.container}>
                                <Image source={require('../assets/images/ballon.png')} style={barStyles().dateBar.textBallon.ballon}/>
                                <Text style={barStyles().dateBar.textBallon.text}>23일</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={barStyles().dateBar.endCircle}/>
            </View>
            <View style={barStyles().dateBar.textGroup}>
                <Text style={barStyles().dateBar.text}>1일</Text>
                <Text style={barStyles().dateBar.text}>30일</Text>
            </View>
        </View>
    )
}

const barStyles = (current) => StyleSheet.create({
    dateBar:{
        container:{
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            height: heightPercentage(70),
            paddingTop: 10,
        },
        barGroup:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '98%',
        },
        textGroup:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 2,
        },
        bar:{
            width: '100%',
            height: heightPercentage(4),
            backgroundColor: '#D9D9D9',
        },
        startCircle:{
            position: 'absolute',
            left:0,
            width: widthPercentage(9),
            height: heightPercentage(9),
            backgroundColor: '#374957',
            borderRadius: 90
        },
        endCircle:{
            position: 'absolute',
            right:0,
            width: widthPercentage(9),
            height: heightPercentage(9),
            backgroundColor: '#D9D9D9',
            borderRadius: 90
        },
        text:{
            fontSize: fontPercentage(10),
            color: '#374957'
        },
        currentBar:{
            justifyContent:'center',
            width: (current/30*100)+'%',
            height: heightPercentage(4),
            paddingVertical: 2,
            backgroundColor: '#374957',
            
        },
        currentCircle:{
            position: 'absolute',
            right: 0,
            width: widthPercentage(12),
            height: heightPercentage(12),
            backgroundColor: '#374957',
            borderRadius: 90
        },
        textBallon:{
            container:{
                position: 'absolute',
                top: -heightPercentage(41),
                right: -widthPercentage(26),
                width: widthPercentage(65),
                height: heightPercentage(41),
            },
            ballon:{
                width: widthPercentage(65),
                height: heightPercentage(41),
            },
            text:{
                position: 'absolute',
                width: widthPercentage(65),
                height: heightPercentage(35),
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: fontPercentage(12),
                color: '#374957'
            }    
        }


    }
})

export {ProgressBarForDate};