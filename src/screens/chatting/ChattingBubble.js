import React, { useState, useCallback, useEffect } from 'react'
import { Image, Platform, SafeAreaView, ScrollView, View } from 'react-native';
import { GiftedChat,Bubble,InputToolbar, Send } from 'react-native-gifted-chat'

const ChattingBubble = () => 
{
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
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
          width:353,
          left:20,
          height:42,
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
      <Send {...props} containerStyle={{backgroundColor:'#FFF0A1',width:42,height:42,top:-4,borderRadius:100,left:3}}>
        <Image source={require('../../assets/images/messageSend.png')} style={{width:15, height:15,borderWidth:1.5,top:-12,left:12}}/>
      </Send>
    )
  }

  return (
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
        backgroundColor:'#ffffff'
      }}
    />
  )
}

export default ChattingBubble;