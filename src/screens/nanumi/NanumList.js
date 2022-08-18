import React, {useEffect, useState} from "react";
import { Text,StyleSheet, ScrollView, SafeAreaView,View, Pressable, Button} from "react-native";
import Nanumitem from "../../components/NanumItem";
import DropDownPicker from 'react-native-dropdown-picker';

const NanumList = ({navigation}) => {

    const [open,setOpen]=useState(false);
    const [value,setValue]=useState(null);
    const [items,setItems]=useState([
        {label:'기본순',value:'default'},
        {label:'인기순',value:'popular'},
        {label:'랭킹순',value:'lank'},
    ]);

    return(
        <SafeAreaView style={{backgroundColor:'#fff',flex:1}} 
        >
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="기본순" placeholderStyle={{color:'#374957',fontWeight:'bold',textAlign:'center'}}
                style={{borderColor:'#fff'}} textStyle={{color:'#374957',textAlign:'center'}}
                containerStyle={{
                    width:95,
                    paddingTop:6,
                    left:'70%',
                }} 
                dropDownContainerStyle={{borderRadius:17,borderColor:'lightgray',shadowOffset:{height:2,width:2},shadowOpacity:0.25}}
                labelStyle={{color:'#374957',textAlign:'center',fontWeight:'bold',}}
                />
            <ScrollView style={{backgroundColor:'#fff'}}>
                <Nanumitem />
            </ScrollView>
            <Pressable style={{paddingBottom:10,alignItems:'center',backgroundColor:'transparent'}} onPress={()=>{navigation.navigate('WriteNanum')}}>
                    <Text style={styles.write}>나누미 글 작성하기</Text>
            </Pressable>
        </SafeAreaView>
    )

}

const styles=StyleSheet.create({
    write:{
        textAlign:'center',
        height:43,
        width:240,
        backgroundColor:'#FFF0A1',
        borderRadius:21.5,
        paddingTop:10,
        fontSize:16,
        fontWeight:'700',
        color:'#374957',
        fontFamily:'Noto Sans KR',
        fontStyle:'normal',
    }
})

export default NanumList;