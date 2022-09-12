import React, { useState, useCallback, useEffect } from 'react'
import { Image, Platform, SafeAreaView, ScrollView, View,Text, TouchableOpacity,StyleSheet } from 'react-native';
import { GiftedChat,Bubble,InputToolbar, Send } from 'react-native-gifted-chat'
import { fontPercentage, heightPercentage, widthPercentage } from '../../ResponsiveSize';
import Modal from "react-native-simple-modal";


const ChattingBubble = () => 
{
  const [messages, setMessages] = useState([]);

  const [ReserveModal,setReserveModal]=useState(false);
  const [offset,seOffset]=useState();

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
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: 'rgba(255, 240, 161, 0.2)',
            borderRadius:12,
            ...Platform.select({
              android:{
                elevation:3
              },
              ios:{
                shadowColor:'rgba(0, 0, 0, 0.25)',
              }
            })
          },
          left: {
            backgroundColor: '#FFFFFF',
            borderRadius:12,
            ...Platform.select({
              android:{
                elevation:2,
              },
              ios:{
                shadowColor:'rgba(0, 0, 0, 0.25)',
              }
            })
          },
        }}
        textStyle={{
          right: {
            color: '#7D7D7D',
          },
          left:{
            color: '#7D7D7D',
          },
        }}
        
      />
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
            android:{
              elevation:3
            },
            ios:{
              shadowColor:'rgba(0, 0, 0, 0.25)'
            }
          })
        }}
        accessoryStyle={{
          backgroundColor:'#ffffff'
        }}
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

  return (
    <>
        {/* 예약승인, 나눔완료 버튼 */}
        <View style={{flexDirection:'row', height:heightPercentage(73),backgroundColor:'#ffffff'}}>
            <TouchableOpacity style={style.container} onPress={()=>setReserveModal(true)}>
                <Text style={style.text}>예약 승인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.container}>
                <Text style={style.text}>나눔 완료</Text>
            </TouchableOpacity>
        </View>

        {/* 채누미가 예약 승인 눌렀을 때 모달창 */}
        <Modal offset={offset} open={ReserveModal} modalDidClose={()=>{setReserveModal(false)}} modalStyle={{borderRadius:12,backgroundColor:'#ffffff',zIndex:1050}} useNativeDriver={true}>
            <Text style={{color:'#151515',fontWeight:'700',fontSize:fontPercentage(12),alignSelf:'center',padding:15}}> 채누미는 예약 승인이 불가합니다 </Text>
            <Text style={{color:'#151515',fontWeight:'400',fontSize:fontPercentage(10),alignSelf:'center',paddingBottom:15}}> 예약 확정 유무가 채팅으로 전송되니 조금만 기다려주세요 </Text>
        </Modal>

        {/* 모달창 켜지면 채팅 꺼짐 */}
        { ReserveModal===false ?
            <GiftedChat
              messages={messages}
              onSend={messages => onSend(messages)}
              user={{
              _id: 1,
              }}
              renderBubble={renderBubble}
              renderInputToolbar={renderInputToolbar}
              renderSend={renderSend}
              showAvatarForEveryMessage={true}
              messagesContainerStyle={{
                backgroundColor:'#ffffff',
             }} /> : <></>}
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
      android:{
        elevation:3
      }
    })
  },
  container:{
    paddingTop:15,
    paddingLeft:10
  }
})

export default ChattingBubble;