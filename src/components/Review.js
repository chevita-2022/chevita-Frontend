import React, { useEffect, useState } from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet, ScrollView, Platform, Image, Modal, Button, Pressable} from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";
import { ProgressBarForVital } from "./ProgressBar";

const data = [
    {
        name: '채비채비1',
        review: '식품이 신선해요!',
        vital: '95'
    },
    {
        name: '채비채비2',
        review: '식품 잘받았어요. 다른 것들도 챙겨주셔서 감사합니다. 먼 길 오느라 고생 많으셨습니다. 조심히 들어가세요!',
        vital: '95'
    },
    {
        name: '채비채비3',
        review: '포장을 꼼꼼히 잘해줬어요.',
        vital: '95'
    }
]

console.log(typeof data)
console.log(data.map(idx => console.log(idx)))

const ReviewItem = ({reviewData}) => {
    console.log(reviewData)
    return(
        <View style={ReviewItemStyles.container}>
            <Image source={require('../assets/images/defaultImage.png')} style={ReviewItemStyles.image}/>
            <View style={ReviewItemStyles.right.container}>
                <View style={ReviewItemStyles.right.top.container}>
                    <Text style={ReviewItemStyles.right.top.name}>{reviewData.name}</Text>
                    <ProgressBarForVital vital={reviewData.vital}/>
                </View>
                <Text style={ReviewItemStyles.right.review}>{reviewData.review}</Text>
            </View>
        </View>
    )
}

const ReviewList = () => data.map(item => <ReviewItem reviewData={item}/>);

const ReviewPreview = () => data.slice(0,2).map(item => <ReviewItem reviewData={item}/>);

const ReviewItemStyles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: widthPercentage(336),
        height: heightPercentage(76),
        marginBottom: heightPercentage(2),
    },
    image:{
        width: widthPercentage(55),
        height: heightPercentage(55),
        resizeMode: 'stretch',
        borderRadius: 12,
    },
    right:{
        container:{
            height: '100%',
            paddingTop: heightPercentage(10),
            marginLeft: widthPercentage(9),
        },
        top:{
            container:{
                height: heightPercentage(30),
                flexDirection: 'row',
                justifyContent: 'space-between', 
            },
            name:{
                fontSize: fontPercentage(14),
                fontWeight: 'bold',
                color: '#151515'
            },
        },
        review:{
            width: widthPercentage(270),
            height: heightPercentage(34),
            fontSize: fontPercentage(12),
            color: '#7D7D7D',

        },
    },
})

export {ReviewItem, ReviewList, ReviewPreview}