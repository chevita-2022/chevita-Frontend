import React from "react";
import { Pressable, SafeAreaView, ScrollView, Text } from "react-native";
import PersonalChatting from "./PersonalChatting";

const List = [
    {
        key:1,
        title:'세척 당근 반토막 나눔해요',
        time:'오전 11:40',
        lastMessage:'혹시 어디쯤이신가요?',
    },
    {
        key:2,
        title:'양파 반쪽 나눔~~',
        time:'오전 11:45',
        lastMessage:'도착하셨나요?',
    },
    {
        key:3,
        title:'당근 나눔해요',
        time:'오후 7:40',
        lastMessage:'이따 뵐게요~',
    },
    {
        key:4,
        title:'양파 반쪽 나눔~~',
        time:'오전 11:45',
        lastMessage:'도착하셨나요?',
    },
    {
        key:5,
        title:'양파 반쪽 나눔~~',
        time:'오전 11:45',
        lastMessage:'도착하셨나요?',
    },
    {
        key:6,
        title:'양파 반쪽 나눔~~',
        time:'오전 11:45',
        lastMessage:'도착하셨나요?',
    },
    {
        key:7,
        title:'양파 반쪽 나눔~~',
        time:'오전 11:45',
        lastMessage:'도착하셨나요?',
    },
    {
        key:8,
        title:'양파 반쪽 나눔~~',
        time:'오전 11:45',
        lastMessage:'도착하셨나요?',
    },
    {
        key:9,
        title:'양파 반쪽 나눔~~',
        time:'오전 11:45',
        lastMessage:'도착하셨나요?',
    },
    {
        key:10,
        title:'양파 반쪽 나눔~~',
        time:'오전 11:45',
        lastMessage:'도착하셨나요?',
    },
    {
        key:11,
        title:'양파 반쪽 나눔~~',
        time:'오전 11:45',
        lastMessage:'도착하셨나요?',
    },
]

const ChattingList=({navigation})=>{
    return(
        <SafeAreaView style={{paddingTop:10,height:'100%',backgroundColor:'#FFFFFF'}}>
            <ScrollView style={{backgroundColor:'#FFFFFF'}}>
            <Pressable onPress={()=>{navigation.navigate('ChattingBubble')}}>
                    {List.map(list=>(
                            <PersonalChatting key={list.key} title={list.title} time={list.time} message={list.lastMessage} />
                        )
                    )}
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChattingList;