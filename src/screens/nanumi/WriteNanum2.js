import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView, View, Pressable, Button} from "react-native";
import { CalendarInput, InputType1, InputType2, InputType3, InputType4 } from "../../components/Input";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

const WriteNanum2 = () => {

    const [isMounted, setIsMounted] = useState(false);

    const [values, setValues] = useState({
        nanumDate: '',
    });

    const handleChange = (name, value) => {
        setIsMounted(true);
        setValues({
          ...values, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
        console.log(values)
    };


    useEffect(() => {
        return () => setIsMounted(false);
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <CalendarInput name="nanumDate" label="나눔 시간대" guide="나눔이 가능한 시간대를 모두 선택해주세요." value={values.nanumDate} handleChange={handleChange} star={true}/>
                <Pressable style={styles.finishBtn.container}>
                    <Text style={styles.finishBtn.text}>글 작성 완료</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollView: {
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    finishBtn:{
        container:{
            alignItems: 'center',
            justifyContent: 'center',
            width: widthPercentage(240),
            height: heightPercentage(43),
            borderRadius: 21.5,
            backgroundColor: '#FFF0A1'
        },
        text:{
            fontSize: fontPercentage(16),
            fontWeight: 'bold',
            color: '#374957'
        }
    }
});



export default WriteNanum2;