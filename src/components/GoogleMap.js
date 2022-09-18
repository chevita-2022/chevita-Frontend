import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView,View, Pressable} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";	
import { Platform, PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";
import Geocoder from 'react-native-geocoding';
import { getDistance } from 'geolib'

const GoogleMap = () => {

    const [currentLocation, setCurrentLocation] = useState({latitude: 37.4819682, longitude: 126.993978});
    
    const [arr, setArr] = useState([]);

    const path="http://52.78.161.124/posts";
    useEffect(()=>{
        fetch(path).then((res)=>res.json()).then((response)=>
            setArr(response.data)     
        )
        console.log(arr)
    },[])

    const [distance, setDistance] = useState([]);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(()=>{
        console.log(arr)
    },[arr])

    Geocoder.init("AIzaSyBmMinPStpXNnPcWNefzg3T01Ktjm1bQA4");

    const convertAddressToCoordinates = async(address) => {
        if(arr.length != coordinates.length){
            const result = await Geocoder.from(address)
                .then(json => {
                    var location = json.results[0].geometry.location;
                    console.log(location);
                    return location
                }).then((result) => {
                    console.log(result);
                    setCoordinates(coordinates.concat(result))
                }).catch(error => console.warn(error));
            console.log(coordinates)
            return result
        }
        else {
            return
        }
    }

    useEffect(()=>{
        arr.map((item) => convertAddressToCoordinates(item.globalLocation))
        console.log(coordinates)
    },[coordinates])

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