import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet, ScrollView, Platform, Image} from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";
import { ImagePicker } from "./ImagePicker";
import { ProgressBarForDate } from "./ProgressBar";
import { DayPicker, TimePicker } from "./CalendarPicker";

const Label = (props) => {
    const {label, star, guide, type} = props;
    return(
        <View style={LabelStyles(type).labelView}>
            <View style={{flexDirection: 'row'}}>
                <Text style={LabelStyles().labelText}>{label}</Text>
                {star && <Text style={LabelStyles().star}>*</Text>}
            </View>
            {guide && <Text style={LabelStyles(type).guide}>{guide}</Text>}
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
            <Label label={label} star={star} guide={guide} />
            <ProgressBarForDate/>
        </View>
    )
}

const NicknameInput = ({ value, handleChange}) => {
    return(
        <View>
            <TextInput maxLength={12} style={{width: '100%', padding:0,margin:0, borderBottomWidth: 2, borderBottomColor: "#767676", color: "black",}}  value={value} onChangeText={(value) => handleChange(value)} />
        </View>
    )
}

const DropDownInput = (props) => {
    const {name, label, value, star, handleChange} = props;
    const etc = false;
    const [open, setOpen] = useState(false);

    return (
        <View style={DropDownStyles.container}>
            <Label label={label} star={star}/>
            <TouchableOpacity style={DropDownStyles.trigger.container} onPress={() => setOpen(true)}>
                    <View style={DropDownStyles.trigger.current}>
                        <Text style={DropDownStyles.trigger.text}>상온 보관</Text>
                        <Image source={require('../assets/images/arrow.png')} style={DropDownStyles.trigger.image}/>
                    </View>
                    {etc && <TextInput placeholder="보관 방법을 상세하게 적어주세요" style={DropDownStyles.trigger.input}/>}
                </TouchableOpacity>
            { open &&
                <View style={DropDownStyles.wrapper.container}>
                    <TouchableOpacity style={DropDownStyles.wrapper.item} onPress={() => setOpen(false)} >
                        <Text style={DropDownStyles.wrapper.text}>상온 보관</Text>
                    </TouchableOpacity>
                    <View style={DropDownStyles.wrapper.partition}/>
                    <TouchableOpacity style={DropDownStyles.wrapper.item}>
                        <Text style={DropDownStyles.wrapper.text}>냉장 보관</Text>
                    </TouchableOpacity>
                    <View style={DropDownStyles.wrapper.partition}/>
                    <TouchableOpacity style={DropDownStyles.wrapper.item}>
                        <Text style={DropDownStyles.wrapper.text}>냉동 보관</Text>
                    </TouchableOpacity>
                    <View style={DropDownStyles.wrapper.partition}/>
                    <TouchableOpacity style={DropDownStyles.wrapper.item}>
                        <Text style={DropDownStyles.wrapper.text}>기타</Text>
                    </TouchableOpacity>

                </View>
            }
        </View>
    )
}

const ImageInput1 = (props) => {
    const {name, label, placeholder, value, handleChange, star, guide} = props;
    return(
        <View style={ImageInput1Styles.container}>
            <Label label={label} star={star} guide={guide} type={2}/>
            <View style={ImageInput1Styles.inputs}>
                <TouchableOpacity style={ImageInput1Styles.input} onPress={() => ImagePicker()}>
                    <Text style={ImageInput1Styles.text}>대표사진</Text>
                    <Text style={ImageInput1Styles.plus}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ImageInput1Styles.input} onPress={() => ImagePicker()}>
                    <Text style={ImageInput1Styles.text}>상세사진</Text>
                    <Text style={ImageInput1Styles.plus}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ImageInput1Styles.input} onPress={() => ImagePicker()}>
                    <Text style={ImageInput1Styles.text}>상세사진</Text>
                    <Text style={ImageInput1Styles.plus}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
} 

