import React, {useEffect, useState} from "react";
import { Text, TextInput, View, StyleSheet} from "react-native";
import { PureComponent } from "react/cjs/react.production.min";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";

const InputStyle1 = (props) => {
    const {name, label, placeholder, value, onChangeText, star} = props;
    return(
        <View style={styles.style1.container}>
            <View style={styles.style1.labelView}>
                <Text style={styles.style1.labelText}>{label}</Text>
                {star && <Text style={styles.style1.star}>*</Text>}
            </View>
            <TextInput style={styles.style1.input} placeholderTextColor='#D8D8D8' placeholder={placeholder} value={value} onChangeText={(value) => onChangeText(name, value)}/>
        </View>
    )
}

export {InputStyle1};

const styles = StyleSheet.create({
    style1:{
        container: {
            width: widthPercentage(317),
        },
        labelView:{
            flexDirection: 'row',
            paddingLeft: 2,
        },
        labelText:{
            fontSize: fontPercentage(16),
            fontWeight: "bold"
        },
        star:{
            position: "relative",
            top: -4,
            left: 3,
            fontSize: fontPercentage(12),
            color: 'red'
        },
        input: {
            height: heightPercentage(20),
            borderBottomWidth: 2,
            borderBottomColor: '#D9D9D9',
            color: 'blue',
        }
    }
})