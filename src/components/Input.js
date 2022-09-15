import React, { useEffect, useState } from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet, ScrollView, Platform, Image, Modal, Button, Pressable} from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";
import ImagePicker from "./ImagePicker";
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

    const typeArr = [
        {
            type: "veg",
            label: "채소",
            img: require('../assets/images/veg.png')
        },
        {
            type: "fruit",
            label: "과일",
            img: require('../assets/images/fruit.png')
        },
        {
            type: "grain",
            label: "쌀·잡곡",
            img: require('../assets/images/grain.png')
        },
        {
            type: "meat",
            label: "정육·계란",
            img: require('../assets/images/meat.png')
        },
        {
            type: "backery",
            label: "베이커리",
            img: require('../assets/images/backery.png')
        },
        {
            type: "diary",
            label: "유제품",
            img: require('../assets/images/diary.png')
        },
        {
            type: "sauce",
            label: "소스",
            img: require('../assets/images/sauce.png')
        },
        {
            type: "side",
            label: "김치·반찬",
            img: require('../assets/images/side.png')
        },
        {
            type: "frz",
            label: "가공·냉동",
            img: require('../assets/images/frz.png')
        },
        {
            type: "etc",
            label: "기타",
            img: require('../assets/images/etc.png')
        }
    ]
    const TypeItem = (props) => {
        const {name, obj} = props;
        const imageUrl = '../assets/images/' + obj.type + '.png'
        return(
            <TouchableOpacity style={InputType2Styles(focused === obj.type).item} activeOpacity={0.6} onPress={() => onChangeType(name, obj.type)}>
                <Image source={obj.img} style={InputType2Styles("diary" === obj.type).image}/>
                <Text style={InputType2Styles().text}>{obj.label}</Text>
            </TouchableOpacity>
        )
    }
    const [focused, setFocused] = useState("")

    const onChangeType = (name, type) =>{
        setFocused(type);
        handleChange(name, type);
        console.log(focused)
    }

    return(
        <View style={InputType2Styles().container}>
            <Label label={label} star={star}/>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {typeArr.map(item=>(
                    <TypeItem name={name} obj={item}/>
                ))}
            </ScrollView>
        </View>
    )
}

const InputType3 = (props) => {
    const {name, label, value, handleChange, star, guide} = props;

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    
    useEffect(()=>{
        handleChange(name, ""+year+month+date)
    },[year, month, date])

    return(
        <View style={InputType3Styles.container}>
            <Label label={label} star={star} guide={guide}/>
            <View style={InputType3Styles.inputContainer}>
                <TextInput keyboardType='numeric' style={InputType3Styles.input} placeholder="2022" value={year} onChangeText={(value) => setYear(value)}/>
                <TextInput keyboardType='numeric' style={InputType3Styles.input} placeholder="01" value={month} onChangeText={(value) => setMonth(value)}/>
                <TextInput keyboardType='numeric' style={InputType3Styles.input} placeholder="01" value={date} onChangeText={(value) => setDate(value)}/>
            </View>
        </View>
    )
}

const NicknameInput = ({ value, handleChange}) => {
    return(
        <TextInput maxLength={12} style={{width: '100%', padding:0,margin:0, borderBottomWidth: 2, borderBottomColor: "#767676", color: "black",}}  value={value} onChangeText={(value) => handleChange(value)} />
    )
}

const DropDownInput = (props) => {
    const {name, label, value, star, handleChange} = props;
    const [open, setOpen] = useState(false);

    const arr = [[0, '상온 보관'],[1, '냉장 보관'],[2, '냉동 보관'],[3, '기타']];

    const [selected, setSelected] = useState(0);

    const tempArr = arr.filter((item) => item[0] != selected);

    const onPressItem = (type) =>{
        setOpen(false);
        setSelected(type);
        handleChange(name, arr[selected][1]);
    }

    const DropDownItem = (props) => {
        const {trigger, current, type} = props;
        return(
            <TouchableOpacity style={DropDownStyles().wrapper.item.container} onPress={() => trigger ? setOpen(true) : onPressItem(type)}>
                <Text style={DropDownStyles().wrapper.item.text}>{arr[type][1]}</Text>
                {current && <Image source={require('../assets/images/arrow.png')} style={DropDownStyles(open).wrapper.item.image}/>}
            </TouchableOpacity>
        )
    }

    return (
        <View style={DropDownStyles().container}>
            <Label label={label} star={star}/>
            { !open ? 
            <View style={DropDownStyles().trigger}>
                <DropDownItem trigger={true} current={true} type={selected}/>
            </View>
            :
            <View style={DropDownStyles().wrapper.container}>
                <DropDownItem current={true} type={selected}/>
                <View style={DropDownStyles().wrapper.item.partition}/>
                <DropDownItem type={tempArr[0][0]}/>
                <View style={DropDownStyles().wrapper.item.partition}/>
                <DropDownItem type={tempArr[1][0]}/>
                <View style={DropDownStyles().wrapper.item.partition}/>
                <DropDownItem type={tempArr[2][0]}/>
            </View>
            }

        </View>
    )
}

