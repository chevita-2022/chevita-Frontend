import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView,View, Pressable, Button} from "react-native";
import { InputStyle1 } from "../../components/Input";

const WriteNanum = () => {

    return (
        <SafeAreaView style={styles.container}>
            <InputStyle1 title='제목' placeholer='글 제목을 입력해주세요.'/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
});



export default WriteNanum;