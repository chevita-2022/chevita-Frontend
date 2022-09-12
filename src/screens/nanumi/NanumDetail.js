import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View,Platform, Pressable} from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../../ResponsiveSize";
import { Table,Col} from "react-native-table-component";
import { ProgressBarForDate, ProgressBarForVital } from '../../components/ProgressBar';
import Nanumitem from "../../components/NanumItem";
import ChooseTime from "../../components/modal/Modal_ChooseTime";
import { BackBtn, HeartBtn } from "../../components/Button";

const NanumDetail=({navigation})=>{

    const goBackNanumi = () => navigation.navigate('Nanumi');

    const col1=['식품 구매일자','개봉일자'];
    const col2=['2022.08.19','2022.08.19'];
    const col3=['유통기한','보관방식'];
    const col4=['2022.09.23','상온보관'];
    const appointment=['8월 26일 7시 나눔초등학교', '8월 29일 18시 나눔초등학교','9월 15일 2시 나눔초등학교'];

    const [type,setType]=useState('가공·냉동')
    const [full,setFull]=useState(false);

    const img= (
        type==='채소' ? require('../../assets/images/veg.png') 
            : type==='과일' ? require('../../assets/images/fruit.png') 
            : type==='쌀·잡곡' ? require('../../assets/images/grain.png') 
            : type==='정육·계란' ? require('../../assets/images/meat.png') 
            : type==='베이커리' ? require('../../assets/images/backery.png') 
            : type==='유제품' ? require('../../assets/images/diary.png') 
            : type==='소스' ? require('../../assets/images/sauce.png') 
            : type==='김치·반찬' ? require('../../assets/images/side.png') 
            : type==='가공·냉동' ? require('../../assets/images/frz.png') 
            : require('../../assets/images/etc.png')  //기타
    )

    return(
        <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
            <ScrollView>
                <Image source={require('../../assets/images/test.jpeg')} style={{width:widthPercentage(375),height:heightPercentage(300)}} />
            
                <Pressable style={{position:'absolute',top:heightPercentage(60)}}>
                    <BackBtn color='white' goBack={goBackNanumi} />
                </Pressable>
                <Pressable style={{position:'absolute',right:0,top:heightPercentage(57)}} onPress={()=>setFull((prev) => !prev)}>
                   <HeartBtn full={full}/>
                </Pressable>

            <View style={{position:'absolute',right:widthPercentage(20),top:heightPercentage(330)}}>
                <ProgressBarForVital vital={85} />
            </View>

                <View style={{paddingLeft:widthPercentage(10),paddingTop:widthPercentage(20),paddingRight:widthPercentage(10)}}>
        
                    {/*제목*/}
                    <View style={{flexDirection:'row'}}>
                        <View style={{...Platform.select({android:{elevation:3}}),borderRadius:100}}>
                            <Image source={require("../../assets/images/carrotEx1.jpeg")} style={{width:widthPercentage(40),height:heightPercentage(40),borderRadius:100}} />
                       </View>
                        <Text style={{fontFamily:'Noto Sans KR',fontSize:13,fontWeight:'500',color:'#151515',padding:5}}>식빵빵</Text>
                    </View>
                        <Text style={{top:-17,left:widthPercentage(46),fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),fontWeight:'400',color:'#7D7D7D'}}>아현동</Text>
                    <Text style={{paddingTop:5,fontFamily:'Noto Sans KR',fontWeight:'700',fontSize:fontPercentage(16),color:'#151515'}}>식빵 반봉지 나눔</Text>
                    <Text style={{paddingTop:2,fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(11),color:'#7D7D7D'}}>13시간 전</Text>
                    
                    {/*정보 박스*/}
                    <View style={{paddingTop:20,flexDirection:'row'}}>
                        <View style={BoxStyle.container} activeOpacity={0.6}>
                        <Image source={img} style={BoxStyle.img} />
                            <Text style={BoxStyle.text}> {''}{type}</Text>
                        </View>
                        <View style={BoxStyle.container} activeOpacity={0.6}>
                            <Image source={require('../../assets/images/thermometer.png')} style={BoxStyle.img} />
                            <Text style={BoxStyle.text}>상온보관</Text>
                        </View>
                        <View style={BoxStyle.container} activeOpacity={0.6}>
                            <Image source={require('../../assets/images/clock.png')} style={BoxStyle.img}/>
                            <Text style={BoxStyle.text}> {''}D-23</Text>
                        </View>
                    </View>
                    
                    {/*해시태그*/}
                    <Text style={{fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),paddingTop:8,color:'#7D7D7D'}}>#가공식품 #식빵 #베이커리</Text>
                    
                    {/*식품구매일자~보관방식*/}
                    <Table style={{flexDirection:'row',width:widthPercentage(350),paddingTop:14}}>
                        <Col data={col1} textStyle={InfoText.title}/>
                        <Col data={col2} textStyle={InfoText.detail} style={{borderRightWidth:2,borderColor:'#D9D9D9'}}/>
                        <Col data={col3} textStyle={{paddingLeft:8,fontSize:fontPercentage(12)}} />
                        <Col data={col4} textStyle={InfoText.detail}/>
                    </Table>
                    
                    {/*소비기한*/}
                    <View style={{flexDirection:'row', paddingTop:30}}>
                        <Image source={require('../../assets/images/clock.png')} style={{width:widthPercentage(20),height:heightPercentage(20)}} />
                        <Text  style={{paddingLeft:5,fontFamily:'Noto Sans KR',fontWeight:'700',fontSize:fontPercentage(13),color:'#151515'}}>소비기한</Text>
                    </View>
                    <ProgressBarForDate/>
                    <Text style={{borderTopWidth:1,borderRadius:0.5,marginTop:25, borderColor:'#D9D9D9'}}> &nbsp; </Text>
                    
                    {/*본문*/}
                    <Text style={{color:'#181818',fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(12)}}>식빵 반봉지 나눔합니다.{'\n'} 제빵왕 김탁구가 만든거라 아주 맛있읍니다.{'\n'} 냠냠굿~</Text>
                    
                    {/*나눔시간*/}
                    <View style={{padding:7,borderWidth:1,borderColor:'#F3F3F3',borderRadius:17,marginTop:100,backgroundColor:'#F3F3F3'}}>
                        {/*<Table >
                            <Row data={appointmentHeader} style={{padding:3}} textStyle={{fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),fontWeight:'700',color:'#151515'}} />
                            <Row data={appointment} style={{padding:3}}/>
                         </Table>*/}
                        <Text style={{fontFamily:'Noto Sans KR',padding:5,fontSize:fontPercentage(11),fontWeight:'700',color:'#151515'}}>나눔 예약을 눌러 기타시간대도 요청해보세요!</Text>
                        <View style={{flexDirection:'row'}}>
                            {appointment.map(i=>(
                                <View style={{width:widthPercentage(110),flexDirection:'row',paddingTop:5,paddingBottom:5}}>
                                <Image source={require('../../assets/images/location.png')} style={{width:widthPercentage(16),height:heightPercentage(17),marginTop:3}} />
                                <Text style={{width:widthPercentage(90),paddingLeft:5,fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),fontWeight:'400',color:'#151515'}}>{i}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
    
                    {/*조회수*/}
                    <Text style={{width:widthPercentage(90),paddingLeft:5,paddingTop:10,fontFamily:'Noto Sans KR',fontSize:fontPercentage(10),fontWeight:'400',color:'#7D7D7D'}}>조회 18</Text> 
                    
                    {/*나눔 추천*/}
                    <View style={{flexDirection:'row',paddingTop:60}}>
                        <Image source={require('../../assets/images/location2.png')} style={{width:widthPercentage(19),height:heightPercentage(19)}} />
                        <Text style={{paddingLeft:6,fontFamily:'Noto Sans KR',fontSize:fontPercentage(14),fontWeight:'700',color:'#151515'}}>김채비님 주변에 이런 나눔도 있어요!</Text>
                    </View>
                    <Text style={{borderTopWidth:1,borderRadius:0.5,marginTop:13, borderColor:'#D9D9D9'}}> &nbsp; </Text>
                    <Nanumitem/>
                    <Nanumitem/>
                </View>
            </ScrollView>
            <ChooseTime appointment={appointment}/>
        </SafeAreaView>
    )
}

const BoxStyle=StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        width: widthPercentage(111),
        height: heightPercentage(48),
        marginVertical: 2,
        marginHorizontal: widthPercentage(4),
        backgroundColor: '#ffffff',
        borderColor : '#ffffff',
        borderRadius: 15,
        flexDirection:'row',
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
    text:{
        fontSize: fontPercentage(12),
        fontWeight: '700',
        fontFamily:'Noto Sans KR',
        color:'#151515',
        padding:3,
    },
    img:{
        height:heightPercentage(19),
        width:widthPercentage(18),
    }
})

const InfoText=StyleSheet.create({
    title:{
        fontSize:fontPercentage(12),
        fontFamily:'Noto Sans KR',
        fontStyle:'normal',
        fontWeight:'400',
        color:'#7D7D7D',
        padding:2,
    },
    detail:{
        fontSize:fontPercentage(12),
        fontFamily:'Noto Sans KR',
        fontStyle:'normal',
        fontWeight:'700',
        color:'#151515',
        padding:1,
    }
})

export default NanumDetail;