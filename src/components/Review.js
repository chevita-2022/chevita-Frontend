import React, { useEffect, useState } from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet, ScrollView, Platform, Image, Modal, Button, Pressable} from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";
import { ProgressBarForVital } from "./ProgressBar";

const ReviewItem = () => {
    return(
        <View style={ReviewItemStyles.container}>
            <Image style={ReviewItemStyles.image}/>
            <View style={ReviewItemStyles.info.container}>
                <Text></Text>
                <Text></Text>
            </View>
            <ProgressBarForVital vital={95}/>
        </View>
    )
}

const ReviewItemStyles = StyleSheet.create({
    container:{

    },
    image:{

    },
    info:{
        container:{

        },
        name:{

        },
        text:{
            
        },
    },
    vital:{

    }
})

export {ReviewItem}