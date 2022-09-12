import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View,Text ,StyleSheet, SafeAreaView,Image,ScrollView,Platform, Pressable, TouchableOpacity} from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../ResponsiveSize";

const Nanumitem=({title,place,createdTime,hastag,like,d_day})=>{

    const [jjim,setJjim]=useState(false);
    const navigation = useNavigation(); 
    const likeImage=(jjim===false ? require('../assets/images/like.png') : require('../assets/images/fullLike.png'))

    //시간 계산
    const created=new Date(createdTime[0],createdTime[1]-1,createdTime[2],createdTime[3],createdTime[4],createdTime[5]);
    const now=new Date();

    const elapsedMSec = now.getTime() - created.getTime();
    const elapsedMin = parseInt(elapsedMSec / 1000 /60); 
    const hour=parseInt(elapsedMin/60);
    const min=parseInt(elapsedMin%60);
    const day_hour=parseInt(elapsedMin/60)%24;
    const day=parseInt(hour/24);

    return(
        <SafeAreaView style={{flex:1,marginLeft:widthPercentage(10),marginRight:widthPercentage(10)}} >
                <View style={{paddingBottom:widthPercentage(8),borderBottomWidth:widthPercentage(1), borderBottomColor:'#D9D9D9'}}>
                 
                    <View style={{flexDirection:'row'}}>

                    {/* 게시물 제목 */}
                    <Pressable onPress={()=>navigation.navigate('NanumDetail')}>
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
                            {place} &nbsp; {day}일 {day_hour}시간 {min}분 전
                        </Text> 
                        :
                        (
                            hour > 0 ?
                            <Text style={{fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),padding:1,color:'rgba(55, 73, 87, 0.5)',width:widthPercentage(200)}}> 
                                {place} &nbsp; {hour}시간 {min}분 전
                            </Text> 
                            :
                            <Text style={{fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),padding:1,color:'rgba(55, 73, 87, 0.5)',width:widthPercentage(200)}}> 
                                {place} &nbsp; {min}분 전
                            </Text> 
                        )
                    }

                    {/* 해시태그 */}
                    <Text style={styles.hastag}> {hastag}</Text>

                    {/* 이미지 */}
                    <ScrollView horizontal={true} style={{flexDirection:'row', paddingBottom:3}} showsHorizontalScrollIndicator={false}>
                        <View style={{...Platform.select({android:{elevation:3}}),borderRadius:15}}>
                            <Image source={require("../assets/images/carrotEx1.jpeg")} style={styles.imgbox} />
                        </View>
                        <View style={{...Platform.select({android:{elevation:3}}),borderRadius:15}}>
                            <Image source={require("../assets/images/breadEx1.jpeg")} style={styles.imgbox} />
                        </View>
                        <View style={{...Platform.select({android:{elevation:3}}),borderRadius:15}}>
                            <Image source={require("../assets/images/jamEx1.jpeg")} style={styles.imgbox} />
                        </View>
                        <View style={{...Platform.select({android:{elevation:3}}),borderRadius:15}}>
                            <Image source={require("../assets/images/jamEx2.jpeg")} style={styles.imgbox} />
                        </View>
                    </ScrollView>

                    {/* 마감 기한 */}
                    <Pressable onPress={()=>{navigation.navigate('NanumDetail')}} style={{padding:5, flexDirection:'row'}}>
                        <Image source={require('../assets/images/clock.png')} style={{height:heightPercentage(16),width:widthPercentage(15)}} />
                        <Text style={{marginLeft:8,color:'#151515',fontFamily:'Noto Sans KR',fontSize:fontPercentage(12),fontWeight:'700'}}>D-{d_day}</Text>
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
        left: 5,
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