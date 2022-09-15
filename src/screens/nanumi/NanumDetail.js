import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View,Platform, Pressable} from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../../ResponsiveSize";
import { Table,Col} from "react-native-table-component";
import { ProgressBarForDate, ProgressBarForVital } from '../../components/ProgressBar';
import Nanumitem from "../../components/NanumItem";
import {ChooseTime} from "../../components/modal/Modal_ChooseTime";
import { BackBtn, HeartBtn } from "../../components/Button";

const NanumDetail=({route,navigation})=>{

    const {id,day,hour,min,day_hour} = route.params;
    const goBackNanumi = () => navigation.navigate('Nanumi');

    const [content,setContent]=useState([]);
    //상세 내용 서버 연결
    const path="http://chaevita0912-env.eba-2hjzekep.ap-northeast-2.elasticbeanstalk.com/posts/"+id;
    fetch(path,{
        headers:{
            postid:id,
        },
    }).then(res=>res.json()).then(response=>setContent(response.data));

    const [userInfo,setUserInfo]=useState('');

    if(id!=undefined) {
    //작성자 정보 조회
    const path1="http://chaevita0912-env.eba-2hjzekep.ap-northeast-2.elasticbeanstalk.com/user/"+content.userIdx;
    fetch(path1,{
        headers:{
            userid:content.userIdx,
        },
    }).then(res=>res.json())
    .then(response=>{setUserInfo(response);}); 
}

    //구매일자
    const unformatDate = "" + content.purchaseDate;
    const purchase = unformatDate.substring(0, 4)+'.'+unformatDate.substring(5, 6)+'.'+unformatDate.substring(7, 9);
    //개봉일자
    const unformatDate1 = "" + content.openedDate;
    const opened = unformatDate1.substring(0, 4)+'.'+unformatDate1.substring(5, 6)+'.'+unformatDate1.substring(7, 9);
    //유통기한
    const unformatDate2 = "" + content.shelfLife;
    const shelf = unformatDate2.substring(0, 4)+'.'+unformatDate2.substring(5, 6)+'.'+unformatDate2.substring(7, 9);
    
    const col1=['식품 구매일자','개봉일자'];
    const col2=[purchase,opened];
    const col3=['유통기한','보관방식'];
    const col4=[shelf, content.storageMethod ];
    const appointment=['8월 26일 7시 나눔초등학교', '8월 29일 18시 나눔초등학교','9월 15일 2시 나눔초등학교'];

    const [full,setFull]=useState(false);

    let type1=content.category;

    //음식 종류
    const img= (
        type1==='채소' ? require('../../assets/images/veg.png') 
            : type1==='과일' ? require('../../assets/images/fruit.png') 
            : type1==='쌀·잡곡' ? require('../../assets/images/grain.png') 
            : type1==='정육·계란' ? require('../../assets/images/meat.png') 
            : type1==='베이커리' ? require('../../assets/images/backery.png') 
            : type1==='유제품' ? require('../../assets/images/diary.png') 
            : type1==='소스' ? require('../../assets/images/sauce.png') 
            : type1==='김치·반찬' ? require('../../assets/images/side.png') 
            : type1==='가공·냉동' ? require('../../assets/images/frz.png') 
            : require('../../assets/images/etc.png')  //기타
    )

    return(
        <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
            <ScrollView>
                <Image source={require('../../assets/images/test.jpeg')} style={{width:widthPercentage(375),height:heightPercentage(300)}} />
            
                <Pressable style={{position:'absolte',top:heightPercentage(60)}}>
                    <BackBtn color='white' goBack={goBackNanumi} />
                </Pressable>
                <Pressable style={{position:'absolute',right:0,top:heightPercentage(57)}} onPress={()=>setFull((prev) => !prev)}>
                   <HeartBtn full={full}/>
                </Pressable>

            <View style={{position:'absolute',right:widthPercentage(20),top:heightPercentage(330)}}>
                <ProgressBarForVital vital={userInfo.vital} />
            </View>

                <View style={{paddingLeft:widthPercentage(10),paddingTop:widthPercentage(20),paddingRight:widthPercentage(10)}}>
        
                    {/*제목*/}
                    <View style={{flexDirection:'row'}}>
                        <View style={{...Platform.select({android:{elevation:3}}),borderRadius:100}}>
                            <Image source={require("../../assets/images/carrotEx1.jpeg")} style={{width:widthPercentage(40),height:heightPercentage(40),borderRadius:100}} />
                       </View>
                        {userInfo.userNickName != undefined ?
                        <Text style={{fontFamily:'Noto Sans KR',fontSize:13,fontWeight:'500',color:'#151515',padding:5}}>{userInfo.userNickName}</Text>
                        : <></>}
                    </View>
                        {userInfo.userAddress != undefined ? 
                        <Text style={{top:-17,left:widthPercentage(46),fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),fontWeight:'400',color:'#7D7D7D'}}>{userInfo.userAddress}</Text>
                        :
                        <></>}
                    <Text style={{paddingTop:5,fontFamily:'Noto Sans KR',fontWeight:'700',fontSize:fontPercentage(16),color:'#151515'}}>{content.title}</Text>
                    {day > 0 ?
                        <Text style={{paddingTop:2,fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(11),color:'#7D7D7D'}}> 
                            {day}일 {day_hour}시간 {min}분 전
                        </Text> 
                        :
                        (
                            hour > 0 ?
                            <Text style={{paddingTop:2,fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(11),color:'#7D7D7D'}}> 
                                {hour}시간 {min}분 전
                            </Text> 
                            :
                            <Text style={{paddingTop:2,fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(11),color:'#7D7D7D'}}> 
                                {min}분 전
                            </Text> 
                        )
                    }
                    
                    {/*정보 박스*/}
                    <View style={{paddingTop:20,flexDirection:'row'}}>
                        <View style={BoxStyle.container} activeOpacity={0.6}>
                        <Image source={img} style={BoxStyle.img} />
                            <Text style={BoxStyle.text}> {''}{type1}</Text>
                        </View>
                        <View style={BoxStyle.container} activeOpacity={0.6}>
                            <Image source={require('../../assets/images/thermometer.png')} style={BoxStyle.img} />
                            <Text style={BoxStyle.text}>{content.storageMethod}</Text>
                        </View>
                        <View style={BoxStyle.container} activeOpacity={0.6}>
                            <Image source={require('../../assets/images/clock.png')} style={BoxStyle.img}/>
                            <Text style={BoxStyle.text}> {''}D-{content.expirationDate}</Text>
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
                    <Text style={{color:'#181818',fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(12)}}>{content.contents}</Text>
                    
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
                    <Text style={{width:widthPercentage(90),paddingLeft:5,paddingTop:10,fontFamily:'Noto Sans KR',fontSize:fontPercentage(10),fontWeight:'400',color:'#7D7D7D'}}>조회 {content.seenNumber}</Text> 
                    
                    {/*나눔 추천*/}
                    <View style={{flexDirection:'row',paddingTop:60}}>
                        <Image source={require('../../assets/images/location2.png')} style={{width:widthPercentage(19),height:heightPercentage(19)}} />
                        <Text style={{paddingLeft:6,fontFamily:'Noto Sans KR',fontSize:fontPercentage(14),fontWeight:'700',color:'#151515'}}>김채비님 주변에 이런 나눔도 있어요!</Text>
                    </View>
                    <Text style={{borderTopWidth:1,borderRadius:0.5,marginTop:13, borderColor:'#D9D9D9'}}> &nbsp; </Text>
                </View>
            </ScrollView>
            <ChooseTime appointment={appointment} otherId={content.userIdx}/>
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