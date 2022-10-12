import React, { useState } from "react";
import { Text, Image, View, TouchableOpacity,StyleSheet, ScrollView, Platform, } from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";


const ProgressBarForDate = (props) =>{
    const {start, end,value} = props;
    let bar_value=value
    if(value>=30) {
        bar_value=30
    }

    return(
        <View style={barStyles().dateBar.container}>
            <View style={barStyles().dateBar.barGroup}>
                <View style={barStyles().dateBar.startCircle}/>
                <View style={barStyles().dateBar.bar}>
                    <View style={barStyles(bar_value).dateBar.currentBar}>
                        <View style={barStyles().dateBar.currentCircle}>
                            <View style={barStyles().dateBar.textBallon.container}>
                                <Image source={require('../assets/images/ballon.png')} style={barStyles().dateBar.textBallon.ballon}/>
                                <Text style={barStyles().dateBar.textBallon.text}>{value}일</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={barStyles().dateBar.endCircle}/>
            </View>
            <View style={barStyles().dateBar.textGroup}>
                <Text style={barStyles().dateBar.text}>1일</Text>
                <Text style={barStyles().dateBar.text}>30일+</Text>
            </View>
        </View>
    )
}

const ProgressBarForVital = (props) =>{
    const {vital, top} = props;
    return(
        <View style={barStyles().vitalBar.container}>
            <View style={barStyles().vitalBar.label.container}>
                <Image source={require('../assets/images/vital.png')} style={barStyles().vitalBar.label.image}/>
                <Text style={barStyles().vitalBar.label.text}>바이탈</Text>
            </View>
            <View style={barStyles().vitalBar.barGroup}>
                <View style={barStyles().vitalBar.bar}>
                    <View style={barStyles(vital).vitalBar.currentBar}>
                        <View style={barStyles().vitalBar.currentCircle}>
                            <Text style={barStyles(vital,top).vitalBar.number}>{vital}%</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const barStyles = (current, top) => StyleSheet.create({
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
            borderRadius: 90,
            zIndex: 3,
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
                    elevation: 5,
                },
            }),
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
                resizeMode: 'stretch'
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
    },
    vitalBar:{
        container:{
            width: '100%',
            height: '100%',
            justifyContent: 'space-around',
            paddingBottom: heightPercentage(17)
        },
        label:{
            container:{
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: heightPercentage(3),
            },
            image:{
                width: widthPercentage(14),
                height: heightPercentage(14),
                resizeMode: 'stretch',
            },
            text:{
                marginLeft: widthPercentage(2),
                fontSize: fontPercentage(10),
                color: '#7D7D7D'
            }
        },
        barGroup:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
        },
        bar:{
            width: '100%',
            height: heightPercentage(3),
            borderRadius: 2,
            backgroundColor: '#D9D9D9',
        },
        currentBar:{
            justifyContent:'center',
            width: current ? (current)+'%' : '50%',
            height: heightPercentage(3),
            paddingTop: heightPercentage(3),
            borderRadius: 2,
            backgroundColor: '#FFD600',
        },
        currentCircle:{
            position: 'absolute',
            right: 0,
            width: widthPercentage(9),
            height: heightPercentage(9),
            backgroundColor: '#FFD600',
            borderRadius: 90,
            zIndex: 3,
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
        number:{
            position: 'absolute',
            top: top ? -heightPercentage(20) : 0,
            bottom: top ? 0 : -heightPercentage(20),
            right: -widthPercentage(15),
            width: widthPercentage(31),
            height: heightPercentage(17),
            fontSize: fontPercentage(14),
            fontWeight: 'bold',
            color: '#FFB800'
        }
    }
})

export {ProgressBarForDate, ProgressBarForVital};