import React, { useState } from "react";
import { Text, Image, StyleSheet, TouchableOpacity,View, Pressable} from "react-native";
import { heightPercentage,fontPercentage,widthPercentage } from "../../ResponsiveSize";
import Modal from "react-native-simple-modal";

const ChooseTime=({appointment})=>{

    const [open,setOpen]=useState(false);
    const [offset,seOffset]=useState();
    const [backgroundColor,setBackgroundColor]=useState('#ffffff');

    const onPressedIn=()=>{
        setBackgroundColor('#D9D9D9');
    }
    const onPressedOut=()=>{
        setBackgroundColor('#ffffff');
    }

    return(
        <>
            {/* 나눔 예약 버튼 */}
            <TouchableOpacity 
                style={{position:'absolute',top:660,paddingBottom:10,alignItems:'center',backgroundColor:'#FFF0A1',height:heightPercentage(43),width:widthPercentage(152),left:122,flexDirection:'row',borderRadius:21.5,
                    ...Platform.select({android:{elevation:3}})}} 
                    onPress={()=>{setOpen(true)}}>
                <Image source={require('../../assets/images/calender.png')} style={{width:widthPercentage(20),height:heightPercentage(20),marginLeft:27,marginRight:-15,marginTop:9}} />
                <Text style={textstyle.write}>나눔 예약</Text>
            </TouchableOpacity>

            {/*모달창*/}
            <Modal offset={offset} open={open===true} modalDidClose={()=>{setOpen(false)}} modalStyle={{borderRadius:12,backgroundColor:'#ffffff'}}>
                <Text style={{padding:14,textAlign:'center',color:'#374957',fontWeight:'700',fontFamily:'Noto Sans KR',fontSize:fontPercentage(13)}}> 나눔 예약 시간대를 선택해주세요</Text>
                    <View style={{flexDirection:'row'}}>
                        {appointment.map((time)=>(
                            <TouchableOpacity style={{width:widthPercentage(95),height:heightPercentage(60),margin:7,paddingLeft:4,flexDirection:'row',backgroundColor:backgroundColor,borderRadius:12}}>
                                <Image source={require('../../assets/images/location.png')} style={{width:widthPercentage(11),height:heightPercentage(12),top:14}} />
                                <Text style={{textAlign:'center',padding:5,color:'#374957',fontFamily:'Noto Sans KR',fontSize:fontPercentage(11),width:widthPercentage(80),right:2,top:7}} onPress={onPressedIn}>{time}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity style={{marginTop:15,marginBottom:20,width:widthPercentage(135),height:heightPercentage(43),alignSelf:'center',backgroundColor:backgroundColor,borderRadius:12}} onPress={onPressedIn} onPressOut={onPressedOut}>
                        <Text style={{textAlign:'center',alignItems:'center',color:'#374957',fontFamily:'Noto Sans KR',fontSize:fontPercentage(12),fontWeight:'400',paddingTop:11}}>기타 시간대 요청하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom:13,flexDirection:'row',backgroundColor:'#FFF0A1',width:widthPercentage(142),height:heightPercentage(43),borderRadius:21.5,alignSelf:'center',
                    ...Platform.select({android:{elevation:3}})}}>
                        <Image source={require('../../assets/images/calender.png')} style={{width:widthPercentage(20),height:heightPercentage(20),marginLeft:30,marginRight:-18,marginTop:10}} />
                        <Text style={textstyle.reserve}>예약하기</Text>
                    </TouchableOpacity>
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