import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";


const DayPicker = ({setState}) => {
    const [selectedDate, setSelectedDate] = useState()

    return (
        <Calendar
                style={DaypickerStyles().calendar.container}
                onDayPress={(day) => {setSelectedDate(day.dateString); setState(day)}}
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

const TimePicker = (state) => {
    let year = state?.state?.year;
    let month = state?.state?.month;
    let lastDate = year ? new Date(year, month, 0).getDate() : 0

    const arr = [...new Array(lastDate)].map((_, i) => i + 1);
    console.log(arr)

    const TimeItem = ({date}) => {
        const [selected, setSelected] = useState(false);
        const onPress = () => {
            setSelected(prev => setSelected(!prev))
        }

        return(
            <TouchableOpacity style={TimePickerStyles(selected).item.container} onPress={onPress}>
                <Text style={TimePickerStyles().item.text}>
                    {date}
                </Text>
            </TouchableOpacity>
        )
    }

    const ItemList = () => arr.map(date => <TimeItem key={date} date={date}/>);

    return(
        (state.state ? 
            <View style={TimePickerStyles().container}>
                <View style={TimePickerStyles().guide.container}>
                    <Text style={TimePickerStyles().guide.star}>*</Text>
                    <Text style={TimePickerStyles().guide.text}>24시간 기준</Text>
                </View>
                <ScrollView horizontal={true} style={TimePickerStyles().itemList.container}>
                    <ItemList/>
                </ScrollView>
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
        height: heightPercentage(81)
    },
    guide:{
        container:{
            flexDirection: 'row',
            width: widthPercentage(303),
            height: heightPercentage(15),
            marginBottom: heightPercentage(10)
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
        container:{
           flexDirection: 'row',
           flexWrap: "wrap",
           width: widthPercentage(615),
           height: heightPercentage(56),
        }
    },
    item:{
        container:{
            flex: 1,
            flexShrink:0,
            width: widthPercentage(41),
            height: heightPercentage(24),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
            borderWidth: 0.2,
            borderColor: '#000000',
            backgroundColor: selected === true ? '#FFF0A1' : '#ffffff',
        },
        text:{
            fontSize: fontPercentage(16),
            color: '#374957'
        }
    }
})

export {DayPicker, TimePicker}