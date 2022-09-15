import React, { useState ,useEffect} from "react";
import { SafeAreaView,Text,StyleSheet,Image,View,TouchableOpacity, Button,Pressable, KeyboardAvoidingView, Platform } from "react-native";
import ImagePicker from "../../components/ImagePicker";
import { NicknameInput } from "../../components/Input";
import { fontPercentage,widthPercentage,heightPercentage } from "../../ResponsiveSize";

const Nickname=({navigation})=>{

  
    const [nickname,setNickname]=useState('');
    const [alert,setAlert]=useState('');
    const [isMounted, setIsMounted] = useState(false);

    const handleChange = (value) => {
        setIsMounted(true);
        setNickname(value);
    };

    useEffect(() => {
        return () => setIsMounted(false);
    },[])

    return(
       <SafeAreaView style={{flex:1,backgroundColor:'#ffffff',padding:50}}>
            <Text style={styles.title1}>Let's chaevita!</Text>
            <Text style={styles.title2}>계정 설정</Text>

            <Image source={require('../../assets/images/point.png')} style={styles.point} />
            <Text style={styles.question}>프로필 사진을 설정해주세요</Text>
            <ImagePicker type="profile2" />

            <Image source={require('../../assets/images/point.png')} style={styles.point} />
            <Text style={styles.question}>닉네임을 설정해주세요</Text>
            <NicknameInput name='nickname' value={nickname} handleChange={handleChange}/>
            <Text style={{right:-240,color:'#767676',fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),paddingTop:3}}>최대 12자</Text>
           
            <View style={{padding:10}} />

            <Image source={require('../../assets/images/point.png')} style={styles.point} />
            <Text style={styles.question}>동네위치를 설정해주세요</Text>

          { /* <View style={PlaceInputStyles.container}>
            <TouchableOpacity style={PlaceInputStyles.btn.container} onPress={() => navigation.navigate('WriteAdress')}>
                <Text style={PlaceInputStyles.btn.text}>{value ? value : '눌러서 주소를 입력해 주세요.'}</Text>
                <Image source={require('../../assets/images/search.png')} style={PlaceInputStyles.btn.image}/>
            </TouchableOpacity>
            </View>*/}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title1:{
        fontSize:fontPercentage(24),
        fontWeight:'700',
        color: '#151515',
    },
    title2:{
        fontSize:fontPercentage(16),
        fontWeight:'700',
        color:'#151515',
        marginBottom:15
    },
    point:{
        marginTop:10,
        width:widthPercentage(5),
        height:heightPercentage(5)
    },
    question:{
        padding:5,
        color:'#151515',
        marginBottom:15,
    }
  })

  const PlaceInputStyles = StyleSheet.create({
    container:{
        width: widthPercentage(317),
        marginBottom: heightPercentage(22)
    },
    btn:{
        container:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: heightPercentage(43),
            paddingHorizontal: widthPercentage(15),
            marginBottom: heightPercentage(10),
            borderRadius: 12,
            backgroundColor: '#FAFAFA',
            borderColor: "#FAFAFA",
            borderRadius: 12,
            ...Platform.select({
                ios: {
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 1,
                        height: 1,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 6,
                },
                android: {
                    elevation: 3,
                },
            }),
        },
        text:{
            fontSize: fontPercentage(14),
            color: '#151515'
        },
        image:{
            width: widthPercentage(17),
            height: heightPercentage(17),
            resizeMode: 'stretch',
        }
    },
    input:{
        alignItems: 'center',
        width: '100%',
        height: heightPercentage(30),
        paddingLeft: widthPercentage(15),
        padding: 0,
        margin:0,
        borderBottomWidth: 2,
        borderBottomColor: "#D9D9D9",
        color: "#151515",
    }
})

export default Nickname;