import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View,Platform, Pressable} from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../../ResponsiveSize";
import { Table,Col} from "react-native-table-component";
import { ProgressBarForDate, ProgressBarForVital } from '../../components/ProgressBar';
import Nanumitem from "../../components/NanumItem";
import {ChooseTime} from "../../components/modal/Modal_ChooseTime";
import { BackBtn, HeartBtn } from "../../components/Button";
import { SliderBox } from "react-native-image-slider-box";

const NanumDetail=({route,navigation})=>{

    const {id,day,hour,min,day_hour,d_day,userIdx} = route.params;
    const goBackNanumi = () => navigation.navigate('Nanumi');

    const [content,setContent]=useState([]);
    //상세 내용 서버 연결

    const path="http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/posts/"+id;
    const path1="http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/user/"+content.userIdx;
    

    const [userInfo,setUserInfo]=useState('');

    useEffect(()=>{
        fetch(path,{
            headers:{
                postid:id,
            },
        }).then(res=>res.json()).then(response=>setContent(response.data));

        if(id!=undefined) {
            //작성자 정보 조회
            
            fetch(path1,{
                headers:{
                    userid:content.userIdx,
                },
            }).then(res=>res.json())
            .then(response=>{setUserInfo(response);}); 
        }


    },[])

    //구매일자
    const unformatDate = "" + content.purchaseDate;
    let purchase = unformatDate.substring(0, 4)+'.'+unformatDate.substring(4, 6)+'.'+unformatDate.substring(6, 8);
    if(purchase==='..') {purchase='-'}
    //개봉일자
    const unformatDate1 = "" + content.openedDate;
    let opened = unformatDate1.substring(0, 4)+'.'+unformatDate1.substring(4, 6)+'.'+unformatDate1.substring(6, 8);
    if(opened==='..') {opened='-'}
    //유통기한
    const unformatDate2 = "" + content.shelfLife;
    let shelf = unformatDate2.substring(0, 4)+'.'+unformatDate2.substring(4, 6)+'.'+unformatDate2.substring(6, 8);
    if(shelf==='..') {shelf="-"}

    const col1=['식품 구매일자','개봉일자'];
    const col2=[purchase,opened];
    const col3=['유통기한','보관방식'];
    const col4=[shelf, content.storageMethod ];

    const [full,setFull]=useState(false);
    let type1=content.category;

    let userAddressArr=[];
    // exampleString 문자열을 " " 공백 기준으로 배열로 나눈다.
    if(userInfo.userAddress!=undefined){
    userAddressArr = userInfo.userAddress.split(" ");
   }
   

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
                {content.imgUrls != undefined ?
                    <SliderBox 
                        autoplay={false}
                        images={content.imgUrls}
                        ImageComponentStyle={{ width: widthPercentage(375), height: heightPercentage(300) }} />
                : <></>
                }
            
                <Pressable style={{position:'absolute',top:heightPercentage(60)}}>
                    <BackBtn color='white' goBack={goBackNanumi} />
                </Pressable>
                <Pressable style={{position:'absolute',right:0,top:heightPercentage(57)}} onPress={()=>setFull((prev) => !prev)}>
                   <HeartBtn full={full}/>
                </Pressable>

            <View style={{position:'absolute',right:widthPercentage(20),top:heightPercentage(330)}}>
                <ProgressBarForVital vital={userInfo.vital} />
            </View>

                <View style={{paddingLeft:widthPercentage(10),paddingTop:widthPercentage(20),paddingRight:widthPercentage(10)}}>
        
                    {/* 게시자 정보 */}
                    <View style={{flexDirection:'row'}}>
                        <View style={{...Platform.select({android:{elevation:3}}),borderRadius:100}}>
                            {userInfo.profileImgUrl !=undefined ?
                            <Image source={{uri:userInfo.profileImgUrl}} style={{width:widthPercentage(40),height:heightPercentage(40),borderRadius:100}} />
                            :
                            <Image source={require('../../assets/images/profile.png')} style={{width:widthPercentage(40),height:heightPercentage(40),borderRadius:100}} /> }
                            </View>
                        {userInfo.userNickName != undefined ?
                        <Text style={{fontFamily:'Noto Sans KR',fontSize:13,fontWeight:'500',color:'#151515',padding:5}}>{userInfo.userNickName}</Text>
                        : <></>}
                    </View>
                        {userInfo.userAddress != undefined ? 
                        <Text style={{top:-17,left:widthPercentage(46),fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),fontWeight:'400',color:'#7D7D7D'}}>{userAddressArr[0]} {userAddressArr[1]}</Text>
                        :
                        <></>}

                    {/* 제목 및 나눔 상태 */}
                    <View style={{flexDirection:'row'}}>
                        <Text style={{paddingTop:5,fontFamily:'Noto Sans KR',fontWeight:'700',fontSize:fontPercentage(16),color:'#151515'}}>{content.title}</Text>
                        {content.nanumStatus!=undefined && content.nanumStatus==='예약 확정' ?
                            <Text style={BoxStyle.reserve}>나눔 예약</Text>
                            : ( content.nanumStatus!=undefined && content.nanumStatus==='나눔 완료' ?
                            <Text style={BoxStyle.reserve}>나눔 완료</Text> : <></> )
                        }
                    </View>

                    {/* 게시물 올린 시간 */}
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

                    {/* 영수증 인증 */}
                    {content.certificatedReceipt!=undefined && content.certificatedReceipt === true ? 
                    <View style={{flexDirection:'row',position:'absolute',top:95,right:0,marginRight:5}}>
                        <Text style={{color:'#151515' ,fontWeight:'400',fontSize:fontPercentage(10),display:'flex',alignItems:'center',marginTop:4}}>영수증 인증</Text>
                        <Image source={require('../../assets/images/receipt.png')} style={{width:widthPercentage(20),height:heightPercentage(20),}}/>
                    </View>
                    : <></>}

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
                            <Text style={BoxStyle.text}> {''}D-{d_day}</Text>
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
                    <ProgressBarForDate value={d_day} />
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
                            {content.sharingTimeZones != undefined && content.detailedLocation != undefined && content.globalLocation!=undefined? 
                                content.sharingTimeZones.map(i=>(
                                <View style={{flexDirection:'row',paddingTop:5,paddingBottom:5}}>
                                <Image source={require('../../assets/images/location.png')} style={{width:widthPercentage(16),height:heightPercentage(17),marginTop:3}} />
                                <Text style={{paddingLeft:5,fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),fontWeight:'400',color:'#151515'}}>{i} &nbsp; { content.globalLocation} &nbsp;{content.detailedLocation}</Text>
                                </View>
                            )) : <></>
                            }
                    </View>
    
                    {/*조회수
                    <Text style={{width:widthPercentage(90),paddingLeft:5,paddingTop:10,fontFamily:'Noto Sans KR',fontSize:fontPercentage(10),fontWeight:'400',color:'#7D7D7D'}}>조회 {content.seenNumber}</Text> */}
                    
                    {/*나눔 추천*/}
                    <View style={{flexDirection:'row',paddingTop:60}}>
                        <Image source={require('../../assets/images/location2.png')} style={{width:widthPercentage(19),height:heightPercentage(19)}} />
                        <Text style={{paddingLeft:6,fontFamily:'Noto Sans KR',fontSize:fontPercentage(14),fontWeight:'700',color:'#151515'}}>김채비님 주변에 이런 나눔도 있어요!</Text>
                    </View>
                    <Text style={{borderTopWidth:1,borderRadius:0.5,marginTop:13, borderColor:'#D9D9D9'}}> &nbsp; </Text>
                </View>
            </ScrollView>
            <ChooseTime postIdx={content.postIdx} userIdx={userIdx} sharingTimeZones={content.sharingTimeZones} otherId={content.userIdx} title={content.title} detailedLocation={content.detailedLocation} globalLocation={content.globalLocation}/>
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
    },
    reserve:{
        color:'#707070',
        fontSize:fontPercentage(10),
        fontWeight:'400',
        marginLeft:10,
        marginTop:7,
        borderWidth:1,
        textAlign:'center',
        width:widthPercentage(49),
        padding:3,
        borderColor:'#BDBDBD',
        borderRadius:5
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