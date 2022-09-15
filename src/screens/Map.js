import React, {useEffect, useState} from "react";
import { Text,StyleSheet, ScrollView, SafeAreaView,View, Pressable, Button, Image, TextInput} from "react-native";
import GoogleMap from "../components/GoogleMap";
import Geocoder from 'react-native-geocoding';
import { getDistance } from 'geolib';
import Nanumitem from "../components/NanumItem";
import { fontPercentage, heightPercentage, widthPercentage } from "../ResponsiveSize";

Geocoder.init("AIzaSyBmMinPStpXNnPcWNefzg3T01Ktjm1bQA4");

export const convertAddressToCoordinates = (address) => {
    Geocoder.from(address)
            .then(json => {
                var location = json.results[0].geometry.location;
                console.log(location);
                return location
            })
            .catch(error => console.warn(error));
}

const Map = () => {
    console.log(convertAddressToCoordinates("서울특별시 서초구 효령로 25길 19"))
    const data = convertAddressToCoordinates("서울특별시 서초구 효령로 25길 19")
    useEffect(()=>{
        console.log(data)
    },[data])

    const item =
        {
            postId:1,
            title:'세척 당근 반토막 나눔해요',
            location: '서대문구 연희동',
            createdAt:'15분전',
            hastag:'#채소류 #당근',
            time:'8월 26일 7,8,18시',
            totalHearts:31,
            expirationDate:2,
        }

    const [searchWord, SetSearchWord] = useState('')

    const SearchModal = () => {
        return(
            <View style={styles.modal.container}>
                <View style={styles.modal.line}></View>
                <View style={styles.modal.searchBox.container}>
                    <Image source={require('../assets/images/search.png')} style={styles.modal.searchBox.image}/>
                    <TextInput style={styles.modal.searchBox.input} placeholder={searchWord ? "내 주변 #" + searchWord + " 키워드 검색 결과"   : "내 주변 #키워드 를 검색해보세요."} placeholderTextColor='#151515' value={searchWord} onChange={(value)=> SetSearchWord(value)}/>
                </View>
                <Text style={styles.modal.guide}>서대문구 연희동 근처 당근 관련 글을 {1}건 찾았어요!</Text>
                <Nanumitem postId={item.postId} title={item.title} place={item.location} createdTime={item.createdAt} hastag={item.hastag} like={item.totalHearts} d_day={item.expirationDate}/>
            </View>
        )
    }


    return(
        <SafeAreaView style={styles.container}>
            <GoogleMap/>
            <SearchModal/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    modal:{
        container:{
            position: 'absolute',
            bottom: 5,
            width: widthPercentage(375),
            minHeight: heightPercentage(74),
            maxHeight: heightPercentage(277),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 12
        },
        line:{
            width: widthPercentage(100),
            height: heightPercentage(2),
            marginTop: heightPercentage(5),
            marginBottom: heightPercentage(22),
            backgroundColor: '#D9D9D9',
        },
        searchBox:{
            container:{
                flexDirection: 'row',
                alignItems: 'center',
            },
            image:{
                width: widthPercentage(18),
                height: heightPercentage(18),
                resizeMode: 'stretch',
            },
            input:{
                width: widthPercentage(301),
                height: heightPercentage(30),
                justifyContent: 'center',
                padding: 0,
                margin: 0,
                borderBottomWidth: 2,
                borderColor: '#D9D9D9',
                fontSize: fontPercentage(14),
                fontWeight: 'bold',
                color: '#151515',
            }
        },
        guide:{
            width: widthPercentage(319),
            marginTop: heightPercentage(3),
            paddingLeft: heightPercentage(21),
            fontSize: fontPercentage(10),
            color: '#767676'
        }
    }
})

export default Map;