import React, { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";

const ImagePicker = () => {
    //launchImageLibrary : 사용자 앨범 접근
      launchImageLibrary({}, (res)=>{
        alert(res.assets[0].uri)
        const formdata = new FormData()
        formdata.append('file', res.assets[0].uri);
        console.log(res);
      })
}

export {ImagePicker};