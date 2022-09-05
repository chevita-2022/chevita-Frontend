import React, { useState } from "react";
import { Text, Image, StyleSheet, TouchableOpacity,View, Pressable} from "react-native";
import { heightPercentage,fontPercentage,widthPercentage } from "../../ResponsiveSize";
import Modal from "react-native-simple-modal";

const ChooseTime=({appointment})=>{

    const [offset,seOffset]=useState();
    const [backgroundColor0,setBackgroundColor0]=useState('#ffffff');
    const [backgroundColor1,setBackgroundColor1]=useState('#ffffff');
    const [backgroundColor2,setBackgroundColor2]=useState('#ffffff');
    const [backgroundColor3,setBackgroundColor3]=useState('#ffffff');

    const [ModalVisible1,setModalVisible1]=useState(false);
    const [ModalVisible2, setModalVisible2]=useState(false);

    /*const onPressedIn=(i)=>{
        setBackgroundColor(backgroundColor[i],[...backgroundColor[i],color]);
        setColor('black');
        console.log(i);
    }
    const onPressedOut=()=>{
        setBackgroundColor('#ffffff');
    }*/

    return(
        <>
            {/* 나눔 예약 버튼 */}
            <TouchableOpacity 
                style={{position:'absolute',top:660,paddingBottom:10,alignItems:'center',backgroundColor:'#FFF0A1',height:heightPercentage(43),width:widthPercentage(152),left:122,flexDirection:'row',borderRadius:21.5,
                    ...Platform.select({android:{elevation:3}})}} 
                    onPress={()=>{setModalVisible1(true)}}>
                <Image source={require('../../assets/images/calender.png')} style={{width:widthPercentage(20),height:heightPercentage(20),marginLeft:27,marginRight:-15,marginTop:9}} />
                <Text style={textstyle.write}>나눔 예약</Text>
            </TouchableOpacity>

            {/*모달창*/}
            <Modal offset={offset} open={ModalVisible1} modalDidClose={()=>{setModalVisible1(false)}} modalStyle={{borderRadius:12,backgroundColor:'#ffffff'}} useNativeDriver={true}>
                <Text style={{padding:14,textAlign:'center',color:'#151515',fontWeight:'700',fontFamily:'Noto Sans KR',fontSize:fontPercentage(13)}}> 나눔 예약 시간대를 선택해주세요</Text>
                    {/*<View style={{flexDirection:'row'}}>
                        {appointment.map((time)=>(
                            <TouchableOpacity style={{width:widthPercentage(95),height:heightPercentage(60),margin:7,paddingLeft:4,flexDirection:'row',backgroundColor:backgroundColor[time],borderRadius:12}} >
                                <Image source={require('../../assets/images/location.png')} style={{width:widthPercentage(11),height:heightPercentage(12),top:14}} />
                                <Text style={{textAlign:'center',padding:5,color:'#374957',fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),width:widthPercentage(80),right:2,top:7}}>{time}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>*/}

                       { /* 코드 수정 필요 */}
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{width:widthPercentage(95),height:heightPercentage(60),margin:7,paddingLeft:4,flexDirection:'row',backgroundColor:backgroundColor0,borderRadius:12}} onPressIn={()=>{setBackgroundColor0('#D9D9D9')}} >
                                <Image source={require('../../assets/images/location.png')} style={{width:widthPercentage(11),height:heightPercentage(12),top:14}} />
                                <Text style={{textAlign:'center',padding:5,color:'#374957',fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),width:widthPercentage(80),right:2,top:7}}>{appointment[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:widthPercentage(95),height:heightPercentage(60),margin:7,paddingLeft:4,flexDirection:'row',backgroundColor:backgroundColor1,borderRadius:12}} onPressIn={()=>{setBackgroundColor1('#D9D9D9')}} >
                                <Image source={require('../../assets/images/location.png')} style={{width:widthPercentage(11),height:heightPercentage(12),top:14}} />
                                <Text style={{textAlign:'center',padding:5,color:'#374957',fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),width:widthPercentage(80),right:2,top:7}}>{appointment[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:widthPercentage(95),height:heightPercentage(60),margin:7,paddingLeft:4,flexDirection:'row',backgroundColor:backgroundColor2,borderRadius:12}} onPressIn={()=>{setBackgroundColor2('#D9D9D9')}} >
                                <Image source={require('../../assets/images/location.png')} style={{width:widthPercentage(11),height:heightPercentage(12),top:14}} />
                                <Text style={{textAlign:'center',padding:5,color:'#374957',fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),width:widthPercentage(80),right:2,top:7}}>{appointment[0]}</Text>
                        </TouchableOpacity>
                        </View>

                    <TouchableOpacity style={{marginTop:15,marginBottom:20,width:widthPercentage(135),height:heightPercentage(43),alignSelf:'center',backgroundColor:backgroundColor3,borderRadius:12}}  onPressIn={()=>{setBackgroundColor3('#D9D9D9')}}>
                        <Text style={{textAlign:'center',alignItems:'center',color:'#374957',fontFamily:'Noto Sans KR',fontSize:fontPercentage(12),fontWeight:'400',paddingTop:11}}>기타 시간대 요청하기</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{marginBottom:13,flexDirection:'row',backgroundColor:'#FFF0A1',width:widthPercentage(142),height:heightPercentage(43),borderRadius:21.5,alignSelf:'center',
                    ...Platform.select({android:{elevation:3}})}}
                    onPress={()=>{setModalVisible1(false); setModalVisible2(true)}} >
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
        color:'#374957',
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

export default ChooseTime;