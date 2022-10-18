import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView, View, Pressable, Button} from "react-native";
import { CalendarInput, InputType1, InputType2, InputType3, InputType4, PlaceInput } from "../../components/Input";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";
import Modal from "react-native-modal";

const WriteNanum2 = ({navigation, route}) => {

    const [isMounted, setIsMounted] = useState(false);

    const [values, setValues] = useState({
        //nanumDate: '',
        globalLocation: '',
        detailedLocation:'',
    });

    const [post, setPost] = useState({});

    const handleChange = (name, value) => {
        setIsMounted(true);
        setValues({
          ...values, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
        console.log(values)
        console.log(post)
    };


    useEffect(() => {
        return () => setIsMounted(false);
    },[])

    useEffect(()=>{
        console.log(route.params)
        if(route.params.address && true){
            setValues({
                ...values, // 기존의 input 객체를 복사한 뒤
                globalLocation: route.params.address // name 키를 가진 값을 value 로 설정
            });
        } 
        if(route.params.title && true) {
            setPost(Object.assign({}, route.params))
            console.log(Object.entries(route.params))
            console.log(typeof Object.entries(route.params))
        }
    },[route.params])

    const [modalVisible, setModalVisible] = useState(false);
    const createPost = () => {
        console.log(post)
        const tempData = {...post, ...values}

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tempData)
        };
        console.log(tempData)


        fetch('http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/posts', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => {
                console.error('There was an error!', error);
            });
         

        console.log(tempData)
        setModalVisible(true);

        window.setTimeout(()=>{navigation.navigate('Nanumi')}, 2000)

    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <CalendarInput name="nanumDate" guide="나눔이 가능한 시간대를 모두 선택해주세요." value={values.nanumDate} handleChange={handleChange}/>
                <PlaceInput name="detailedLocation" label="나눔 위치" value={values.globalLocation} value2={values.detailedLocation} handleChange={handleChange} star={true} navigation={navigation}/>
                <Pressable style={styles.finishBtn.container} onPress={()=> createPost()}>
                    <Text style={styles.finishBtn.text}>글 작성 완료</Text>
                </Pressable>
                <Modal       
                    isVisible={modalVisible} 
                    transparent={true}
                    useNativeDriver={true}
                    onBackdropPress={() => setModalVisible(false)}
                >
                    <View style={styles.modal.container}>
                        <Text style={styles.modal.text}>나누미 글 작성 완료!</Text>
                    </View>
                </Modal>
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
        backgroundColor: '#ffffff',
        paddingBottom: heightPercentage(70)
    },
    finishBtn:{
        container:{
            alignItems: 'center',
            justifyContent: 'center',
            width: widthPercentage(240),
            height: heightPercentage(43),
            borderRadius: 21.5,
            backgroundColor: '#FFF0A1',
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
            fontSize: fontPercentage(16),
            fontWeight: 'bold',
            color: '#151515'
        }
    },
    modal:{
        container:{
            width: widthPercentage(340),
            height: heightPercentage(51),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 12,
        },
        text:{
            fontSize: fontPercentage(12),
            color: '#151515'
        }
    }
});



export default WriteNanum2;