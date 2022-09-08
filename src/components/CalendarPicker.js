import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text, ScrollView, Pressable } from "react-native";
import { Calendar } from "react-native-calendars";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";
import CheckBox from "@react-native-community/checkbox";

const DayPicker = ({setState}) => {
    const [selectedDate, setSelectedDate] = useState()

    return (
        <Calendar
                style={DaypickerStyles().calendar.container}
                onDayPress={(day) => {setSelectedDate(day.dateString); setState(day);}}
                markedDates={{[selectedDate]: {selected: true}}}
                monthFormat={'yyyy MM월'}
                theme={{
                    monthTextColor: '#151515',
                    textMonthFontSize: fontPercentage(16),
                    textMonthFontWeight: 'bold',             
                }}
                renderArrow={(direction) => direction === "left" ? (
                    <Image source={require('../assets/images/arrow.png')} style={DaypickerStyles().calendar.leftArrow}/>
                    ) : (
                    <Image source={require('../assets/images/arrow.png')} style={DaypickerStyles().calendar.rightArrow}/>
                    )
                }
                dayComponent={({date, state, onPress, marking}) => {
                    const selected  = marking?.selected == true ? true : false
                    return (
                        <TouchableOpacity style={DaypickerStyles(state, selected).calendar.day.container} onPress={() => onPress(date)}>
                            <View>
                                <Text style={DaypickerStyles(state, selected).calendar.day.text}>{date.day}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
        />
    )
}

const TimePicker = (props) => {

    const {state, handleChange} = props;
    const arr = [...new Array(24)].map((_, i) => i+1);

    const [selected, setSelected] = useState([...new Array(24)].fill(false));
 
    console.log(arr)
    //const [selected, setSelected] = useState([...arr].fill(false));

    console.log(selected)
    
    const TimeItem = ({date}) => {
        const onPress = () => {
            const temp = [...selected];
            if(temp[date - 1]  == false) {
                temp[date - 1] = true;
            } else {
                temp[date - 1] = false;
            }
            setSelected(temp)
            console.log(selected)
        }

        return(
            <TouchableOpacity style={TimePickerStyles(selected[date - 1]).item.container} onPress={onPress}>
                <Text style={TimePickerStyles().item.text}>
                    {date}
                </Text>
            </TouchableOpacity>
        )
    }

    const ItemList = () => arr.map(date => <TimeItem key={date} date={date}/>);

    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return(
        (state ? 
            <View style={TimePickerStyles().container}>
                <View style={TimePickerStyles().guide.container}>
                    <Text style={TimePickerStyles().guide.star}>*</Text>
                    <Text style={TimePickerStyles().guide.text}>24시간 기준</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={TimePickerStyles().itemList.scrollView}>
                    <View style={TimePickerStyles().itemList.container}>
                        <ItemList/>
                    </View>
                </ScrollView>
                <View style={TimePickerStyles().option.container}>
                    <View style={TimePickerStyles().option.box}>
                        <Pressable onPress={(prev) => setToggleCheckBox(!prev)}>
                            <Text style={TimePickerStyles().option.text}>시간대 상관없음</Text>
                        </Pressable>
                        <View style={TimePickerStyles().option.checkBox}>
                            <CheckBox 
                                disabled={false}
                                value={toggleCheckBox} 
                                onValueChange={(newValue) => setToggleCheckBox(newValue)} 
                                tintColors={{ true: '#707070', false: '#707070'}} 
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={TimePickerStyles().option.box}>
                        <Text style={TimePickerStyles().option.text}>나눔 시간대 추가</Text>
                        <Image source={require('../assets/images/plus.png')} style={TimePickerStyles().option.image}/>
                    </TouchableOpacity>
                </View>
            </View>
            :
            <></>
        )
    )
}

const DaypickerStyles = (state, selected) => StyleSheet.create({
    calendar:{
        container:{
            width: widthPercentage(303),
            marginBottom: heightPercentage(21),
        },
        day:{
            container:{
                width: widthPercentage(41),
                height: heightPercentage(24),
                borderRadius: 12,
                backgroundColor: selected === true ? '#FFF0A1' : '#ffffff',
            },
            text:{
                textAlign: 'center', 
                fontSize: fontPercentage(14),
                color: state === 'disabled' ? '#6C7470' : '#0A1811',
            }

        },
        leftArrow:{
            width: widthPercentage(15),
            height: heightPercentage(8),
            resizeMode: 'stretch',
            transform: [{ rotate: '90deg'}],
        },
        rightArrow:{
            width: widthPercentage(15),
            height: heightPercentage(8),
            resizeMode: 'stretch',
            transform: [{ rotate: '270deg'}],
        }
    }
})

const TimePickerStyles = (selected) => StyleSheet.create({
    container:{
        flex:1,
    },
    guide:{
        container:{
            flexDirection: 'row',
            width: widthPercentage(303),
            height: heightPercentage(15),
            marginBottom: heightPercentage(6)
        },
        text:{
            fontSize: fontPercentage(12),
            color: '#151515'
        },
        star:{
            position: 'relative',
            top: heightPercentage(-2),
            fontSize: fontPercentage(12),
            color: '#151515'
        }
    },
    itemList:{
        scrollView:{
            flex: 1,
            width: widthPercentage(343),
            height: heightPercentage(64),
        },
        container:{
           flexDirection: 'row',
           flexWrap: "wrap",
           width: widthPercentage(497),
           height: heightPercentage(64),
        }
    },
    item:{
        container:{
            flexShrink:0,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: heightPercentage(4),
            width: widthPercentage(41),
            height: heightPercentage(24),
            borderRadius: 12,
            borderWidth: 0.2,
            borderColor: '#000000',
            backgroundColor: selected === true ? '#FFF0A1' : '#ffffff',
        },
        text:{
            fontSize: fontPercentage(16),
            color: '#374957'
        }
    },
    option:{
        container:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
        checkBox:{
            alignItems: 'center',
            justifyContent: 'center',
            width: widthPercentage(10),
            height: heightPercentage(10),
            marginLeft: widthPercentage(5)
        },
        image:{
            width: widthPercentage(15),
            height: heightPercentage(15),
            resizeMode: 'stretch'
        }
    }
})

export {DayPicker, TimePicker}