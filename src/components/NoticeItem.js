import React, { useState,useEffect } from "react";
import { Image, Text,View,StyleSheet ,TouchableOpacity, Platform} from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../ResponsiveSize";
import { ReviewInput } from '../components/Input';
import Modal from "react-native-modal";

const path = "http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/posts/reservation";

const NoticeRequest=(props)=>{
    const {item} = props;

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
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(type == 1 ? data1 : data2)
        };

        fetch(path, requestOptions)
        .then(response => response.json())
        //.then(data => console.log(data))
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
    
    return(
        <View style={{backgroundColor:'#ffffff',width:widthPercentage(318),height:heightPercentage(164),alignItems: 'center',borderRadius:11,paddingTop:heightPercentage(15),marginBottom:15,...Platform.select({android:{elevation:2}})}}>
            <View style={{width: widthPercentage(287), justifyContent:'center'}} >
                <View style={{flexDirection:'row', width: widthPercentage(287), alignItems:'center'}}>
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>비타민</Text>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10)}}>님이 {' '}</Text>
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>'{item.title}'</Text>
                </View>
                <View style={{flexDirection:'row', width: widthPercentage(287), alignItems:'center'}}>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10)}}>  의 나눔을 희망합니다.</Text>
                </View>
            </View>
            <View style={{width: widthPercentage(287),marginVertical:10,flexDirection:'row',height:heightPercentage(26)}}>
                <Image source={require('../assets/images/location.png')} style={{width:widthPercentage(16),height:heightPercentage(17)}}/>
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

    const data3 = {
        nanumStatus: "나눔완료",
        reserveIdx: item?.reserveIdx
    }
    
    const onPressNanum = () =>{
        const requestOptions1 = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data3)
        };
    
        fetch(path, requestOptions1)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
          //  console.error('There was an error!', error);
        });
    }

    return(
        <View style={{backgroundColor:'#ffffff',width:widthPercentage(318),height:heightPercentage(164),alignItems: 'center',borderRadius:11,paddingTop:heightPercentage(15),paddingHorizontal:widthPercentage(17),marginBottom:15,...Platform.select({android:{elevation:2}})}}>
            <View style={{flexDirection:'row', width: widthPercentage(287), alignItems:'center'}}>
              {/* <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>{item.userNickname}</Text>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10)}}>님 {' '}</Text>*/}
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>'{item.title}'</Text>
            </View>
            <View style={{flexDirection:'row', width: widthPercentage(287), alignItems:'center'}}>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10)}}>  의 나눔 예약이 확정되었어요!</Text>
            </View>
            <View style={{width: widthPercentage(287), marginVertical:17,flexDirection:'row',height:heightPercentage(26)}}>
                <Image source={require('../assets/images/location.png')} style={{width:widthPercentage(16),height:heightPercentage(17)}}/>
                <Text style={{color:'#151515',fontSize:fontPercentage(12),paddingLeft:4,fontWeight:'400',lineHeight:14}}> {item.confirmedTimeZone.substring(4,6)}월 {item.confirmedTimeZone.substring(6,8)}일 {item.confirmedTimeZone.substring(9,10)}시 {'\n'} {item.globalLocation + item.detailedLocation}</Text>
            </View>
            <TouchableOpacity style={style.container2} onPress={()=> onPressNanum()}>
                <Text style={style.text}>나눔 완료 </Text>
            </TouchableOpacity>
            {/*<Text style={{position:'absolute',fontSize:fontPercentage(10),right:17,marginVertical:2,color:'#767676',top:90}}>1분 전</Text>*/}
        </View>
    )
}

const NoticeCompleted=(props)=>{
    const {item} = props;

    const [review,setReview]=useState(false);
    
    const [isMounted, setIsMounted] = useState(false);
  const [value,setValue]=useState('');

  const handleChange = (name, value) => {
    setIsMounted(true);
    setValue({
      ...value, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
};

  useEffect(() => {
      return () => setIsMounted(false);
  },[])

    return(
        <>
        <View style={{backgroundColor:'#ffffff',width:widthPercentage(318),height:heightPercentage(164),alignItems: 'center',borderRadius:11,paddingTop:heightPercentage(15),paddingHorizontal:widthPercentage(17),marginBottom:15,...Platform.select({android:{elevation:2}})}}>
           <View style={{flexDirection:'row', width: widthPercentage(287), alignItems:'center'}}>
                {/*<Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>{item.userNickname}</Text>
                <Text style={{color:'#767676',fontWeight:'400',fontSize:fontPercentage(10)}}>님이 {' '}</Text>*/}
                <Text style={{color:'#151515',fontSize:fontPercentage(14),fontWeight:'700'}}>'{item.title}'</Text>
            </View>
            <View style={{width: widthPercentage(287), marginVertical:10,flexDirection:'row',height:heightPercentage(26)}}>
                <Image source={require('../assets/images/location.png')} style={{width:widthPercentage(16),height:heightPercentage(17)}}/>
                <Text style={{color:'#151515',fontSize:fontPercentage(12),paddingLeft:4,fontWeight:'400',lineHeight:14}}> {item.confirmedTimeZone.substring(4,6)}월 {item.confirmedTimeZone.substring(6,8)}일 {item.confirmedTimeZone.substring(9,10)}시 {'\n'} {item.globalLocation + item.detailedLocation}</Text>
            </View>
            <View style={{flexDirection:'row', width: widthPercentage(287), alignItems:'center',padding:4}}>
                <Text style={{color:'#151515',fontWeight:'400',fontSize:fontPercentage(10)}}>  나눔이 성공적으로 완료되었습니다</Text>
            </View>
            <TouchableOpacity style={style.container2} onPress={()=>{setReview(true); console.log('dd')}}>
                <Text style={style.text}>나눔 후기 작성 </Text>
            </TouchableOpacity>
            {/*<Text style={{position:'absolute',fontSize:fontPercentage(10),right:17,marginVertical:2,color:'#767676',top:90}}>1분 전</Text>*/}
        </View>

         {/* 나눔 완료 눌렀을 때 모달창 */}
         <Modal isVisible={review} modalStyle={{borderRadius:12,backgroundColor:'#ffffff'}} useNativeDriver={true}>
          <View style={{backgroundColor:'#ffffff',borderRadius:12,width:widthPercentage(340),height:heightPercentage(303),alignContent:'center'}}>
            <Text style={{alignSelf:'center',paddingTop:30,width:widthPercentage(183),textAlign:'center'}}>
              <Text style={{color:'#151515',fontWeight:'700',fontSize:fontPercentage(14)}}> '{item.title}' </Text>
              <Text style={{color:'#151515',fontWeight:'400',fontSize:fontPercentage(14)}}> 의 나눔후기를 작성해주세요 </Text>
            </Text>
            {/*<View style={{paddingTop:20,alignSelf:'center',marginBottom:15}}>
              <ProgressBarForVital/>
            </View>*/}
          <ReviewInput  name='review' value={value} handleChange={handleChange} placeholder='후기를 작성해주세요. 최대 60자 작성가능'/>
          </View>
          <TouchableOpacity style={{marginTop:10}} onPress={()=>setReview(false)}>
            <Text style={{backgroundColor:'#FFEB82',width:widthPercentage(340),height:heightPercentage(48),textAlignVertical:'center',textAlign:'center',borderRadius:12,color:'#151515',fontSize:fontPercentage(12)}}>
              후기 등록</Text>
          </TouchableOpacity>
        </Modal>

        </>
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

export {NoticeRequest,NoticeConfirmation,NoticeCompleted};