const ImageInput1 = (props) => {
    const {name, label, placeholder, value, handleChange, star, guide} = props;

    const [more, setMore] = useState(0);
    return(
        <View style={ImageInput1Styles.container}>
            <Label label={label} star={star} guide={guide} type={2}/>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={ImageInput1Styles.inputs.container}>
                <ImagePicker type="major"/>
                <ImagePicker type="detail"/>
                <ImagePicker type="detail"/>
                { more > 0 && <ImagePicker type="detail"/>}
                { more > 1 && <ImagePicker type="detail"/>}
                { more != 2 &&
                    <Pressable style={ImageInput1Styles.inputs.more.container} onPress={()=> setMore(more + 1)}>
                        <Text style={ImageInput1Styles.inputs.more.text}>추가</Text>
                        <Text style={ImageInput1Styles.inputs.more.plus}>+</Text>
                    </Pressable>
                }
            </ScrollView>
        </View>
    )
} 

const ImageInput2 = (props) => {
    const {name, label, placeholder, value, handleChange, star, guide} = props;
    return(
        <View style={ImageInput2Styles.container}>
            <Label label={label} star={star} guide={guide} type={2}/>
            <ImagePicker type="receipt"/>
        </View>
    )
}

const InputType4 = (props) => {
    const {name, label, placeholder, value, handleChange, star,} = props;
    return(
        <View style={InputType4Styles.container}>
            <Label label={label} star={star}/>
            <View style={InputType4Styles.inputBox}>
                <TextInput style={InputType4Styles.input} multiline={true} placeholderTextColor="#D8D8D8" placeholder={placeholder} value={value} onChangeText={(value) => handleChange(name, value)}/>
            </View>
        </View>
    )
}

const ReviewInput = (props) => {
    const {name, placeholder, value, handleChange, } = props;
    return(
        <View style={ReviewInputStyles.container}>
            <View style={ReviewInputStyles.inputBox}>
                <TextInput style={ReviewInputStyles.input} multiline={true} placeholderTextColor="#7D7D7D" placeholder={placeholder} value={value} onChangeText={(value) => handleChange(name, value)}/>
            </View>
        </View>
    )
}

const CalendarInput = (props) => {
    const {name, placeholder, value, handleChange, guide} = props;

    const [values, setValues] = useState({
        0:{
            date: '',
            time: [],
        },
        1:{
            date: '',
            time: [],
        },
        2:{
            date: '',
            time: [],
        }
    })

    useEffect(()=>{
        handleChange(name, values)
        console.log(values)
    },[values])
    
    

    const [more, setMore] = useState(0);

    const AddTimeBtn = () => {
        return(
            <View style={CalendarInputStyles().add.container}>
                <TouchableOpacity style={CalendarInputStyles().add.box} onPress={() => setMore(more+1)}>
                    <Text style={CalendarInputStyles().add.text}>나눔 시간대 추가</Text>
                    <Image source={require('../assets/images/plus.png')} style={CalendarInputStyles().add.image}/>
                </TouchableOpacity>
            </View>
        )
    }

    const [reset, setReset] = useState(false);
    const AddAllTime = () => {

        const onPress = () => {
            if(reset == true){
                setReset(false);
            } else {
                setReset(true);
                setMore(0);
                setValues({});
            }
        }

        return(
            <TouchableOpacity style={CalendarInputStyles(reset).reset.container} onPress={()=> onPress()}>
                <Text style={CalendarInputStyles().reset.text}>시간대 상관없음</Text>
            </TouchableOpacity>
        )
    }
    return(
        <View style={CalendarInputStyles().container}>
            <Label label="나눔시간대 1" star={true} guide={guide} type={2}/>
            <DayPicker num={0} values={values} setValues={setValues}/>
            <TimePicker num={0} values={values} setValues={setValues}/>
            { more > 0 &&
                <View style={CalendarInputStyles().extra}>
                    <Label label="나눔시간대 2" star={false} type={2}/>
                    <DayPicker num={1} values={values} setValues={setValues} />
                    <TimePicker num={1} values={values} setValues={setValues}/>
                </View>
            }
            { more > 1 &&
                <View style={CalendarInputStyles().extra}>
                    <Label label="나눔시간대 3" star={false} type={2}/>
                    <DayPicker num={2} values={values} setValues={setValues}/>
                    <TimePicker num={2} values={values} setValues={setValues}/>
                </View>
            }
            { more !=2 && <AddTimeBtn/>}
            <AddAllTime/>
        </View>
    )
}

const PlaceInput = (props) => {
    const {name, label, placeholder, value, value2, handleChange, star, guide, navigation} = props;

    const [detail, setDetail] = useState('');

    return(
        <View style={PlaceInputStyles.container}>
            <Label label={label} star={star} type={1}/>
            <TouchableOpacity style={PlaceInputStyles.btn.container} onPress={() => navigation.navigate('WriteAdress')}>
                <Text style={PlaceInputStyles.btn.text}>{value ? value : '눌러서 주소를 입력해 주세요.'}</Text>
                <Image source={require('../assets/images/search.png')} style={PlaceInputStyles.btn.image}/>
            </TouchableOpacity>
            {value != undefined && <TextInput style={PlaceInputStyles.input} placeholderTextColor="#D8D8D8" placeholder="상세 주소를 입력해주세요." value={value2} onChangeText={(val) => handleChange(name, val)}/>}
        </View>
    )
}

