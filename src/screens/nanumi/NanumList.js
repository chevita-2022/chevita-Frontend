import React, {useEffect, useState} from "react";
import { Text,StyleSheet, ScrollView, SafeAreaView,View, Pressable,Image, Platform} from "react-native";
import Nanumitem from "../../components/NanumItem";
import DropDownPicker from 'react-native-dropdown-picker';
import { heightPercentage,widthPercentage,fontPercentage } from "../../ResponsiveSize";

const item=[
    {
        id:1,
        title:'세척 당근 반토막 나눔해요',
        location: '서대문구 연희동',
        createdTime:'15분전',
        hastag:'#채소류 #당근',
        time:'8월 26일 7,8,18시',
        like:31,
        d_day:2,
    },
    {
        id:2,
        title:'식빵 반봉지 나눔해요',
        location: '서대문구 연희동',
        createdTime:'15분전',
        hastag:'#베이커리류 #식빵',
        time:'8월 26일 7,8,18시',
        like:10,
        d_day:17,
    },
    {
        id:3,
        title:'딸기잼이랑 누텔라 교환 원해요',
        location: '서대문구 북아현동',
        createdTime:'30분전',
        hastag:'#채소류 #당근',
        time:'시간대 상관없음',
        like:29,
        d_day:29,
    },
    {
        id:4,
        title:'양파 반쪽 나눔합니다~',
        location: '서대문구 대현동',
        createdTime:'45분전',
        hastag:'#채소류 #양파',
        time:'8월 26일 11시',
        like:2,
        d_day:23,
    },
];

const NanumList = ({navigation}) => {

    const [open,setOpen]=useState(false);
    const [value,setValue]=useState(null);
    const [items,setItems]=useState([
        {label:'최신 등록순',value:'default'},
        {label:'인기순',value:'popular'},
        {label:'나눔 임박순',value:'lank'},
    ]);

    return(
        <SafeAreaView style={{backgroundColor:'#fff',flex:1}} 
        >
            <Text style={{fontFamily:'Noto Sans KR',fontSize:fontPercentage(17),fontWeight:'700',color:'#151515',paddingLeft:11,paddingVertical:0,top:23,height:heightPercentage(60),}}>김탁구님 주변 인기 나눔글</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="최신등록순" placeholderStyle={{color:'#151515',fontWeight:'bold',textAlign:'right',fontSize:fontPercentage(13)}}
                style={{borderColor:'#fff',}} textStyle={{color:'#151515',textAlign:'center'}}
                containerStyle={{
                    position:'absolute',
                    width:widthPercentage(130),
                    height:heightPercentage(50),
                    right:5,
                    top:10,
                }} 
                dropDownContainerStyle={{borderRadius:17,borderColor:'lightgray',width:widthPercentage(125),right:5,shadowOffset:{height:heightPercentage(2),width:widthPercentage(2)},shadowOpacity:0.25}}
                labelStyle={{color:'#151515',textAlign:'right',fontWeight:'bold',fontSize:fontPercentage(13)}}
                />
            <ScrollView>
                    <Pressable onPress={()=>{navigation.navigate('NanumDetail')}}>
                        {item.map(item=>(
                            <Nanumitem title={item.title} place={item.location} createdTime={item.createdTime} hastag={item.hastag} appointment={item.time} like={item.like} d_day={item.d_day} />
                        ))}
                    </Pressable>
            </ScrollView>
            <Pressable 
                style={{position:'absolute',top:620,paddingBottom:10,alignItems:'center',backgroundColor:'#FFF0A1',height:heightPercentage(43),width:widthPercentage(152),left:122,flexDirection:'row',borderRadius:21.5,
                    ...Platform.select({android:{elevation:3}})}} 
                    onPress={()=>{navigation.navigate('WriteNanum')}}>
                <Image source={require('../../assets/images/pen.png')} style={{width:widthPercentage(21),height:heightPercentage(20),marginLeft:27,marginRight:-15,marginTop:9}} />
                <Text style={textstyle.write}>나눔글 작성</Text>
            </Pressable>
        </SafeAreaView>
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
    }
})

export default NanumList;