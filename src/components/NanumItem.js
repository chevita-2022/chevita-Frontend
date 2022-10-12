import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View,Text ,StyleSheet, SafeAreaView,Image,ScrollView,Platform, Pressable, TouchableOpacity} from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../ResponsiveSize";

//d_day 
const YMDFormatter= (num) => { 
    
    if (!num) return "";
    var formatNum = '';

    // 공백제거
    num = num.replace(/\s/gi, "");

    try {
        if (num.length == 8) {
            formatNum = num.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
        }
    } catch (e) {
        formatNum = num;
        console.log(e);
    }
    return formatNum;
}

const Nanumitem=(props)=>{
    const {title,createdTime,hastag,like,d_day,postId,locate,imgUrl,userIdx} = props;

    const [jjim,setJjim]=useState(false);
    const navigation = useNavigation(); 
    const likeImage=(jjim===false ? require('../assets/images/like.png') : require('../assets/images/fullLike.png'))

    //작성한 시간 계산
    const created=new Date(createdTime[0],createdTime[1]-1,createdTime[2],createdTime[3],createdTime[4],createdTime[5]);
    const now=new Date();

    const elapsedMSec = now.getTime() - created.getTime();
    const elapsedMin = parseInt(elapsedMSec / 1000 /60); 
    const hour=parseInt(elapsedMin/60);
    const min=parseInt(elapsedMin%60);
    const day_hour=parseInt(elapsedMin/60)%24;
    const day=parseInt(hour/24);

    //디데이 계산
    const exday=new Date(YMDFormatter(d_day));
    const dday=exday.getTime()-now.getTime();
    const result=Math.ceil(dday/(1000*60*60*24));

    //위치 공백기준으로 자르기
    const arr1 = locate.split(" ");

    return(
        <SafeAreaView style={{flex:1,marginLeft:widthPercentage(10),marginRight:widthPercentage(10)}} >
                <View style={{paddingBottom:widthPercentage(8),borderBottomWidth:widthPercentage(1), borderBottomColor:'#D9D9D9'}}>
                 
                    <View style={{flexDirection:'row'}}>

                    {/* 게시물 제목 */}
                    <Pressable onPress={()=>navigation.navigate('NanumDetail',{id:postId, day:day, day_hour:day_hour,hour:hour,min:min,d_day:result,userIdx:userIdx})}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </Pressable>
                
                    <Text style={{position:'absolute',right:21,top:37.5,fontFamily:'Noto Sans KR',fontSize:fontPercentage(12),fontWeight:'700',color:'#151515'}}>{like}</Text>
                    {/* 찜 버튼 */}
                    <Pressable style={{position:'absolute', top:40,right:0}} onPress={()=>setJjim((prev) => !prev)}>
                        <Image source={likeImage} style={{width:widthPercentage(15),height:heightPercentage(15)}} />              
                    </Pressable>
                    </View>

                    {/* 올린 장소 및 시간 */}
                    {day > 0 ?
                        <Text style={{fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),padding:1,color:'rgba(55, 73, 87, 0.5)',width:widthPercentage(200)}}> 
                            {arr1[1]} {arr1[2]} &nbsp; {day}일 {day_hour}시간 {min}분 전
                        </Text> 
                        :
                        (
                            hour > 0 ?
                            <Text style={{fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),padding:1,color:'rgba(55, 73, 87, 0.5)',width:widthPercentage(200)}}> 
                                {arr1[1]} {arr1[2]} &nbsp; {hour}시간 {min}분 전
                            </Text> 
                            :
                            <Text style={{fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),padding:1,color:'rgba(55, 73, 87, 0.5)',width:widthPercentage(200)}}> 
                                {arr1[1]} {arr1[2]} &nbsp; {min}분 전
                            </Text> 
                        )
                    }

                    {/* 해시태그 */}
                    <Text style={styles.hastag}> {hastag}</Text>

                    {/* 이미지 */}
                    <ScrollView horizontal={true} style={{flexDirection:'row', paddingBottom:3}} showsHorizontalScrollIndicator={false}>
                        {imgUrl.map((i)=>(
                            <View style={{...Platform.select({android:{elevation:3}}),borderRadius:15}}>
                                <Image source={{uri:i}} style={styles.imgbox} />
                            </View>
                        ))}
                    </ScrollView>

                    {/* 마감 기한 */}
                    <Pressable onPress={()=>{navigation.navigate('NanumDetail',{id:postId})}} style={{padding:5, flexDirection:'row'}}>
                        <Image source={require('../assets/images/clock.png')} style={{height:heightPercentage(16),width:widthPercentage(15)}} />
                        <Text style={{marginLeft:8,color:'#151515',fontFamily:'Noto Sans KR',fontSize:fontPercentage(12),fontWeight:'700'}}>D-{result}</Text>
                    </Pressable>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title:{
        position: 'relative',
       //width: 152,
        height: heightPercentage(33),
        top: 10,
        fontFamily: 'Noto Sans KR',
        fontStyle:'normal',
        fontSize: fontPercentage(14),
        fontWeight:'900',
        color:'#151515'
    },
    hastag:{
        position:'relative',
        color:'#151515',
        fontFamily: 'Noto Sans KR',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize:fontPercentage(10),
        padding:1,
        paddingBottom:4,
        width:widthPercentage(200)
    },
    imgbox:{
        width:widthPercentage(110), 
        height:heightPercentage(104),
        borderRadius:15,
        overflow: 'hidden',
        marginRight:2
        
    }
})

export default Nanumitem;