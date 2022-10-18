import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView,View, Pressable} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";	
import { Platform, PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";
import Geocoder from 'react-native-geocoding';
import { getDistance } from 'geolib'

const GoogleMap = (props) => {
    const {setSelectedItem} = props;
    const [currentLocation, setCurrentLocation] = useState({latitude: 37.4819682, longitude: 126.993978});
    
    //const [arr, setArr] = useState([]);

    const arr = [{latitude: 37.4819782, longitude: 126.993978}, {latitude: 37.4819692, longitude: 126.993978}]

    /*const path="http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/posts";
=======
    const path="http://chevita-env.eba-i8jmx3zw.ap-northeast-2.elasticbeanstalk.com/posts";
>>>>>>> bdc43d32950cfa43c9c2ceed7147ff7d9296e20c
    useEffect(()=>{
        fetch(path).then((res)=>res.json()).then((response)=>
            setArr(response.data)     
        ).then(
            arr.map((item) => convertAddressToCoordinates(item.globalLocation))
        )
        console.log(arr)
    },[])*/

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

    /*useEffect(()=>{
        if(arr.length != coordinates.length){
        arr.map((item) => convertAddressToCoordinates(item))
        console.log(coordinates)}
    },[{coordinates}])*/



    return(
            <MapView
                style={MapStyles.container}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}>
            </MapView>
    )
}

const MapStyles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%'
    },
})

export default GoogleMap;