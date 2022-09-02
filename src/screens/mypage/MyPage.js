import React, {useEffect, useState} from "react";
import { Text,StyleSheet, ScrollView, SafeAreaView,View, Pressable, Button} from "react-native";
import ProfileImage from "../../components/ProfileImage";

const MyPage = () => {

    return(
        <SafeAreaView style={styles.container}>
            <ProfileImage/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    }
})

export default MyPage;