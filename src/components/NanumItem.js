import React from "react";
import { View,Text ,StyleSheet, SafeAreaView,Image,ScrollView,Platform} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Nanumitem=({title,place,createdTime,hastag,like})=>{
    return(
        <SafeAreaView style={{flex:1,marginLeft:10,marginRight:10}} >
                <View style={{paddingBottom:8,borderBottomWidth:1, borderBottomColor:'#D9D9D9'}}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={{position:'absolute',right:21,top:37.5,fontFamily:'Noto Sans KR',fontSize:13,fontWeight:'700',color:'#374957'}}>{like}</Text>
                    <Image source={require("../assets/images/like.png")} style={{position:'absolute', top:40,right:0,width:15,height:15}} />
                    </View>
                    <Text style={{fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:11,padding:1,color:'rgba(55, 73, 87, 0.5)'}}> {place} &nbsp; {createdTime } </Text> 
                    <Text style={styles.hastag}> {hastag}</Text>
                    <ScrollView horizontal={true} style={{flexDirection:'row', paddingBottom:3}}>
                        <Image source={require("../assets/images/carrotEx1.jpeg")} style={styles.imgbox} />
                        <Image source={require("../assets/images/breadEx1.jpeg")} style={styles.imgbox} />
                        <Image source={require("../assets/images/jamEx1.jpeg")} style={styles.imgbox} />
                        <Image source={require("../assets/images/jamEx2.jpeg")} style={styles.imgbox} />
                    </ScrollView>
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
        color:'#374957'
    },
    hastag:{
        position:'relative',
        color:'#374957',
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
        borderWidth:1,
        marginLeft:3,
        borderColor:'lightgray',
        ...Platform.select({
            android:{
                elevation:5
            }
        })
        
    }
})

export default Nanumitem;