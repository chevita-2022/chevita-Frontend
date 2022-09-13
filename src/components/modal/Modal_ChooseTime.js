import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, TouchableOpacity,View, Pressable} from "react-native";
import { heightPercentage,fontPercentage,widthPercentage } from "../../ResponsiveSize";
import Modal from "react-native-simple-modal";

let roomId='',userId=103;

const ChooseTime=({appointment,otherId})=>{

    const [offset,seOffset]=useState();

    const [select,setSelect]=useState(4);
    const [chat,setChat]=useState(false);

    const [ModalVisible1,setModalVisible1]=useState(false);
    const [ModalVisible2, setModalVisible2]=useState(false);

    const getRoomId=()=>{
        const path="http://chaevita0912-env.eba-2hjzekep.ap-northeast-2.elasticbeanstalk.com/chat/"+userId+'/'+otherId;
        fetch(path,{
            method:"POST",
            cache: "no-cache",
            headers:{
                'Content-Type':'application/json',
            }
        }).then(response=>response.json()).then(data=>{console.log(data.roomId,otherId)})
        setModalVisible1(false); setModalVisible2(true);
    }

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
            <Modal offset={offset} open={ModalVisible1} modalDidClose={()=>{setModalVisible1(false)}} modalStyle={{borderRadius:12,backgroundColor:'#ffffff'}} useNativeDriver={true}>
                <Text style={{padding:14,textAlign:'center',color:'#151515',fontWeight:'700',fontFamily:'Noto Sans KR',fontSize:fontPercentage(13)}}> 나눔 예약 시간대를 선택해주세요</Text>
                    <View style={{flexDirection:'row'}}>
                        {appointment.map((i)=>(
                            <TouchableOpacity style={{width:widthPercentage(95),height:heightPercentage(60),margin:7,paddingLeft:4,flexDirection:'row',backgroundColor: select == i ?'#D9D9D9':'#ffffff',borderRadius:12}} onPress={()=>setSelect(i)} >
                                <Image source={require('../../assets/images/location.png')} style={{width:widthPercentage(11),height:heightPercentage(12),top:14}} />
                                <Text style={{textAlign:'center',padding:5,color:'#374957',fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),width:widthPercentage(80),right:2,top:7}}>{i}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity style={{marginTop:15,marginBottom:20,width:widthPercentage(135),height:heightPercentage(43),alignSelf:'center',backgroundColor:select===3? '#D9D9D9':'#ffffff',borderRadius:12}}  onPress={()=>setSelect(3)}>
                        <Text style={{textAlign:'center',alignItems:'center',color:'#374957',fontFamily:'Noto Sans KR',fontSize:fontPercentage(12),fontWeight:'400',paddingTop:11}}>기타 시간대 요청하기</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginBottom:13,flexDirection:'row',backgroundColor:'#FFF0A1',width:widthPercentage(142),height:heightPercentage(43),borderRadius:21.5,alignSelf:'center',
                    ...Platform.select({android:{elevation:3}})}}
                    onPress={getRoomId} >
                        <Image source={require('../../assets/images/calender.png')} style={{width:widthPercentage(20),height:heightPercentage(20),marginLeft:30,marginRight:-18,marginTop:10}} />
                        <Text style={textstyle.reserve}>예약하기</Text>
                    </TouchableOpacity>
            </Modal>

            <Modal offset={offset} open={ModalVisible2} modalDidClose={()=>{setModalVisible2(false)}} modalStyle={{borderRadius:12,backgroundColor:'#ffffff'}} useNativeDriver={true}>
                <Text style={{color:'#151515',fontFamily:'Noto Sans KR',fontWeight:'700',fontSize:fontPercentage(14),alignSelf:'center',padding:15}}>나눔 예약 희망 채팅이 전송되었습니다</Text>
                <View style={{alignSelf:'center',flexDirection:'row'}}>
                    <Image source={require('../../assets/images/location.png')} style={{width:widthPercentage(11),height:heightPercentage(12),top:14}} />
                    <Text style={{textAlign:'center',padding:5,color:'#151515',fontFamily:'Noto Sans KR',fontSize:fontPercentage(12),width:widthPercentage(80),right:2,top:7}}>{appointment[0]}</Text>
                </View>
                <Text style={{color:'#151515',fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),alignSelf:'center',padding:23}}>예약 확정 유무가 채팅으로 전송되니 조금만 기다려주세요</Text>
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

export {ChooseTime,roomId,userId};