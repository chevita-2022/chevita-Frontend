import React, { useState, useCallback, useEffect } from 'react'
import { Image, Platform, SafeAreaView, ScrollView, View,Text, TouchableOpacity,StyleSheet } from 'react-native';
import { GiftedChat,Bubble,InputToolbar, Send } from 'react-native-gifted-chat'
import { fontPercentage, heightPercentage, widthPercentage } from '../../ResponsiveSize';
import Modal from "react-native-modal";
import { BackBtn } from '../../components/Button';
import { ProgressBarForVital } from '../../components/ProgressBar';
import { ReviewInput } from '../../components/Input';


const ChattingBubble = () => 
{
  const [messages, setMessages] = useState([]);

  const [reserveModal,setReserveModal]=useState(false);
  const [nanumState,setNanumState]=useState(false);
  const [review,setReview]=useState(false);

  const [isMounted, setIsMounted] = useState(false);
  const [value,setValue]=useState('');

  const handleChange = (name, value) => {
    setIsMounted(true);
    setValue({
      ...value, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
    console.log(value)
};

  useEffect(() => {
      return () => setIsMounted(false);
  },[])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Devleoper',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      sent:true
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderBubble = (props) => {
    return (
      <>
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: 'rgba(255, 240, 161, 0.2)',
            borderRadius:12,
            ...Platform.select({
              android:{ elevation:1 },
              ios:{ shadowColor:'rgba(0, 0, 0, 0.25)' }
            }),
            marginRight:15,
            marginBottom:5,
            padding:5
          },
          left: {
            backgroundColor: '#FFFFFF',
            borderRadius:12,
            ...Platform.select({
              android:{ elevation:2, },
              ios:{ shadowColor:'rgba(0, 0, 0, 0.25)', }
            }),
            margin:10,
            padding:5
          },
        }}
        textStyle={{
          right: { color: '#151515', },
          left:{ color: '#151515', },
        }}
      />
      </>
    );
  };

  const renderInputToolbar=(props)=>{
    return(
      <InputToolbar 
        {...props}
        containerStyle={{
          borderRadius:17.5,
          backgroundColor:'#ffffff',
          //width:widthPercentage(353),
          //left:20,
          //height:heightPercentage(42),
          //marginBottom:5,
          ...Platform.select({
            android:{ elevation:3  },
            ios:{ shadowColor:'rgba(0, 0, 0, 0.25)'}
          })
        }}
        accessoryStyle={{ backgroundColor:'#ffffff' }}
      />
    )
  }

  const renderSend=(props)=>{
    return(
      <Send {...props} containerStyle={{backgroundColor:'#FFF0A1',width:42,height:42,top:-1,borderRadius:100,left:3}}>
        <Image source={require('../../assets/images/messageSend.png')} style={{width:15, height:15,borderWidth:1.5,top:-12,left:12}}/>
      </Send>
    )
  }

  /*const AssignReserve=()=>{
    return(
      <View style={{flexDirection:'row', height:heightPercentage(73),backgroundColor:'#ffffff'}}>
      <TouchableOpacity style={style.container} onPress={()=>setReserveModal(true)}>
          <Text style={style.text}>예약 승인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.container}>
          <Text style={style.text}>나눔 완료</Text>
      </TouchableOpacity>
  </View>
    )
  }*/

  return (
    <>
    <View style={{flexDirection:'row',width:widthPercentage(100000),backgroundColor:'#ffffff'}}>
          <TouchableOpacity style={style.container} onPress={()=>setReserveModal(true)} >
            <Text style={style.text}>예약 승인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.container} onPress={()=>setNanumState(true)}  >
            <Text style={style.text}>나눔 완료</Text>
          </TouchableOpacity>
          {nanumState===true ? 
            <TouchableOpacity style={style.container1}  onPress={()=>setReview(true)}>
              <Text style={style.text}>후기 작성</Text>
            </TouchableOpacity>
        :
        <></>}
        </View>

        {/* 채누미가 예약 승인 눌렀을 때 모달창 */}
        <Modal isVisible={reserveModal} modalStyle={{borderRadius:12,backgroundColor:'#ffffff',zIndex:1050}} useNativeDriver={true}>
          <View style={{backgroundColor:'#ffffff',borderRadius:12,width:widthPercentage(334),height:heightPercentage(105),alignContent:'center'}}>
            <Text style={{color:'#151515',fontWeight:'700',fontSize:fontPercentage(12),alignSelf:'center',padding:13,paddingTop:25}}> 채누미는 예약 승인이 불가합니다 </Text>
            <Text style={{color:'#151515',fontWeight:'400',fontSize:fontPercentage(10),alignSelf:'center',paddingBottom:15}}> 예약 확정 유무가 채팅으로 전송되니 조금만 기다려주세요 </Text>
          </View>
          <TouchableOpacity style={{position:'absolute',top:heightPercentage(10)}} onPress={()=>setReserveModal(false)}>
            <Image source={require('../../assets/images/back-btn-white.png')} style={{width:widthPercentage(25),heigh:heightPercentage(20),margin:10}} />
            </TouchableOpacity>
        </Modal>

        {/* 나눔 완료 눌렀을 때 모달창 */}
        <Modal isVisible={review} modalStyle={{borderRadius:12,backgroundColor:'#ffffff'}} useNativeDriver={true}>
          <View style={{backgroundColor:'#ffffff',borderRadius:12,width:widthPercentage(340),height:heightPercentage(303),alignContent:'center'}}>
            <Text style={{alignSelf:'center',paddingTop:30,width:widthPercentage(183),textAlign:'center'}}>
              <Text style={{color:'#151515',fontWeight:'700',fontSize:fontPercentage(14)}}> '세척 당근 반토막 나눔해요' </Text>
              <Text style={{color:'#151515',fontWeight:'400',fontSize:fontPercentage(14)}}> 의 나눔후기를 작성해주세요 </Text>
            </Text>
            <View style={{paddingTop:20,alignSelf:'center',marginBottom:15}}>
              <ProgressBarForVital/>
            </View>
          <ReviewInput  name='review' value={value} handleChange={handleChange} placeholder='후기를 작성해주세요. 최대 60자 작성가능'/>
          </View>
          <TouchableOpacity style={{marginTop:10}} onPress={()=>setReview(false)}>
            <Text style={{backgroundColor:'#FFEB82',width:widthPercentage(340),height:heightPercentage(48),textAlignVertical:'center',textAlign:'center',borderRadius:12,color:'#151515',fontSize:fontPercentage(12)}}>
              후기 등록</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{position:'absolute',top:heightPercentage(10)}} onPress={()=>setReserveModal(false)}>
            <Image source={require('../../assets/images/back-btn-white.png')} style={{width:widthPercentage(25),heigh:heightPercentage(20),margin:10}} />
          </TouchableOpacity>
        </Modal>

        {/* 채팅 */}
            <GiftedChat
              messages={messages}
              onSend={messages => onSend(messages)}
              user={{ _id: 1,}}
              placeholder={'| 메세지를 작성해보세요'}
              renderBubble={renderBubble}
              renderInputToolbar={renderInputToolbar}
              renderSend={renderSend}
              //locale={strings.getLanguage()}
              timeTextStyle={{
                right:{ color:'#7D7D7D',},
                left:{ color:'#7D7D7D' }
              }}
              showAvatarForEveryMessage={false}
              messagesContainerStyle={{ backgroundColor:'#ffffff'}} /> 
      </>
  )
}


const style=StyleSheet.create({
  text:{
    width:widthPercentage(93),
    height:heightPercentage(38),
    backgroundColor:'#FFF0A1',
    textAlignVertical:'center',
    textAlign:'center',
    color:'#151515',
    borderRadius:12,
    fontFamily:'Noto Sans KR',
    fontWeight:'700',
    fontSize:fontPercentage(12),
    ...Platform.select({
      android:{ elevation:3 }
    })
  },
  container:{
    paddingTop:15,
    paddingLeft:10,
    backgroundColor:'#ffffff',
    height:heightPercentage(65),
  },
  container1:{
    paddingTop:15,
    paddingLeft:10,
    backgroundColor:'#ffffff',
    height:heightPercentage(65),
    marginLeft:60
  }
})

export default ChattingBubble;