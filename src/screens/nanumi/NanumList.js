import React, {useEffect, useState} from "react";
import { Text,StyleSheet, ScrollView, SafeAreaView,View, Pressable,Image, Platform} from "react-native";
import Nanumitem from "../../components/NanumItem";
import DropDownPicker from 'react-native-dropdown-picker';
import { heightPercentage,widthPercentage,fontPercentage } from "../../ResponsiveSize";

const NanumList = ({navigation}) => {

    const [data,setData]=useState([]);
    const path="http://chaevita0912-env.eba-2hjzekep.ap-northeast-2.elasticbeanstalk.com/posts";
    fetch(path).then((res)=>res.json()).then((response)=> setData(response.data));

    let item2=[...data];
    let item3=[...data];

    const [open,setOpen]=useState(false);
    const [value,setValue]=useState(null);
    const [items,setItems]=useState([
        {label:'최신순',value:'default'},
        {label:'인기순',value:'popular'},
        {label:'나눔 임박순',value:'lank'},
    ]);

    //좋아요 수 많은 순으로 정렬
    for(var i=0;i<data.length;i++){
        item2.sort(function(a,b){
            if(a.totalHearts-b.totalHearts>0){
                return a<b;
            }
        });
    }

    // 나눔 임박한순으로 정렬
    for(var i=0;i<data.length;i++){
        item3.sort(function(a,b){
            if(a.expirationDate-b.expirationDate<0){
                return a<b;
            }
        });
    }

    return(
        <SafeAreaView style={{backgroundColor:'#fff',flex:1}}>
            <Text style={{fontFamily:'Noto Sans KR',fontSize:fontPercentage(16),fontWeight:'700',color:'#151515',paddingLeft:11,paddingVertical:0,top:23,height:heightPercentage(60),}}>김탁구님 주변 인기 나눔글</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="최신순" placeholderStyle={{color:'#151515',fontWeight:'700',textAlign:'right',fontSize:fontPercentage(12)}}
                style={{borderColor:'#fff'}} textStyle={{color:'#151515',textAlign:'center'}}
                containerStyle={{
                    position:'absolute',
                    width:widthPercentage(141),
                    height:heightPercentage(99),
                    right:5,
                    top:10,
                }} 
                dropDownContainerStyle={{borderRadius:17,borderColor:'lightgray',width:widthPercentage(125),right:5}}
                labelStyle={{color:'#151515',textAlign:'right',fontWeight:'700',fontSize:fontPercentage(12),}}
                />
            <ScrollView>
                { value==='popular' ?
                    <View> 
                        {item2.map(item=>(
                            <Nanumitem postId={item.postId} title={item.title} place={item.location} createdTime={item.createdAt} hastag={item.hastag} like={item.totalHearts} d_day={item.expirationDate} />
                        ))}
                    </View>
                :
                (
                    value==='default' ?
                    <View> 
                        {data.reverse().map(item=>(
                            <Nanumitem postId={item.postId} title={item.title} place={item.location} createdTime={item.createdAt} hastag={item.hastag} like={item.totalHearts} d_day={item.expirationDate} />
                        ))}
                    </View>
                    :
                    <View>
                        {item3.map(item=>(
                            <Nanumitem postId={item.postId} title={item.title} place={item.location} createdTime={item.createdAt} hastag={item.hastag}  like={item.totalHearts} d_day={item.expirationDate} />
                        ))}
                    </View>
                )
                }   
            </ScrollView>
            <Pressable 
                style={{position:'absolute',top:580,paddingBottom:10,alignItems:'center',backgroundColor:'#FFF0A1',height:heightPercentage(43),width:widthPercentage(152),left:122,flexDirection:'row',borderRadius:21.5,
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