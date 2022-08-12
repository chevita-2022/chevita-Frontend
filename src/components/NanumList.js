import React, {useEffect, useLayoutEffect} from "react";
import { Text,StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderTitle } from "react-navigation-stack";
import { ScrollView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

const NanumiScreen=()=>{
    return(
        <View>
            <Text>List</Text>
        </View>
    )
}

const NanumList=({navigation})=>{

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Nanumi"
                    component={NanumiScreen}
                    options={{
                        title:'나누미',
                        headerStyle:{
                            backgroundColor:'#fff',
                        },
                        headerTintColor:'#374957',
                        headerTitleStyle:{
                            fontWeight:'900',
                            fontSize:16,
                            fontFamily:'Noto Sans KR',
                        },
                        headerTitleAlign:'center'
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NanumList;