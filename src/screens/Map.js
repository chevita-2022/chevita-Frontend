import React, {useEffect, useState} from "react";
import { Text,StyleSheet, ScrollView, SafeAreaView,View, Pressable, Button} from "react-native";
import GoogleMap from "../components/GoogleMap";


const Map = () => {
    return(
        <View style={styles.container}>
            <GoogleMap/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    }
})

export default Map;