import React, { useState ,useEffect} from "react";
import { SafeAreaView,Text,StyleSheet,Image,View,TouchableOpacity, Button } from "react-native";
import { NicknameInput } from "../../components/Input";
import { fontPercentage,widthPercentage,heightPercentage } from "../../ResponsiveSize";

const Nickname=({navigation})=>{

    const [isMounted, setIsMounted] = useState(false);
    const [nickname,setNickname]=useState('');
    const [alert,setAlert]=useState('');

    const handleChange = (value) => {
        setIsMounted(true);
        setNickname(value);
    };

    useEffect(() => {
        return () => setIsMounted(false);
    },[])

    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#ffffff',padding:50}}>
            <Text style={{position:'absolute',top:130,padding:50}}>
                <Text style={{fontSize:fontPercentage(20),fontFamily:'Noto Sans KR',fontWeight:'700',color:'rgba(0,0,0,0.8)'}}>닉네임</Text>
                <Text style={{fontSize:fontPercentage(13),fontFamily:'Noto Sans KR',fontWeight:'400',color:'rgba(0,0,0,0.8)'}}>을 설정해주세요</Text>
            </Text>
            <View style={{top:450}}>
                <NicknameInput name='nickname' value={nickname} handleChange={handleChange}/>
                <Text style={{right:-240,color:'#767676',fontFamily:'Noto Sans KR',fontWeight:'400',fontSize:fontPercentage(10),paddingTop:3}}>최대 12자</Text>
            </View>
        </SafeAreaView>
    )
}

export default Nickname;