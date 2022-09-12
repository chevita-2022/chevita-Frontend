import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView, View, Pressable, Image, TouchableOpacity} from "react-native";
import { ImagePicker } from "../../components/ImagePicker";
import {ImagePicker2} from "../../components/ImagePicker2";
import {ProfileImage} from "../../components/ProfileImage";
import { ProgressBarForVital } from "../../components/ProgressBar";
import { ReviewItem, ReviewList, ReviewPreview } from "../../components/Review";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";


const MyPage = ({navigation}) => {

    const test = {
        name: '김채비',
        place: '서대문구 연희동',
        intro: '비건 식당 공유해요!',
        vital: 85,
        hashTag: '#빵순이 #비거니즘 #레시피일기',
        record: 19,
    }

    const Profile = () => {
        return(
            <>
                <ImagePicker2/>
                <Text style={styles.profile.name}>{test.name}</Text>
                <Text style={styles.profile.place}>{test.place}</Text>
                <View style={styles.profile.intro.container}>
                    <Image source={require('../../assets/images/introduction.png')} style={styles.profile.intro.image}/>
                    <Text style={styles.profile.intro.text}>{test.intro}</Text>
                </View>
                <View style={styles.profile.flexBox.container}>
                    <ProgressBarForVital vital={85}/>
                    <View style={styles.profile.flexBox.partition}/>
                    <Text style={styles.profile.flexBox.hashTag}>{test.hashTag}</Text>
                </View>
            </>
        )
    }

    const ModifyProfile = () => {
        return(
            <View style={styles.profile.modify.container}>
                <Image source={require('../../assets/images/pencil.png')} style={styles.profile.modify.pencil}/>
                <Text style={styles.profile.modify.text}>프로필 수정하기</Text>
                <Image source={require('../../assets/images/arrow.png')} style={styles.profile.modify.arrow} />
            </View>
        )
    }

    const ShowRecord = () => {
        return(
            <TouchableOpacity style={styles.recordButton.container} onPress={() => navigation.navigate('NanumRecord')}>
                <View style={styles.recordButton.top}>
                    <Image source={require('../../assets/images/logo_black.png')} style={styles.recordButton.image}/>
                    <Text style={styles.recordButton.text}>나눔 기록</Text>
                </View>
                <Text style={styles.recordButton.number}>{test.record}</Text>
            </TouchableOpacity>
        )
    }

    const ReviewBox = ({type}) => {
        return(
            <View style={styles.subTitle.container}>
                <Image source={require('../../assets/images/logo_black.png')} style={styles.subTitle.image1}/>
                <Text style={styles.subTitle.text}>{type == 1 ? "김채비님의 나누미 후기" : "김채비님의 채누미 후기"}</Text>
            </View>
        )
    }

    const LikeBox = () => {
        return(
            <View style={styles.subTitle.container}>
                <Image source={require('../../assets/images/fullLike.png')} style={styles.subTitle.image2}/>
                <Text style={styles.subTitle.text}>나의 찜목록</Text>
            </View>
        )
    }

    const MoreBtn = ({type}) => {
        const onPress = () => {
            if(type == 3) {
                navigation.navigate('LikeList')
            } else {
                navigation.navigate('NanumReview', type)
            }
        }
        return(
            <TouchableOpacity style={styles.more.container} onPress={()=> onPress()}>
                <Text style={styles.more.text}>더보기</Text>
                <Image source={require('../../assets/images/arrow.png')} style={styles.more.image} />
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                
                <Profile/>
                <ModifyProfile/>
                <ShowRecord/>
                <ReviewBox type={1}/>
                <ReviewPreview />
                <MoreBtn type={1}/>
                <ReviewBox type={2}/>
                <ReviewPreview />
                <MoreBtn type={2}/>
                <LikeBox/>
                <MoreBtn type={3}/>
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
    profile:{
        name:{
            marginTop: heightPercentage(2),
            fontSize: fontPercentage(16),
            fontWeight: 'bold',
            color: '#151515'
        },
        place:{
            marginTop: heightPercentage(1),
            fontSize: fontPercentage(12),
            color: '#374957'
        },
        intro:{
            container:{
                marginTop: heightPercentage(3),
                width: widthPercentage(170),
                height: heightPercentage(36),
            },
            image:{
                width: '100%',
                height: '100%',
                resizeMode: 'stretch'
            },
            text:{
                position: 'absolute',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: fontPercentage(10),
                color: '#374957'
            }
        },
        flexBox:{
            container:{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: heightPercentage(15)
            },
            partition:{
                width: widthPercentage(1),
                height: heightPercentage(31),
                marginHorizontal: widthPercentage(20),
                backgroundColor: '#D9D9D9'
            },
            hashTag:{
                fontSize: fontPercentage(10),
            }
        },
        modify:{
            container:{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '100%',
                marginTop: heightPercentage(15),
                marginRight: widthPercentage(60),
            },
            pencil:{
                width: widthPercentage(12),
                height: heightPercentage(12),
                resizeMode: 'stretch',
                marginRight: widthPercentage(2)
            },
            text:{
                fontSize: fontPercentage(10),
                color: '#151515'
            },
            arrow:{
                width: widthPercentage(10),
                height: heightPercentage(6),
                resizeMode: 'stretch',
                transform: [{ rotate: '270deg'}],
            }
        },
        
    },
    recordButton:{
        container:{
            alignItems: 'center',
            justifyContent: 'center',
            width: widthPercentage(319),
            height: heightPercentage(79),
            marginTop: heightPercentage(20),
            marginBottom: heightPercentage(25),
            backgroundColor: '#FFF0A1',
            borderColor: '#FFF0A1',
            borderRadius: 14,
            ...Platform.select({
                ios: {
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 1,
                        height: 1,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 6,
                },
                android: {
                    elevation: 3,
                },
            }),
        },
        top:{
            flexDirection: 'row'
        },
        image:{
            width: widthPercentage(20),
            height: heightPercentage(19),
            marginRight: widthPercentage(8),
            resizeMode: 'stretch'
        },
        text:{
            fontSize: fontPercentage(12),
            fontWeight: 'bold',
            color: '#151515'
        },
        number:{
            fontSize: fontPercentage(14),
            fontWeight: 'bold',
            color: '#151515'
        }
    },
    subTitle:{
        container:{
            flexDirection: 'row',
            alignItems: 'center',
            width: widthPercentage(339),
            paddingBottom: heightPercentage(8),
            marginBottom: heightPercentage(13),
            borderBottomWidth: 2,
            botderColor: '#151515'
        },
        image1:{
            width: widthPercentage(20),
            height: heightPercentage(19),
            marginRight: widthPercentage(6),
            resizeMode: 'stretch'
        },
        image2:{
            width: widthPercentage(15),
            height: heightPercentage(15),
            marginRight: widthPercentage(6),
            resizeMode: 'stretch'
        },
        text:{
            fontSize: fontPercentage(12),
            fontWeight: 'bold',
            color: '#151515'
        }

    },
    more:{
        container:{
            width: widthPercentage(323),
            height: heightPercentage(15),
            marginTop: heightPercentage(13),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
        }, 
        text:{
            fontSize: fontPercentage(10),
            color: '#151515',
        },
        image:{
            width: widthPercentage(10),
            height: heightPercentage(6),
            resizeMode: 'stretch',
            transform: [{ rotate: '270deg'}],

        }
    }
})

export default MyPage;