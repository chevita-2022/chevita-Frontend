import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { userIdx1 } from "../components/modal/Modal_ChooseTime";
import {NoticeConfirmation, NoticeRequest} from "../components/NoticeItem";

const Notice=()=>{

    console.log(userIdx1);

    useEffect(()=>{
        fetch("http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/nanumingList/"+userIdx1)
        .then(res=>res.json()).then(res=>console.log(res));
    })
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#ffffff'}}>
            <NoticeRequest />
            <NoticeConfirmation />
        </SafeAreaView>
    )
}

export default Notice;