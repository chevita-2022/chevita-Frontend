import React from "react";
import { Pressable, SafeAreaView, ScrollView, Text } from "react-native";
import PersonalChatting from "../../components/PersonalChatting";

const ChattingList=({navigation})=>{
    return(
        <SafeAreaView style={{paddingTop:10,height:'100%',backgroundColor:'#FFFFFF'}}>
            <ScrollView style={{backgroundColor:'#FFFFFF'}}>
            <Pressable onPress={()=>{navigation.navigate('ChattingBubble')}}>
                <PersonalChatting/>
            </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChattingList;