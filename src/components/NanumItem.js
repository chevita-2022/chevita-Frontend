import React from "react";
import { View,Text ,StyleSheet, SafeAreaView,Image,ScrollView,Platform} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const item=[
    {
        key:1,
        title:'세척 당근 반토막 나눔해요',
        location: '서대문구 연희동',
        createdTime:'15분전',
        hastag:'#채소류 #당근',
        time:'8월 26일 7,8,18시'
    },
    {
        key:2,
        title:'식빵 반봉지 나눔해요',
        location: '서대문구 연희동',
        createdTime:'15분전',
        hastag:'#베이커리류 #식빵',
        time:'8월 26일 7,8,18시'
    },
    {
        key:3,
        title:'딸기잼이랑 누텔라 교환 원해요',
        location: '서대문구 북아현동',
        createdTime:'30분전',
        hastag:'#채소류 #당근',
        time:'시간대 상관없음'
    },
    {
        key:4,
        title:'양파 반쪽 나눔합니다~',
        location: '서대문구 대현동',
        createdTime:'45분전',
        hastag:'#채소류 #양파',
        time:'8월 26일 11시'
    },
];

const Nanumitem=()=>{
    return(
        <SafeAreaView>
            {item.map((i)=>(
                <View key={i.key} style={{paddingLeft:11,paddingRight:11,paddingBottom:8,borderBottomWidth:1, borderBottomColor:'#D9D9D9'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={styles.title}>
                        {i.title}
                    </Text>
                    <Icon name="heart-outline" size={20} style={{position:'absolute', top:21}} />
                    </View>
                    <Text style={{paddingBottom:15, fontSize:13}}>
                        <Text style={{paddingLeft:30}}> {i.location} &nbsp; {i.createdTime } </Text> 
                        <Text style={styles.hastag}> &nbsp; {i.hastag}</Text>
                    </Text>
                    <ScrollView horizontal={true} style={{flexDirection:'row', paddingBottom:3}}>
                        <Image source={require("../assets/images/carrotEx1.jpeg")} style={styles.imgbox} />
                        <Image source={require("../assets/images/breadEx1.jpeg")} style={styles.imgbox} />
                        <Image source={require("../assets/images/jamEx1.jpeg")} style={styles.imgbox} />
                        <Image source={require("../assets/images/jamEx2.jpeg")} style={styles.imgbox} />
                    </ScrollView>
                    <Text>{i.time}</Text>
                </View>
            )) 
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title:{
        position: 'relative',
       //width: 152,
        height: 45,
        left: 5,
        top: 24,
        fontFamily: 'Noto Sans KR',
        fontStyle:'normal',
        fontSize: 15,
        lineHeight: 17,
        fontWeight:'900',
        color:'#374957'
    },
    hastag:{
        position:'relative',
        color:'#374957',
        fontFamily: 'Noto Sans KR',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 17,
        paddingRight:10,
        paddingLeft:30
    },
    imgbox:{
        width:110, 
        height:104,
        borderRadius:15,
        overflow: 'hidden',
        borderWidth:1,
        marginLeft:3,
        borderColor:'lightgray',
        /*elevationLow:{
            ...Platform.select({
                ios:{
                    shadowOffset:{height:2,width:0},
                    shadowColor:'rgba(0, 0, 0, 0.25)',
                    shadowRadius:3.84,
                    shadowOpacity:0.25,
                },
                android:{
                    elevation:3,
                },
            })
        }*/
        
    }
})

export default Nanumitem;