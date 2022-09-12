import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView, View, Pressable, Image, TouchableOpacity} from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";
import Nanumitem from "../../components/NanumItem";

const NanumRecord = () => {
    const item =[
        {
            id:1,
            title:'세척 당근 반토막 나눔해요',
            location: '서대문구 연희동',
            createdTime:'15분전',
            hastag:'#채소류 #당근',
            time:'8월 26일 7,8,18시',
            like:31,
            d_day:2,
        },
        {
            id:2,
            title:'식빵 반봉지 나눔해요',
            location: '서대문구 연희동',
            createdTime:'15분전',
            hastag:'#베이커리류 #식빵',
            time:'8월 26일 7,8,18시',
            like:10,
            d_day:17,
        },
        {
            id:3,
            title:'딸기잼이랑 누텔라 교환 원해요',
            location: '서대문구 북아현동',
            createdTime:'30분전',
            hastag:'#채소류 #당근',
            time:'시간대 상관없음',
            like:29,
            d_day:29,
        },
        {
            id:4,
            title:'양파 반쪽 나눔합니다~',
            location: '서대문구 대현동',
            createdTime:'45분전',
            hastag:'#채소류 #양파',
            time:'8월 26일 11시',
            like:2,
            d_day:23,
        },
    ];

    const [menu, setMenu] = useState(0);

    return (
        <SafeAreaView style={styles().container}>
            <ScrollView contentContainerStyle={styles().scrollView}>
                <View style={styles().menu.container}>
                    <Pressable style={styles(menu == 0).menu.btn.container} onPress={() => setMenu(0)}>
                        <Image source={require('../../assets/images/logo_black.png')} style={styles().menu.btn.image}/>
                        <Text style={styles().menu.btn.text}>나누미 기록</Text>
                    </Pressable>
                    <Pressable style={styles(menu == 1).menu.btn.container} onPress={() => setMenu(1)}>
                        <Image source={require('../../assets/images/logo_black.png')} style={styles().menu.btn.image}/>
                        <Text style={styles().menu.btn.text}>채누미 기록</Text>
                    </Pressable>
                </View>
                {item.map(item=>(
                    <Nanumitem title={item.title} place={item.location} createdTime={item.createdTime} hastag={item.hastag} appointment={item.time} like={item.like} d_day={item.d_day} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = (active) => StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollView: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    menu:{
        container:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            height: heightPercentage(56),
            paddingHorizontal: widthPercentage(17),
        },
        btn:{
            container:{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: widthPercentage(160),
                height: '100%',
                borderBottomWidth: 3,
                borderRadius: 1.5,
                borderColor: active ? '#151515': '#ffffff',
            },
            image:{
                width: widthPercentage(20),
                height: heightPercentage(19),
                resizeMode: 'stretch',
                marginRight: widthPercentage(5)
            },
            text:{
                fontSize: fontPercentage(14),
                fontWeight: 'bold',
                color:'#151515'
            }
        }
    }

})

export default NanumRecord;