import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView,View, Pressable, Image, TouchableOpacity} from "react-native";
import { DropDownInput, ImageInput1, ImageInput2, InputType1, InputType2, InputType3, InputType4 } from "../../components/Input";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

const WriteNanum = ({navigation}) => {

    const [isMounted, setIsMounted] = useState(false);

    const [values, setValues] = useState({
        title: '',
        type: '',
        buyDate: {year: undefined, month: undefined, day: undefined},
        openDate: {year: undefined, month: undefined, day: undefined},
        expDate: {year: undefined, month: undefined, day: undefined},
        useDate: {year: undefined, month: undefined, day: undefined},
        place: '',
        store: '상온 보관',
        hashTag: '',
        introduction: '',
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

    const NextBtn = () => {
        return(
            <TouchableOpacity style={styles.next.container} onPress={()=> navigation.navigate('WriteNanum2')}>
                <Text style={styles.next.text}>다음으로</Text>
                <Image source={require('../../assets/images/arrow.png')} style={styles.next.image} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <InputType1 name="title" label="제목" placeholder="글 제목을 입력해주세요." value={values.title} handleChange={handleChange} star={true}/>
                <InputType2 name="type" label="식품 종류" handleChange={handleChange} star={true}/>
                <InputType3 name="buyDate" label="식품 구매일자" placeholder={['2022', '01', "01"]} value={values.buyDate} handleChange={handleChange} star={true}/>
                <InputType1 name="place" label="식품 구매처" placeholder="식품 구매처를 입력해주세요." value={values.place} handleChange={handleChange} star={false}/>
                <InputType3 name="openDate" label="개봉일자" placeholder={['2022', '01', "01"]} value={values.openDate} handleChange={handleChange} star={true} guide="식품을 개봉한 일자를 입력해주세요."/>
                <InputType3 name="expDate" label="유통기한" placeholder={['2022', '01', "01"]} value={values.expDate} handleChange={handleChange} star={true}/>
                <InputType3 name="useDate" label="소비기한" placeholder={['2022', '01', "01"]} value={values.useDate} handleChange={handleChange} star={true} guide="소비 가능한 예상 날짜를 입력해주세요."/>
                <DropDownInput name="store" label="보관 방식" value={values.store} handleChange={handleChange} star={true}/>
                <InputType1 name="hashTag" label="식품 해시태그" placeholder="#베이커리 #식빵" value={values.hashTag} handleChange={handleChange} star={false}/>
                <ImageInput1 name="foodImg" label="사진" value={values.foodImg} handleChange={handleChange} star={true} guide="대표사진 포함 사진 3장을 필수로 업로드해주세요."/>
                <ImageInput2 name="receiptImg" label="영수증 사진" value={values.receiptImg} handleChange={handleChange} star={false} guide="식품을 구입한 영수증 사진을 인증해주세요."/>
                <InputType4 name="introduction" label="나눔 소개글" placeholder="나누고자 하는 식품에 대한 소개를 해주세요." value={values.introduction} handleChange={handleChange} star={true}/>
                <NextBtn/>
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
    next:{
        container:{
            width: widthPercentage(317),
            height: heightPercentage(60),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
        }, 
        text:{
            paddingRight: widthPercentage(7),
            fontSize: fontPercentage(12),
            color: '#151515'
        },
        image:{
            width: widthPercentage(10),
            height: heightPercentage(8),
            resizeMode: 'stretch',
            transform: [{ rotate: '270deg'}],

        }
    }
});



export default WriteNanum;