import React, { useState } from "react";
import { View,Text ,StyleSheet, SafeAreaView,Image,ScrollView,Platform, Pressable} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { fontPercentage, heightPercentage, widthPercentage } from "../ResponsiveSize";

const Nanumitem=({title,place,createdTime,hastag,like,d_day,navigation})=>{

    const [jjim,setJjim]=useState(false);

    return(
        <SafeAreaView style={{flex:1,marginLeft:10,marginRight:10}} >
                <View style={{paddingBottom:8,borderBottomWidth:1, borderBottomColor:'#D9D9D9'}}>
                    <View style={{flexDirection:'row'}}>
                
                    <Text style={styles.title}>
                        {title}
                    </Text>

                    <Text style={{position:'absolute',right:21,top:37.5,fontFamily:'Noto Sans KR',fontSize:13,fontWeight:'700',color:'#151515'}}>{like}</Text>
                    
                    {/* 찜 버튼 */}
                    <Pressable style={{position:'absolute', top:40,right:0}} onPress={()=>setJjim(true)}>
                        {
                            console.log(jjim) &&
                            jjim===false?
                            <Image source={require("../assets/images/like.png")} style={{width:15,height:15}} />
                            :
                            <Image source={require("../assets/images/fullLike.png")} style={{width:15,height:15}} />
                        }              
                    </Pressable>
                    
                    </View>
                    <Text style={{fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:11,padding:1,color:'rgba(55, 73, 87, 0.5)'}}> {place} &nbsp; {createdTime } </Text> 
                    <Text style={styles.hastag}> {hastag}</Text>
                    <ScrollView horizontal={true} style={{flexDirection:'row', paddingBottom:3}}>
                        <View style={{...Platform.select({android:{elevation:3}}),borderRadius:15}}>
                            <Image source={require("../assets/images/carrotEx1.jpeg")} style={styles.imgbox} />
                        </View>
                        <View style={{...Platform.select({android:{elevation:3}}),borderRadius:15}}>
                            <Image source={require("../assets/images/breadEx1.jpeg")} style={styles.imgbox} />
                        </View>
                        <View style={{...Platform.select({android:{elevation:3}}),borderRadius:15}}>
                            <Image source={require("../assets/images/jamEx1.jpeg")} style={styles.imgbox} />
                        </View>
                        <View style={{...Platform.select({android:{elevation:3}}),borderRadius:15}}>
                            <Image source={require("../assets/images/jamEx2.jpeg")} style={styles.imgbox} />
                        </View>
                    </ScrollView>
                    <View style={{padding:5,flexDirection:'row'}}>
                        <Image source={require('../assets/images/clock.png')} style={{height:heightPercentage(16),width:widthPercentage(15)}} />
                        <Text style={{marginLeft:8,color:'#151515',fontFamily:'Noto Sans KR',fontSize:fontPercentage(12),fontWeight:'700'}}>D-{d_day}</Text>
                    </View>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title:{
        position: 'relative',
       //width: 152,
        height: 33,
        left: 5,
        top: 10,
        fontFamily: 'Noto Sans KR',
        fontStyle:'normal',
        fontSize: 15,
        fontWeight:'900',
        color:'#151515'
    },
    hastag:{
        position:'relative',
        color:'#151515',
        fontFamily: 'Noto Sans KR',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize:11,
        padding:1,
        paddingBottom:4
    },
    imgbox:{
        width:110, 
        height:104,
        borderRadius:15,
        overflow: 'hidden',
        marginRight:2
        
    }
})

export default Nanumitem;