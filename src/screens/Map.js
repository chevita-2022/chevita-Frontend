import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView,View, Pressable, Button, Image, TextInput} from "react-native";
import GoogleMap from "../components/GoogleMap";
import Geocoder from 'react-native-geocoding';
import { getDistance } from 'geolib';
import { fontPercentage, heightPercentage, widthPercentage } from "../ResponsiveSize";
import Nanumitem from "../components/NanumItem";

const Map = () => {

    //const [item,setData]=useState([]);
    const path="http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/posts";



    const [searchWord, SetSearchWord] = useState('');
    const [searching, setSearching] = useState(false);
    const [selectedItem, setSelectedItem] = useState('')

    const SearchModal = () => {
        return(
            <View style={styles.modal.container}>
                <View style={styles.modal.line}></View>
                <View style={styles.modal.searchBox.container}>
                    <Pressable onPress={() => setSearching(true)}>
                    <Image source={require('../assets/images/search.png')} style={styles.modal.searchBox.image}/>
                    </Pressable>
                    {searching ?
                    <Text style={styles.modal.searchBox.input}>내 주변 #{searchWord} 키워드 검색 결과</Text>
                    :
                    <TextInput style={styles.modal.searchBox.input} placeholder={"내 주변 #키워드 를 검색해보세요."} placeholderTextColor='#151515' value={searchWord} onChange={(value)=> SetSearchWord(value)}/>
                    }
                </View>
                {searching && <Text style={styles.modal.guide}>서대문구 연희동 근처 당근 관련 글을 {1}건 찾았어요!</Text>}
                {/*true && <Nanumitem userIdx={2} postId={item.postIdx} title={item.title} createdTime={item?.createdAt} hastag={item.hastag}  d_day={item.expirationDate} locate={item.globalLocation} imgUrl={item.imgUrls}/>*/}
            </View>
        )
    }


    return(
        <SafeAreaView style={styles.container}>
            <GoogleMap setSelectedItem={setSelectedItem}/>
            <SearchModal/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    modal:{
        container:{
            position: 'absolute',
            bottom: 2,
            width: widthPercentage(375),
            minHeight: heightPercentage(74),
            maxHeight: heightPercentage(277),
            paddingTop : heightPercentage(6),
            alignItems: 'center',
            backgroundColor: '#ffffff',
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
        line:{
            width: widthPercentage(100),
            height: heightPercentage(2),
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