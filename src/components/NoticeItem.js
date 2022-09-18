import React from "react";
import { Image, Text,View,StyleSheet ,TouchableOpacity, Platform} from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../ResponsiveSize";

const path = "http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/posts/reservation";

const NoticeRequest=(props)=>{
    const {item} = props;
    console.log(item)

    const data1 = {
        nanumStatus: "예약확정",
        reserveIdx: item?.reserveIdx
    }

    const data2 = {
        nanumStatus: "예약거부",
        reserveIdx: item?.reserveIdx
    }

    const onPress = (type) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(type == 1 ? data1 : data2)
        };

        fetch(path, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            console.error('There was an error!', error);
        });

    }
    
    return(
        <View style={{backgroundColor:'#ffffff',width:widthPercentage(318),height:heightPercentage(164),alignItems: 'center',borderRadius:11,paddingTop:heightPercentage(15),marginBottom:15,...Platform.select({android:{elevation:2}})}}>
            <View style={{width: widthPercentage(287), justifyContent:'center'}} >
                <View style={{flexDirection:'row', width: widthPercentage(287), alignItems:'center'}}>
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>{item.profileUrl}</Text>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10)}}>님이 {' '}</Text>
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>'{item.title}'</Text>
                </View>
                <View style={{flexDirection:'row', width: widthPercentage(287), alignItems:'center'}}>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10)}}>  의 나눔을 희망합니다.</Text>
                </View>
            </View>
            <View style={{width: widthPercentage(287),marginVertical:10,flexDirection:'row',height:heightPercentage(26)}}>
                {/*<Image source={item.profileUrl} style={{width:widthPercentage(16),height:heightPercentage(17)}}/>*/}
                <Text style={{color:'#151515',fontSize:fontPercentage(12),paddingLeft:4,fontWeight:'400',lineHeight:14}}> {item.confirmedTimeZone.substring(4,6)}월 {item.confirmedTimeZone.substring(6,8)}일 {item.confirmedTimeZone.substring(9,10)}시 {'\n'} {item.globalLocation + item.detailedLocation}</Text>
            </View>
            <View style={{flexDirection:'row', width: widthPercentage(287),justifyContent: 'space-between', alignItems: 'center',}}>
                <TouchableOpacity style={style.container1} onPress={()=> onPress(1)}>
                    <Text style={style.text}>예약 승인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.container1} onPress={()=> onPress(2)}>
                    <Text style={style.text}>예약 거부 </Text>
                </TouchableOpacity>
          </View>
            {/*<Text style={{position:'absolute',fontSize:fontPercentage(10),right:17,marginVertical:2,color:'#767676',top:155}}>1분 전</Text>*/}
        </View>
    )
}

const NoticeConfirmation=(props)=>{
    const {item} = props;
    return(
        <View style={{backgroundColor:'#ffffff',width:widthPercentage(318),height:heightPercentage(164),alignItems: 'center',borderRadius:11,paddingTop:heightPercentage(15),paddingHorizontal:widthPercentage(17),marginBottom:15,...Platform.select({android:{elevation:2}})}}>
            <View style={{flexDirection:'row', width: widthPercentage(287), alignItems:'center'}}>
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>{item.profileUrl}</Text>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10)}}>님이 {' '}</Text>
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>'{item.title}'</Text>
            </View>
            <View style={{flexDirection:'row', width: widthPercentage(287), alignItems:'center'}}>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10)}}>  의 나눔 예약이 확정되었어요!</Text>
            </View>
            <View style={{width: widthPercentage(287), marginVertical:10,flexDirection:'row',height:heightPercentage(26)}}>
                {/*<Image source={require('../assets/images/location.png')} style={{width:widthPercentage(16),height:heightPercentage(17)}}/>*/}
                <Text style={{color:'#151515',fontSize:fontPercentage(12),paddingLeft:4,fontWeight:'400',lineHeight:14}}> {item.confirmedTimeZone.substring(4,6)}월 {item.confirmedTimeZone.substring(6,8)}일 {item.confirmedTimeZone.substring(9,10)}시 {'\n'} {item.globalLocation + item.detailedLocation}</Text>
            </View>
            <TouchableOpacity style={style.container2} >
                <Text style={style.text}>나눔 완료 </Text>
            </TouchableOpacity>
            {/*<Text style={{position:'absolute',fontSize:fontPercentage(10),right:17,marginVertical:2,color:'#767676',top:90}}>1분 전</Text>*/}
        </View>
    )
}

const style=StyleSheet.create({
    text:{
      textAlignVertical:'center',
      textAlign:'center',
      color:'#151515',
      fontFamily:'Noto Sans KR',
      fontWeight:'700',
      fontSize:fontPercentage(14),
    },
    container1:{
        width:widthPercentage(136),
        height:heightPercentage(48),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FFF0A1',
        borderRadius:12,
        ...Platform.select({
            android:{ elevation:3 }
          })
    },
    container2:{
        width:widthPercentage(282),
        height:heightPercentage(48),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FFF0A1',
        borderRadius:12,
        ...Platform.select({
            android:{ elevation:3 }
          }) 
    }
  })

export {NoticeRequest,NoticeConfirmation};