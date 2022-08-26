import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView,View, Pressable, Button, TouchableOpacity} from "react-native";
import { DropDownInput, InputType1, InputType2, InputType3, InputType4 } from "../../components/Input";

const WriteNanum = ({navigation}) => {

    const [isMounted, setIsMounted] = useState(false);

    const [values, setValues] = useState({
        title: '',
        type: '',
        buyDate: {year: undefined, month: undefined, day: undefined},
        openDate: {year: undefined, month: undefined, day: undefined},
        expDate: {year: undefined, month: undefined, day: undefined},
        useDate: 1,
        place: '',
        store: '상온 보관',
        hashTag: '',
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
                <InputType1 name="title" label="제목" placeholder="글 제목을 입력해주세요." value={values.title} handleChange={handleChange} star={true}/>
                <InputType2 name="type" label="식품 종류" handleChange={handleChange} star={true}/>
                <InputType3 name="buyDate" label="식품 구매일자" placeholder={['2022', '01', "01"]} value={values.buyDate} handleChange={handleChange} star={true}/>
                <InputType1 name="place" label="식품 구매처" placeholder="식품 구매처를 입력해주세요." value={values.place} handleChange={handleChange} star={true}/>
                <InputType3 name="openDate" label="개봉일자" placeholder={['2022', '01', "01"]} value={values.openDate} handleChange={handleChange} star={true} guide="식품을 개봉한 일자를 입력해주세요."/>
                <InputType3 name="useDate" label="유통기한" placeholder={['2022', '01', "01"]} value={values.useDate} handleChange={handleChange} star={true}/>
                <InputType4 name="expDate" label="소비기한" value={values.expDate} handleChange={handleChange} star={true} guide="소비 가능한 예상 날짜를 입력해주세요."/>
                <DropDownInput name="store" label="보관 방식" value={values.store} handleChange={handleChange} star={true}/>
                <InputType1 name="hashTag" label="식품 해시태그" placeholder="#베이커리 #식빵" value={values.hashTag} handleChange={handleChange} star={false}/>
                <TouchableOpacity onPress={()=> navigation.navigate('WriteNanum2')}>
                    <Text>다음으로</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffffff',
    },
    scrollView: {
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
});



export default WriteNanum;