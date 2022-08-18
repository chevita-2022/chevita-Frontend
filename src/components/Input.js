import React, {useEffect, useState} from "react";
import { Text, TextInput, View, StyleSheet} from "react-native";
import { FlipInEasyX } from "react-native-reanimated";


const InputStyle1 = ({title, placeholder}) => {
    return(
        <View>
            <View style={styles.style1.titleView}>
                <Text>{title}</Text>
                <Text style={styles.style1.star}>*</Text>
            </View>
            <TextInput placeholder={placeholder} style={styles.style1.input}/>
        </View>
    )
}

export {InputStyle1};

const styles = StyleSheet.create({
    style1:{
        titleView:{
            flexDirection: 'row'
        },
        star:{
            color: 'red'
        },
        input: {
            width: '80%',
            borderBottomWidth: 2,
            borderBottomColor: 'grey',
        }
    }
})