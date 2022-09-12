import React, { useState } from "react";
import { TouchableOpacity, View,Text,StyleSheet,Platform } from "react-native";
import { heightPercentage,widthPercentage,fontPercentage } from "../../ResponsiveSize";
import Modal from "react-native-simple-modal";

const AssignReserve=({props_ModalOpen})=>{
    const [ModalOpen,setModalOpen]=useState(props_ModalOpen);

    return(
        <>
        {/* 예약 승인 시 모달창 */}
        <Modal open={ModalOpen} modalDidClose={()=>{setModalOpen(false)}} modalStyle={{borderRadius:12,backgroundColor:'#ffffff'}} useNativeDriver={true}>
            <Text> 모달 </Text>
        </Modal>
        </>
    )
}

const style=StyleSheet.create({
    text:{
      width:widthPercentage(93),
      height:heightPercentage(38),
      backgroundColor:'#FFF0A1',
      textAlignVertical:'center',
      textAlign:'center',
      color:'#151515',
      borderRadius:12,
      fontFamily:'Noto Sans KR',
      fontWeight:'700',
      fontSize:fontPercentage(12),
      ...Platform.select({
        android:{
          elevation:3
        }
      })
    },
    container:{
      paddingTop:15,
      paddingLeft:10
    }
  })

export default AssignReserve;