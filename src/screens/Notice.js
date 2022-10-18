import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet,View ,Image,Text} from "react-native";
import { userIdx1 } from "../components/modal/Modal_ChooseTime";
import {NoticeCompleted, NoticeConfirmation, NoticeRequest} from "../components/NoticeItem";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";

const Notice=()=>{

    const [list, setList] = useState([]);
    const path = "http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/nanumingList/"

    const userIdx = 2;
    //console.log(path+userIdx)
    fetch(path+userIdx).then((res)=>res.json()).then((response)=> setList(response));

    /*useEffect(()=>{
        console.log(list)
    },[list])*/

    const RequestList = () => {
        return(
            list.filter((item) => item.nanumStatus == "예약요청").map((item) => <NoticeRequest item={item}/>)
        )
    }

    const ConfirmedList = () => {
        return(
            list.filter((item) => item.nanumStatus == "예약확정").map((item) => <NoticeConfirmation item={item}/>)
        )
    }

    const CompletedList = () => {
        return(
            list.filter((item) => item.nanumStatus == "나눔완료").map((item) => <NoticeCompleted item={item}/>)
        )
    }

   // console.log(userIdx1);

    useEffect(()=>{
        fetch("http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/nanumingList/"+userIdx1)
        .then(res=>res.json())//.then(res=>console.log(res));
    })
    return(
        <SafeAreaView style={styles.container}>
            <View style={{height:heightPercentage(80),flexDirection:'row'}}>
                <Image source={require('../assets/images/KakaoTalk_Image_2022-09-18-21-38-08.png')} style={{width:widthPercentage(60),height:heightPercentage(60.86),margin:13}} />
                <Text style={{paddingVertical:30, color:'#151515',fontWeight:'700',fontSize:fontPercentage(16)}}>김채비</Text>
                <Text style={{paddingVertical:33, color:'#151515',fontWeight:'400',fontSize:fontPercentage(13),height:heightPercentage(199)}}> 님</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <RequestList/>
                <ConfirmedList/>
                <CompletedList/>
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

})

export default Notice;