import React from "react";
import { Image, Text,View,StyleSheet ,TouchableOpacity, Platform} from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../ResponsiveSize";

const NoticeRequest=()=>{
    return(
        <View style={{backgroundColor:'#ffffff',width:widthPercentage(318),height:heightPercentage(180),alignSelf:'center',borderRadius:11,padding:15,marginVertical:9,...Platform.select({android:{elevation:3}})}}>
            <Text style={{flexDirection:'row'}} >
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>김채비</Text>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10),margin:4}}>님이 {' '}</Text>
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>'식빵 반봉지 나눔해요'</Text>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10),margin:4}}>의 나눔을 희망합니다.</Text>
            </Text>
            <View style={{marginVertical:10,flexDirection:'row',height:heightPercentage(26)}}>
                <Image source={require('../assets/images/location.png')} style={{width:widthPercentage(16),height:heightPercentage(17)}}/>
                <Text style={{color:'#151515',fontSize:fontPercentage(12),paddingLeft:4,fontWeight:'400',lineHeight:14}}> 8월 26일 7시 {'\n'} 서울특별시 서대문구 신촌로 56 나눔초등학교</Text>
            </View>
            <View style={{flexDirection:'row',marginVertical:5}}>
                <TouchableOpacity style={style.container} >
                    <Text style={style.text}>예약 승인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.container1} >
                    <Text style={style.text}>예약 거부 </Text>
                </TouchableOpacity>
          </View>
            <Text style={{position:'absolute',fontSize:fontPercentage(10),right:17,marginVertical:2,color:'#767676',top:155}}>1분 전</Text>
        </View>
    )
}

const NoticeConfirmation=()=>{
    return(
        <View style={{backgroundColor:'#ffffff',width:widthPercentage(318),height:heightPercentage(115),alignSelf:'center',borderRadius:11,padding:15,marginVertical:9,...Platform.select({android:{elevation:3}})}}>
            <Text style={{flexDirection:'row'}} >
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>김채비</Text>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10),margin:4}}>님과 {' '}</Text>
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>'식빵 반봉지 나눔해요'</Text>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10),margin:4}}>의 나눔 예약이 확정되었어요!</Text>
            </Text>
            <View style={{marginVertical:10,flexDirection:'row',height:heightPercentage(26)}}>
                <Image source={require('../assets/images/location.png')} style={{width:widthPercentage(16),height:heightPercentage(17)}}/>
                <Text style={{color:'#151515',fontSize:fontPercentage(12),paddingLeft:4,fontWeight:'400',lineHeight:14}}> 8월 26일 7시 {'\n'} 서울특별시 서대문구 신촌로 56 나눔초등학교</Text>
            </View>
            <Text style={{position:'absolute',fontSize:fontPercentage(10),right:17,marginVertical:2,color:'#767676',top:90}}>1분 전</Text>
        </View>
    )
}

const style=StyleSheet.create({
    text:{
      width:widthPercentage(136),
      height:heightPercentage(48),
      backgroundColor:'#FFF0A1',
      textAlignVertical:'center',
      textAlign:'center',
      color:'#151515',
      borderRadius:12,
      fontFamily:'Noto Sans KR',
      fontWeight:'700',
      fontSize:fontPercentage(14),
      ...Platform.select({
        android:{ elevation:3 }
      })
    },
    container:{
      backgroundColor:'#ffffff',
    },
    container1:{
      backgroundColor:'#ffffff',
      marginLeft:15
    }
  })

export {NoticeRequest,NoticeConfirmation};