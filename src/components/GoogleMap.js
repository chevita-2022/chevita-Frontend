import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView,View, Pressable} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";	
import { Platform, PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";
import Geocoder from 'react-native-geocoding';
import { getDistance } from 'geolib'

const GoogleMap = () => {

    const [currentLocation, setCurrentLocation] = useState({latitude: 37.4819682, longitude: 126.993978});
    
    const arr = ["서울특별시 서초구 효령로 25길 20", "서울특별시 서초구 효령로 24길 20", "서울특별시 서초구 효령로 18길 21"]
    const [distance, setDistance] = useState([]);
    const [coordinates, setCoordinates] = useState([]);


    Geocoder.init("AIzaSyBmMinPStpXNnPcWNefzg3T01Ktjm1bQA4");

    const promise = new Promise;
    const getData = () => {
      promise.then((appData) => {
          console.log(appData);
        });
    };


    const convertAddressToCoordinates = (address) => {
        const result = Geocoder.from(address)
                .then(json => {
                    var location = json.results[0].geometry.location;
                    console.log(location);
                    return location
                })
                .catch(error => console.warn(error));
        return getData(result)
    }

    useEffect(()=>{
      setCoordinates(arr.map((item) => convertAddressToCoordinates(item)))
      console.log(coordinates)
    },[])

    return(
            <MapView
                style={MapStyles.container}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            />
    )
}

const MapStyles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%'
    },
})

export default GoogleMap;