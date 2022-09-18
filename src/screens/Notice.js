import React from "react";
import { SafeAreaView } from "react-native";
import {NoticeConfirmation, NoticeRequest} from "../components/NoticeItem";

const Notice=()=>{
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#ffffff'}}>
            <NoticeRequest />
            <NoticeConfirmation />
        </SafeAreaView>
    )
}

export default Notice;