const ImageInput2 = (props) => {
    const {name, label, placeholder, value, handleChange, star, guide} = props;
    return(
        <View style={ImageInput2Styles.container}>
            <Label label={label} star={star} guide={guide} type={2}/>
            <TouchableOpacity style={ImageInput2Styles.input} onPress={() => ImagePicker()}>
                <Text style={ImageInput2Styles.text}>영수증 사진</Text>
                <Text style={ImageInput2Styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const InputType5 = (props) => {
    const {name, label, placeholder, value, handleChange, star,} = props;
    return(
        <View style={InputType5Styles.container}>
            <Label label={label} star={star}/>
            <View style={InputType5Styles.inputBox}>
                <TextInput style={InputType5Styles.input} multiline={true} placeholderTextColor="#D8D8D8" placeholder={placeholder} value={value} onChangeText={(value) => handleChange(name, value)}/>
            </View>
        </View>
    )
}

const CalendarInput = (props) => {
    const {name, label, placeholder, value, handleChange, star, guide} = props;
    
    const [state, setState] = useState();

    return(
        <View style={CalendarInputStyles().container}>
            <Label label={label} star={star} guide={guide} type={2}/>
            <DayPicker setState={setState}/>
            <TimePicker state={state}/>
        </View>
    )
}

export {InputType1, InputType2, InputType3, InputType4,NicknameInput, DropDownInput, ImageInput1, ImageInput2, InputType5, CalendarInput};

const LabelStyles = (type) => StyleSheet.create({
    labelView:{
        flexDirection: type != 2 ? "row" : "column",
        width: widthPercentage(317),
        minHeight: heightPercentage(20),
        maxHeight: heightPercentage(38),
        paddingLeft: 2,
        marginBottom: heightPercentage(10)
    },
    labelText:{
        fontSize: fontPercentage(14),
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
        paddingLeft: type != 2 ? widthPercentage(7): 0,
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
        borderRadius: 12,
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

const DropDownStyles = StyleSheet.create({
    container: {
        width: widthPercentage(319),
        marginBottom: heightPercentage(22),
    },
    trigger:{
        container:{
            justifyContent: 'center',
            width: '100%',
            minHeight: heightPercentage(43),
            maxHeight: heightPercentage(86),
            paddingHorizontal: widthPercentage(15),
            borderWidth: 2,
            borderColor: "#D9D9D9",
            borderRadius: 12,
        },
        current:{
            width: '100%',
            height: heightPercentage(43),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        image:{
            width: widthPercentage(14),
            height: heightPercentage(7.17),
            resizeMode: 'stretch'
        },
        text: {
            fontSize: fontPercentage(12),
            color: '#374957'
        },
        input:{
            width: widthPercentage(200),
            height: heightPercentage(29),
            padding: 0,
            marginHorizontal:0,
            marginBottom: 14,
            borderBottomWidth: 2,
            borderBottomColor: "#D9D9D9",
            fontSize: fontPercentage(12)
        }
    },
    wrapper: {
        container:{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            borderWidth: 2,
            borderColor: "#D9D9D9",
            borderRadius: 12,
        },
        item:{
            width: '100%',
            height: heightPercentage(43),
            alignItems: 'center',
            justifyContent: 'center'
        },
        text:{
            fontSize: fontPercentage(12),
            color: '#374957'
        },
        partition:{
            width: '90%',
            height: heightPercentage(0.5),
            backgroundColor: '#374957'
        }
    }
    
})

const ImageInput1Styles = StyleSheet.create({
    container:{
        width: widthPercentage(327),
        marginBottom: heightPercentage(22),
    },
    inputs:{
        flexDirection: 'row',
        alignItems: "center",
    },
    input:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height: heightPercentage(133),
        marginHorizontal: widthPercentage(5),
        backgroundColor: '#FAFAFA',
        borderColor: "#FAFAFA",
        borderRadius: 12,
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
    text:{
        fontSize: fontPercentage(12),
        color: '#374957',
    },
    plus:{
        marginTop: heightPercentage(2),
        fontSize: fontPercentage(16),
        color: '#374957',
    }
})

const ImageInput2Styles = StyleSheet.create({
    container:{
        width: widthPercentage(317),
        marginBottom: heightPercentage(22),
    },
    input:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: heightPercentage(79),
        backgroundColor: '#FAFAFA',
        borderColor: "#FAFAFA",
        borderRadius: 12,
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
    text:{
        fontSize: fontPercentage(12),
        color: '#374957',
    },
    plus:{
        marginTop: heightPercentage(2),
        fontSize: fontPercentage(16),
        color: '#374957',
    }
})

const InputType5Styles = StyleSheet.create({
    container: {
        width: widthPercentage(317),
    },
    inputBox:{
        alignItems: 'center',
        width: '100%',
        paddingVertical: heightPercentage(5),
        backgroundColor: '#FAFAFA',
        borderColor: "#FAFAFA",
        borderRadius: 12,
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
    input: {
        width: widthPercentage(307),
        minHeight: heightPercentage(144),
        padding:0,
        margin:0,
        textAlignVertical:"top",
    }
})

const CalendarInputStyles = (state, selected) => StyleSheet.create({
    container:{
        width: widthPercentage(317),
        height: heightPercentage(441),
    },
    
})