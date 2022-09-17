import React, { useState ,useEffect} from "react";
import { SafeAreaView,Text,StyleSheet,Image,View,TouchableOpacity, Button,Pressable, KeyboardAvoidingView, Platform } from "react-native";
import ImagePicker from "../../components/ImagePicker";
import { NicknameInput } from "../../components/Input";
import { fontPercentage,widthPercentage,heightPercentage } from "../../ResponsiveSize";

const Profile=({navigation})=>{

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
       <SafeAreaView style={{flex:1,backgroundColor:'#ffffff',paddingHorizontal:32,paddingTop:50}}>
            <Text style={styles.title1}>Let's chaevita!</Text>
            <Text style={styles.title2}>계정 설정</Text>

            <Image source={require('../../assets/images/point.png')} style={styles.point} />
            <Text style={styles.question}>프로필 사진을 설정해주세요</Text>
            <ImagePicker type="profile2" />

            <Image source={require('../../assets/images/point.png')} style={styles.point} />
            <Text style={styles.question}>닉네임을 설정해주세요</Text>
            <NicknameInput name='nickname' value={nickname} handleChange={handleChange}/>
            <Text style={{right:-273,color:'#767676',fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),paddingTop:3}}>최대 12자</Text>
           
            <View style={{padding:10}} />

            <Image source={require('../../assets/images/point.png')} style={styles.point} />
            <Text style={styles.question}>동네위치를 설정해주세요</Text>

            <Text style={{color:'#7D7D7D',fontSize:fontPercentage(10),fontWeight:'400',fontFamily:'Noto Sans KR'}}>검색어에 아래와 같은 조합을 이용하시면 더욱 정확한 결과가 검색됩니다.</Text>
            <Text style={{color:'#7D7D7D',fontSize:fontPercentage(10),fontWeight:'bold',fontFamily:'Noto Sans KR',paddingTop:5}}>'도로명+건물번호', '지역명+지번', '지역명+건물명(아파트명)', {'\n'} '사서함명+번호'</Text>

            <Text style={{color:'#151515',fontSize:fontPercentage(12),fontWeight:'500',fontFamily:'Noto Sans KR',top:heightPercentage(100),left:widthPercentage(260)}} onPress={()=>navigation.navigate('MainScreen')}>가입 완료 {'>'}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title1:{
        fontSize:fontPercentage(24),
        fontFamily:'Alata-Regular',
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

export default Profile;