import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView, View, Pressable, Button} from "react-native";
import { InputType1, InputType2, InputType3, InputType4 } from "../../components/Input";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

const WriteNanum2 = () => {

    const [isMounted, setIsMounted] = useState(false);

    const [values, setValues] = useState({
        title: '',
        type: '',
        buyDate: {year: undefined, month: undefined, day: undefined},
        openDate: {year: undefined, month: undefined, day: undefined},
        expDate: {year: undefined, month: undefined, day: undefined},
        useDate: 1,
        place: '',
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
                <Pressable style={styles.finishBtn.container}>
                    <Text style={styles.finishBtn.text}>글 작성 완료</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollView: {
        flex:1,
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