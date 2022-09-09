import React from "react";
import { SafeAreaView, Text } from "react-native";

const Permission=()=>{
    return (
        <SafeAreaView style={{backgroundColor:'#ffffff',flex:1}}>
            <Text >
                접근 권한 승인
            </Text>
            <Text> 위치 권한을 허용합니다</Text>
        </SafeAreaView>
    )
}

export default Permission;