import React from "react";
import { TouchableOpacity ,Text} from "react-native";

const PlaceAddress=({navigation})=>{

    return(
        <TouchableOpacity onPress={()=>navigation.navigate('WriteAdress')}>
            <Text>위치정보</Text>
        </TouchableOpacity>
    )
}

export default PlaceAddress;