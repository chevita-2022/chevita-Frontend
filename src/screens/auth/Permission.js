import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView,View, Pressable} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";	
import { Platform, PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";
import MainScreen from "../MainScreen";

const Permission=()=>{
    
    const [location, setLocation] = useState();

    const requestPermission = async() => {
        try {
          if (Platform.OS === "ios") {
            return await Geolocation.requestAuthorization("always");
          }
          // 안드로이드 위치 정보 수집 권한 요청
          if (Platform.OS === "android") {
            return await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
          }
        } catch (e) {
          console.log(e);
        }
    }

    useEffect(() => {
        requestPermission().then(result => {
            console.log({ result });
            if (result === "granted") {
              Geolocation.getCurrentPosition(
                pos => {
                  setLocation(pos.coords);
                },
                error => {
                  console.log(error);
                },
                {
                  enableHighAccuracy: true,
                  timeout: 3600,
                  maximumAge: 3600,
                },
              );
            }
          });
        }, []);

    return(
        location ? 
            /*<MapView
                style={MapStyles.container}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            />*/
            <MainScreen/>
        :
            <></>
    )
}

const MapStyles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%'
    },
})

export default Permission;