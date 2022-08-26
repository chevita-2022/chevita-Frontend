import React, { useState } from "react";
import { Text, Image, StyleSheet, TouchableOpacity,View, Pressable} from "react-native";
import { heightPercentage,fontPercentage,widthPercentage } from "../../ResponsiveSize";
import Modal from "react-native-simple-modal";

const ChooseTime=()=>{

    const [open,setOpen]=useState(false);
    const [offset,seOffset]=useState();

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
            <Modal offset={offset} open={open===true} modalDidClose={()=>{setOpen(false)}} modalStyle={{borderRadius:12}}>
                <Text> 예약 시간을 선택해주세요</Text>
                    <TouchableOpacity>
                        <View>
                            <Text>8월 26일 7시</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text>8월 26일 7시</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text>8월 26일 7시</Text>
                        </View>
                    </TouchableOpacity>
                    <Text> &nbsp; </Text>
                    <TouchableOpacity>
                    <Text>나눔 예약</Text>
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
    }
})

export default ChooseTime;