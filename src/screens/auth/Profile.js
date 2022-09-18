import React, { useState ,useEffect} from "react";
import { SafeAreaView,Text,StyleSheet,Image,View,TouchableOpacity, Button,Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { setGestureState } from "react-native-reanimated/lib/reanimated2/NativeMethods";
import ImagePicker from "../../components/ImagePicker";
import { NicknameInput, PlaceInput } from "../../components/Input";
import { fontPercentage,widthPercentage,heightPercentage } from "../../ResponsiveSize";

const Profile=({navigation, route})=>{

    const {token} = route.params;

    const [nickname,setNickname]=useState('');
    const [alert,setAlert]=useState('');
    const [isMounted, setIsMounted] = useState(false);
    const [token1,setToken1]=useState();
    const [value, setValue] = useState();
    const [user,setUser]=useState();

    const handleChange = (value) => {
        setIsMounted(true);
        setNickname(value);
    };

    useEffect(() => {
        return () => setIsMounted(false);
    },[])

    useEffect(()=>{
        console.log(route.params)
        if(route.params?.token && true){
            setToken1(token)
        }
        if(route.params?.address && true){
            setValue(route.params.address );
        } 
    },[route.params])

    const sendUserId=()=>{
        fetch("http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/user",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                "profileImgUrl": "",
                "userAddress": value,
                "token": token1,
                "userNickName": nickname,
            })
        }).then(res=>res.json()).then(res=>setUser(res))
    }


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
            <TouchableOpacity style={styles.btn.container} onPress={() => navigation.navigate('WriteAdress', {type: "profile"})}>
                <Text style={styles.btn.text}>{value ? value : '눌러서 주소를 입력해 주세요.'}</Text>
                <Image source={require('../../assets/images/search.png')} style={styles.btn.image}/>
            </TouchableOpacity>

            <Text style={{color:'#7D7D7D',fontSize:fontPercentage(10),fontWeight:'400',fontFamily:'Noto Sans KR'}}>검색어에 아래와 같은 조합을 이용하시면 더욱 정확한 결과가 검색됩니다.</Text>
            <Text style={{color:'#7D7D7D',fontSize:fontPercentage(10),fontWeight:'bold',fontFamily:'Noto Sans KR',paddingTop:5}}>'도로명+건물번호', '지역명+지번', '지역명+건물명(아파트명)', {'\n'} '사서함명+번호'</Text>

            <Text style={{color:'#151515',fontSize:fontPercentage(12),fontWeight:'500',fontFamily:'Noto Sans KR',top:heightPercentage(100),left:widthPercentage(260)}} onPress={()=>{navigation.navigate('MainScreen'); sendUserId();}}>가입 완료 {'>'}</Text>
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
  })

export default Profile;