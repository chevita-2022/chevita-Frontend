import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView, View, Pressable, Image, TouchableOpacity} from "react-native";
import { ReviewList } from "../../components/Review";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

const LikeList = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.title.container}>
                    <Image source={require('../../assets/images/fullLike.png')} style={styles.title.image}/>
                    <Text style={styles.title.text}>나의 찜목록</Text>
                </View>
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
    title: {
        container:{
            flexDirection: 'row',
            alignItems: 'center',
            width: widthPercentage(335),
            marginTop: heightPercentage(26),
            marginBottom: heightPercentage(15),
        },
        image:{
            width: widthPercentage(15),
            height: heightPercentage(15),
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

export default LikeList;