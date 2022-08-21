import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native';
import { GiftedChat,Bubble } from 'react-native-gifted-chat'

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
          },
          left: {
            backgroundColor: '#FFFFFF',
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
        usernameStyle={{
            
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
    />
  )
}

export default ChattingBubble;