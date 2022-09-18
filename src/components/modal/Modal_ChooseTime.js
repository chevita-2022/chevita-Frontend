import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, TouchableOpacity,View, Pressable} from "react-native";
import { heightPercentage,fontPercentage,widthPercentage } from "../../ResponsiveSize";
import Modal from "react-native-modal";

//let roomId='',userId=2076232, chatTitle='',chatOtherId='';
let userIdx1='';

const ChooseTime=({sharingTimeZones,otherId,title,globalLocation,detailedLocation,postIdx,userIdx})=>{

   // chatTitle=title;
    //chatOtherId=1976255;
    
    const [selectTime,setSelectTime]=useState(4);
    const [selectPlace,setSelectPlace]=useState('');
    //const [chat,setChat]=useState(false);

    const [ModalVisible1,setModalVisible1]=useState(false);
    const [ModalVisible2, setModalVisible2]=useState(false);
    
   /* const [room,setRoom]=useState([]);
    const getRoomId=()=>{
        const path="http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/chat/"+userId+'/'+otherId;
        fetch(path,{
            method:"POST",
            cache: "no-cache",
            headers:{
                'Content-Type':'application/json',
            }
        }).then(response=>response.json()).then(data=>{setRoom(data)})
        setModalVisible1(false); setModalVisible2(true);
    }*/

    const sendReserve=(num)=>{
        fetch("http://52.78.161.124/posts/reservation",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                "confirmedSharingTime": selectTime[0]+selectTime[1],
                "nanumStatus": "예약 요청",
                "nanumiIdx": otherId,
                "postIdx": postIdx,
                "takerIdx": userIdx,
            })
        }).then(res=>res.json()).then(res=>console.log(res));
    }

    userIdx1=userIdx;
    return(
        <>
            {/* 나눔 예약 버튼 */}
            <TouchableOpacity 
                style={{position:'absolute',top:heightPercentage(650),paddingBottom:widthPercentage(10),alignItems:'center',backgroundColor:'#FFF0A1',height:heightPercentage(43),width:widthPercentage(152),left:122,flexDirection:'row',borderRadius:21.5,
                    ...Platform.select({android:{elevation:3}})}} 
                    onPress={()=>{setModalVisible1(true)}}>
                <Image source={require('../../assets/images/calender.png')} style={{width:widthPercentage(20),height:heightPercentage(20),marginLeft:27,marginRight:-15,marginTop:9}} />
                <Text style={textstyle.write}>나눔 예약</Text>
            </TouchableOpacity>

            {/*모달창*/}
            <Modal isVisible={ModalVisible1}  modalStyle={{borderRadius:12,backgroundColor:'#ffffff'}} useNativeDriver={true} onBackdropPress={() => setModalVisible1(false)}>
                <View style={{borderRadius:12,backgroundColor:'#ffffff',width:widthPercentage(334),height:heightPercentage(240),marginBottom:10}}>
                <Text style={{padding:14,textAlign:'center',color:'#151515',fontWeight:'700',fontFamily:'Noto Sans KR',fontSize:fontPercentage(13)}}> 나눔 예약 시간대를 선택해주세요</Text>
                <View>
                    {sharingTimeZones!=undefined ? 
                        sharingTimeZones.map((i)=>(
                            <TouchableOpacity style={{width:widthPercentage(217),height:heightPercentage(34),margin:7,flexDirection:'row',paddingLeft:4,backgroundColor: selectTime == i ?'#D9D9D9':'#ffffff',borderRadius:12,alignSelf:'center'}} onPress={()=>{setSelectTime(i); setSelectPlace(detailedLocation); }} >
                                <Image source={require('../../assets/images/location.png')} style={{width:widthPercentage(11),height:heightPercentage(12),}} />
                                <Text style={{padding:5,color:'#374957',fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),right:2,top:-3,width:widthPercentage(217),lineHeight:12}}>{i[0]}  {''} {i[1]}시 {'\n'} {globalLocation} &nbsp; {detailedLocation}</Text>
                            </TouchableOpacity>
                        ))
                        :<></>
                    }
                    </View>
                </View>
                    <TouchableOpacity style={{marginBottom:13,flexDirection:'row',backgroundColor:'#FFF0A1',width:widthPercentage(142),height:heightPercentage(43),borderRadius:21.5,alignSelf:'center',
                    ...Platform.select({android:{elevation:3}})}} onPress={()=>{sendReserve(selectTime); setModalVisible2(true); setModalVisible1(false)}}>
                        <Image source={require('../../assets/images/calender.png')} style={{width:widthPercentage(20),height:heightPercentage(20),marginLeft:30,marginRight:-18,marginTop:10}} />
                        <Text style={textstyle.reserve}>예약하기</Text>
                    </TouchableOpacity>
            </Modal>

            <Modal isVisible={ModalVisible2} modalStyle={{borderRadius:12,backgroundColor:'#ffffff'}} useNativeDriver={true}>
            <View style={{borderRadius:12,backgroundColor:'#ffffff',width:widthPercentage(334),height:heightPercentage(177),marginBottom:10}}>
                <Text style={{color:'#151515',fontFamily:'Noto Sans KR',fontWeight:'700',fontSize:fontPercentage(14),alignSelf:'center',padding:15}}>나눔 예약 희망 채팅이 전송되었습니다</Text>
                {sharingTimeZones!=undefined?
                <View style={{alignSelf:'center',flexDirection:'row'}}>
                <Image source={require('../../assets/images/location.png')} style={{width:widthPercentage(11),height:heightPercentage(12),top:14}} />
                <Text style={{textAlign:'center',padding:5,color:'#151515',fontFamily:'Noto Sans KR',fontSize:fontPercentage(12),right:2,top:7}}>{selectTime[0]} {''} {selectTime[1]}시 {'\n'} {selectPlace}</Text>
            </View>
            :<></>}
                <Text style={{color:'#151515',fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),alignSelf:'center',padding:23,marginTop:20}}>예약 확정 유무가 채팅으로 전송되니 조금만 기다려주세요</Text>
            </View>
            </Modal>
        </>
    )
}

const textstyle=StyleSheet.create({
    write:{
        textAlign:'center',
        height: heightPercentage(43),
        width:widthPercentage(142),
        paddingTop:10,
        fontSize:fontPercentage(13),
        fontWeight:'700',
        color:'#151515',
        fontFamily:'Noto Sans KR',
        fontStyle:'normal',
        marginLeft:-13,
        marginTop:11
    },
    reserve:{
        textAlign:'center',
        height: heightPercentage(43),
        width:widthPercentage(142),
        fontSize:fontPercentage(13),
        fontWeight:'700',
        color:'#374957',
        fontFamily:'Noto Sans KR',
        fontStyle:'normal',
        marginLeft:-20,
        marginTop:11
    },
})

export {ChooseTime,userIdx1/*roomId,userId,chatTitle,chatOtherId*/};