import React, { useState ,useEffect} from "react";
import { SafeAreaView,Text,StyleSheet,Image,View,TouchableOpacity, Pressable, ImagePickerIOS } from "react-native";
import { fontPercentage,widthPercentage,heightPercentage } from "../../ResponsiveSize";
import {ImagePicker} from '../../components/ImagePicker'
import { ProfileImage1 } from "../../components/ProfileImage";

const Profile=({navigation})=>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#ffffff',padding:50}}>
            <Text style={{position:'absolute',top:130,padding:50,width:widthPercentage(500)}}>
                <Text style={{fontSize:fontPercentage(20),fontFamily:'Noto Sans KR',fontWeight:'700',color:'rgba(0,0,0,0.8)'}}>프로필 사진</Text>
                <Text style={{fontSize:fontPercentage(13),fontFamily:'Noto Sans KR',fontWeight:'400',color:'rgba(0,0,0,0.8)'}}>을 설정해주세요</Text>
            </Text>
            <Pressable onPress={()=>{ImagePicker()}} style={{top:240}}>
                <ProfileImage1 />
            </Pressable>
            <Pressable style={{position:'absolute',top:500,left:30,width:widthPercentage(300)}} onPress={() => navigation.navigate("MainScreen")}>
                <Text style={{right:-240,color:'#767676',fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),paddingTop:3}}>다음에 하기  {'>'} </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("PlaceAddress")}>
                <Text style={{position:'absolute',color:'#151515',fontFamily:'Noto Sans KR',fontWeight:'500',fontSize:fontPercentage(12),top:450,right:0}}>다음으로 {'>'}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Profile;