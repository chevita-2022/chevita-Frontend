import React, {useEffect, useState} from "react";
import { StyleSheet, SafeAreaView, View, Pressable, Button} from "react-native";
import Postcode from '@actbase/react-daum-postcode';

const WriteAdress = (props) => {

    const {navigation, setAddress} = props;

    const getAddressData = (data) => {
        let defaultAddress = ''; // 기본주소
        defaultAddress = data.address;

        navigation.navigate('WriteNanum2', {address: defaultAddress})
    }
    return (
        <SafeAreaView style={styles.container}>
            <Postcode
                style={styles.postCode}
                jsOptions={{ animation: true }}
                onSelected={data => getAddressData(data)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    postCode:{
        flex:1
    }
    
});



export default WriteAdress;