import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity,StyleSheet, ScrollView, Platform} from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";
import { ProgressBarForDate } from "./ProgressBar";

const Label = (props) => {
    const {label, star, guide} = props;
    return(
        <View style={LabelStyles.labelView}>
            <Text style={LabelStyles.labelText}>{label}</Text>
            {star && <Text style={LabelStyles.star}>*</Text>}
            {guide && <Text style={LabelStyles.guide}>{guide}</Text>}
        </View>
    )
}

const InputType1 = (props) => {
    const {name, label, placeholder, value, handleChange, star} = props;
    return(
        <View style={InputType1Styles.container}>
            <Label label={label} star={star}/>
            <TextInput style={InputType1Styles.input} placeholderTextColor="#D8D8D8" placeholder={placeholder} value={value} onChangeText={(value) => handleChange(name, value)}/>
        </View>
    )
}

const InputType2 = (props) => {
    const {name, label, value, star, handleChange} = props;

    const [focused, setFocused] = useState("")

    const onChangeType = (name, type) =>{
        setFocused(type);
        handleChange(name, type);
        console.log(focused === "veg")
    }

    return(
        <View style={InputType2Styles().container}>
            <Label label={label} star={star}/>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={InputType2Styles(focused === "veg").item} activeOpacity={0.6} onPress={() => onChangeType(name, "veg")}>
                    <Text style={InputType2Styles().text}>채소</Text>
                </TouchableOpacity>
                <TouchableOpacity style={InputType2Styles(focused === "fruit").item} onPress={() => onChangeType(name, "fruit")}>
                    <Text style={InputType2Styles().text}>과일</Text>
                </TouchableOpacity>
                <TouchableOpacity style={InputType2Styles(focused === "diary").item} onPress={() => onChangeType(name, "diary")}>
                    <Text style={InputType2Styles().text}>유제품</Text>
                </TouchableOpacity>
                <TouchableOpacity style={InputType2Styles(focused === "meat").item} onPress={() => onChangeType(name, "meat")}>
                    <Text style={InputType2Styles().text}>육류/계란</Text>
                </TouchableOpacity>
                <TouchableOpacity style={InputType2Styles(focused === "frz").item} onPress={() => onChangeType(name, "frz")}>
                    <Text style={InputType2Styles().text}>가공/냉동</Text>
                </TouchableOpacity>
                <TouchableOpacity style={InputType2Styles(focused === "sauce").item} onPress={() => onChangeType(name, "sauce")}>
                    <Text style={InputType2Styles().text}>소스</Text>
                </TouchableOpacity>
                <TouchableOpacity style={InputType2Styles(focused === "etc").item} onPress={() => onChangeType(name, "etc")}>
                    <Text style={InputType2Styles().text}>기타</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const InputType3 = (props) => {
    const {name, label, placeholder, value, handleChange, star, guide} = props;

    console.log(value)

    const onChangeDate = (name, data, type) => {
        const temp = {...value, [type]: parseInt(data)}
        console.log(temp);
        handleChange(name, temp);
    }

    return(
        <View style={InputType3Styles.container}>
            <Label label={label} star={star} guide={guide}/>
            <View style={InputType3Styles.inputContainer}>
                <TextInput keyboardType='numeric' style={InputType3Styles.input} placeholder={placeholder[0]} value={value.year} onChangeText={(value) => onChangeDate(name, value, 'year')}/>
                <TextInput keyboardType='numeric' style={InputType3Styles.input} placeholder={placeholder[1]} value={value.month} onChangeText={(value) => onChangeDate(name, value, 'month')}/>
                <TextInput keyboardType='numeric' style={InputType3Styles.input} placeholder={placeholder[2]} value={value.daty} onChangeText={(value) => onChangeDate(name, value, 'day')}/>
            </View>
        </View>
    )
}

const InputType4 = (props) => {
    const {name, label, placeholder, value, handleChange, star, guide} = props;

    console.log(value)

    const onChangeDate = (name, data, type) => {
        const temp = {...value, [type]: parseInt(data)}
        console.log(temp);
        handleChange(name, temp);
    }

    return(
        <View style={InputType4Styles.container}>
            <Label label={label} star={star} guide={guide}/>
            <ProgressBarForDate/>
        </View>
    )
}

export {InputType1, InputType2, InputType3, InputType4};

const LabelStyles = StyleSheet.create({
    labelView:{
        flexDirection: "row",
        width: widthPercentage(317),
        height: heightPercentage(20),
        paddingLeft: 2,
        marginBottom: heightPercentage(10)
    },
    labelText:{
        fontSize: fontPercentage(16),
        fontWeight: "bold",
        color: '#374957'
    },
    star:{
        position: "relative",
        top: -4,
        left: 3,
        fontSize: fontPercentage(12),
        color: "red"
    },
    guide:{
        textAlignVertical: 'bottom',
        paddingLeft: widthPercentage(7),
        fontSize: fontPercentage(10),
        color: '#374957'
    }
});

const InputType1Styles = StyleSheet.create({
    container: {
        width: widthPercentage(317),
        height: heightPercentage(67),
        marginBottom: heightPercentage(22),
    },
    input: {
        width: '100%',
        height: heightPercentage(30),
        padding:0,
        margin:0,
        borderBottomWidth: 2,
        borderBottomColor: "#D9D9D9",
        color: "black",
    }
})

const InputType2Styles = (focused) => StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        height: heightPercentage(84),
        marginBottom: heightPercentage(22),
    },
    item:{
        alignItems: "center",
        justifyContent: "center",
        width: widthPercentage(100),
        height: heightPercentage(45),
        marginVertical: 2,
        marginHorizontal: widthPercentage(7.5),
        backgroundColor: focused ? "FFD6005E" :"#ffffff",
        borderColor: focused ? "FFD6005E" :"#ffffff",
        borderRadius: 15,
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
    text: {
        fontSize: fontPercentage(15),
        fontWeight: "bold"
    }
})

const InputType3Styles = StyleSheet.create({
    container:{
        alignItems:"center",
        width: widthPercentage(317),
        height: heightPercentage(67),
        marginBottom: heightPercentage(22),
    },
    inputContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems:"center",
        justifyContent: 'space-between',
        width: '100%',
        height: heightPercentage(32),
    },
    input: {
        textAlign: 'center',
        width: widthPercentage(85),
        height: heightPercentage(30),
        padding:0,
        margin:0,
        borderBottomWidth: 2,
        borderBottomColor: "#D9D9D9",
        color: "black",
    }
})

const InputType4Styles = StyleSheet.create({
    container:{
        width: widthPercentage(317),
        height: heightPercentage(100),
        marginBottom: heightPercentage(22),
    }
})