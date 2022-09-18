import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import {NoticeConfirmation, NoticeRequest} from "../components/NoticeItem";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";

const Notice=()=>{

    const [list, setList] = useState([]);
    const path = "http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/nanumingList/"

    const userIdx = 2;


        console.log(path+userIdx)
        fetch(path+userIdx).then((res)=>res.json()).then((response)=> setList(response));


    useEffect(()=>{
        console.log(list)
    },[list])

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

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <RequestList/>
                <ConfirmedList/>
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