import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView, View, Pressable, Image, TouchableOpacity} from "react-native";
import { ReviewList } from "../../components/Review";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

const NanumReview = ({route}) => {
    console.log(route.params)
    const type = route.params
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.title.container}>
                    <Image source={require('../../assets/images/logo_black.png')} style={styles.title.image}/>
                    <Text style={styles.title.text}>{type == 1? "김채비님의 나누미 후기" : "김채비님의 채누미 후기"}</Text>
                </View>
                <ReviewList/>
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
        backgroundColor: '#ffffff'
    },
    title: {
        container:{
            flexDirection: 'row',
            alignItems: 'center',
            width: widthPercentage(335),
            marginTop: heightPercentage(26),
            marginBottom: heightPercentage(15),
        },
        image:{
            width: widthPercentage(20),
            height: heightPercentage(19),
            marginRight: widthPercentage(6),
            resizeMode: 'stretch'
        },
        text:{
            fontSize: fontPercentage(16),
            fontWeight: 'bold',
            color: '#151515'
        }
    }
})

export default NanumReview;