export {InputType1, InputType2, InputType3, InputType4,NicknameInput, DropDownInput, ImageInput1, ImageInput2, CalendarInput, PlaceInput,ReviewInput};

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
        color: "#151515",
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
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        width: widthPercentage(108),
        height: heightPercentage(45),
        marginVertical: 2,
        marginHorizontal: widthPercentage(7.5),
        backgroundColor: focused === true ? "#FFEB82" :"#ffffff",
        borderColor: focused === true ? "#FFEB82" :"#ffffff",
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
        fontSize: fontPercentage(14),
        fontWeight: "bold",
        color: '#151515'
    },
    image:{
        width: widthPercentage(focused ? 14 : 22),
        height: heightPercentage(22),
        resizeMode: 'stretch',
        marginRight: widthPercentage(8)
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

const DropDownStyles = (open) => StyleSheet.create({
    container:{
        width: widthPercentage(320),
        marginBottom: heightPercentage(22),
    },
    trigger:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: heightPercentage(43),
        paddingHorizontal: widthPercentage(16),
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
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
    wrapper:{
        container:{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: heightPercentage(172),
            paddingHorizontal: widthPercentage(16),
            borderRadius: 12,
                backgroundColor: "#ffffff",
                borderColor: "#ffffff",
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
        item:{
            container:{
                width: '100%',
                height: heightPercentage(40),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            },
            image:{
                width: widthPercentage(14),
                height: heightPercentage(7.17),
                resizeMode: 'stretch',
                transform: [{ rotate: open ? '180deg' : '0deg'}],
            },
            text:{
                paddingLeft: widthPercentage(5),
                fontSize: fontPercentage(12),
                color: '#374957'
            },
            partition:{
                width: widthPercentage(287),
                height: heightPercentage(1),
                backgroundColor: '#D9D9D9'
            }
        } 
        
    },
})

const ImageInput1Styles = StyleSheet.create({
    container:{
        width: widthPercentage(330),
        marginBottom: heightPercentage(22),
    },
    inputs:{
        container:{
            width: '100%',
        },
        more:{
            container:{
                alignItems: 'center',
                justifyContent: 'center',
                width: widthPercentage(57),
                height: heightPercentage(133),
                marginRight: 2,
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
                color: '#151515',
            },
            plus:{
                marginTop: heightPercentage(2),
                fontSize: fontPercentage(16),
                color: '#151515',
            }
        }
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

const InputType4Styles = StyleSheet.create({
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

const ReviewInputStyles = StyleSheet.create({
    container: {
        width: widthPercentage(306),
        height:heightPercentage(132),
        alignSelf:'center'
    },
    inputBox:{
        alignItems: 'center',
        width: '100%',
        paddingVertical: heightPercentage(5),
        backgroundColor: '#F7F7F7',
        borderColor: "#F7F7F7",
        borderRadius: 12,
    },
    input: {
        width: widthPercentage(306),
        minHeight: heightPercentage(132),
        paddingTop:0,
        marginTop:5,
        textAlignVertical:"top",
    }
})

const CalendarInputStyles = (reset) => StyleSheet.create({
    container:{
        width: widthPercentage(317),
        marginBottom: heightPercentage(22),
    },
    extra:{
        marginTop: heightPercentage(24),
    },
    add:{
        container:{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: widthPercentage(321),
            height: heightPercentage(16),
            marginTop: heightPercentage(16)
        },
        box:{
            flexDirection: 'row',
            alignItems: 'center'
        },
        text:{
            paddingRight: widthPercentage(3),
            fontSize: fontPercentage(10),
            color: '#707070'
        },
        image:{
            width: widthPercentage(15),
            height: heightPercentage(15),
            resizeMode: 'stretch'
        }
    },
    reset:{
        container:{
            width: widthPercentage(317),
            height: heightPercentage(43),
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: heightPercentage(27),
            borderRadius:12,
            backgroundColor: reset === true ? "#FFF0A1" :"#ffffff",
            borderColor: reset === true ? "#FFF0A1" :"#ffffff",
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
            fontSize: fontPercentage(14),
            color: '#151515'
        }
    }
})

const PlaceInputStyles = StyleSheet.create({
    container:{
        width: widthPercentage(317),
        marginBottom: heightPercentage(22)
    },
    btn:{
        container:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: heightPercentage(43),
            paddingHorizontal: widthPercentage(15),
            marginBottom: heightPercentage(10),
            borderRadius: 12,
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
            fontSize: fontPercentage(14),
            color: '#151515'
        },
        image:{
            width: widthPercentage(17),
            height: heightPercentage(17),
            resizeMode: 'stretch',
        }
    },
    input:{
        alignItems: 'center',
        width: '100%',
        height: heightPercentage(30),
        paddingLeft: widthPercentage(15),
        padding: 0,
        margin:0,
        borderBottomWidth: 2,
        borderBottomColor: "#D9D9D9",
        color: "#151515",
    }
})