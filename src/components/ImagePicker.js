import React, { useState } from "react";
import { Text, Image, StyleSheet, TouchableOpacity,View, Pressable} from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import Modal from "react-native-modal";
import { ProfileImage, ProfileImage1 } from "./ProfileImage";
import { ImageBtn1, ImageBtn2 } from "./Button";

import fs from 'react-native-fs';
import {decode} from 'base64-arraybuffer';
import AWS from 'aws-sdk';


const ImagePicker = (props) => {

  const {type, num, values, setValues} = props;

  //upload image to s3
  const uploadFileToS3 = async (file) => {

    console.log(file)

    const BUCKET_NAME = 'chevita-bucket';
    const IAM_USER_KEY = 'AKIATKZDLSS4WWPLSIGT';
    const IAM_USER_SECRET = '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';
  
    const s3bucket = new AWS.S3({
      accessKeyId: IAM_USER_KEY,
      secretAccessKey: IAM_USER_SECRET,
      Bucket: BUCKET_NAME,
      signatureVersion: 'v4',
    });
  
    const contentType = file.type;
    const contentDeposition = file.fileName;
    const fPath = file.uri;
    const base64 = await fs.readFile(fPath, 'base64');
    const arrayBuffer = decode(base64);
  
    return new Promise((resolve, reject) => {
      s3bucket.createBucket(() => {
        const params = {
          Bucket: BUCKET_NAME,
          Key: file.fileName,
          Body: arrayBuffer,
          ContentDisposition: contentDeposition,
          ContentType: contentType,
        };
        console.log(params)
        s3bucket.upload(params, (error, data) => {
          //utils.stopLoader();
          if (error) {
            reject(getApiError(error));
          } else {
            console.log(JSON.stringify(data));
            resolve(data);
          }
        });
      });
    });
  };


  //modal
  const [offset, setOffset] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);

  //
  const setImage = (file) =>{

    if(type == "major") {
      const temp = [...values];
      temp[0] = file;
      setValues(temp)
    } else if(type == "detail"){
      const temp = [...values];
      temp[num] = file;
      setValues(temp)
    } else {
      setValues(file)
    }
    setModalVisible(false)

    console.log(values)
  }


  const getImageByLibrary = () => {
    if(type == "detail" && values.length == 0){
      alert('대표사진을 먼저 첨부해주세요')
      return
    } else if (type == "detail" && values.length < num) {
      alert('사진을 순서대로 첨부해주세요')
      return;
    }
    //launchImageLibrary : 사용자 앨범 접근
      launchImageLibrary({}, (res)=>{
        console.log(res)
        uploadFileToS3(res.assets[0])
        setImage(res.assets[0])
      
      })
  }

  const getImageByCamera = () =>{
    if(type == "detail" && values.length == 0){
      alert('대표사진을 먼저 첨부해주세요')
      return
    } else if (type == "detail" && values.length < num) {
      alert('사진을 순서대로 첨부해주세요')
      return;
    }
    //launchImageLibrary : 사용자 앨범 접근
    launchCamera({}, (res)=>{
      console.log(res)
      uploadFileToS3(res.assets[0])
      setImage(res.assets[0])
    })
  }

  const ModalTrigger = () => {
    switch(type){
      case "major":
        return <ImageBtn1 type={type} image={values[0] ? values[0].uri: undefined}/>;
      case "detail":
        return <ImageBtn1 type={type} image={values[num] ? values[num].uri: undefined}/>;
      case "receipt":
        return <ImageBtn2 image={values ? values.uri : undefined}/>;
      case "profile2":
        return <ProfileImage1 image={values ? values.uri : undefined}/>;
    }
  }

  return(
    <>
    <Pressable style={styles.trigger} onPress={() => setModalVisible(true)}>
      <ModalTrigger/>
    </Pressable>
    <Modal
      isVisible={modalVisible} 
      transparent={true}
      useNativeDriver={true}
      style={styles.modal.container}
      onBackdropPress={() => setModalVisible(false)}
    >
      <View style={styles.modal.btns}>
        <View style={styles.modal.option.container}>
          <Pressable style={styles.modal.option.btn1} onPress={() => getImageByLibrary()}>
            <Text style={styles.modal.option.text}>앨범에서 사진 선택</Text>
          </Pressable>
          <Pressable style={styles.modal.option.btn2} onPress={() => getImageByCamera()}>
            <Text style={styles.modal.option.text}>카메라로 사진 찍기</Text>
          </Pressable>
        </View>
        <Pressable style={styles.modal.cancel.container} onPress={()=> setModalVisible(false)}>
          <Text style={styles.modal.cancel.text}>취소</Text>
        </Pressable>
      </View>
    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  trigger:{

  },
  modal:{
    container:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent', 
    },
    btns:{
      position: 'absolute',
      bottom: heightPercentage(33),
    },
    option:{
      container:{
        alignItems: 'center',
        justifyContent: 'center',
        width: widthPercentage(340),
        height: heightPercentage(97),
        marginBottom: heightPercentage(9),
        borderRadius: 12,
        backgroundColor: "#ffffff"
      },
      btn1:{
        alignItems: 'center',
        justifyContent: 'center',
        width: widthPercentage(306),
        height: heightPercentage(48),
        borderBottomWidth: 1,
        borderColor: '#D9D9D9'
      },
      btn2:{
        alignItems: 'center',
        justifyContent: 'center',
        width: widthPercentage(306),
        height: heightPercentage(48)
      },
      text:{
        fontSize: fontPercentage(12),
        fontWeight: 'bold',
        color: '#151515'
      }

    },
    cancel:{
      container:{
        alignItems: 'center',
        justifyContent: 'center',
        width: widthPercentage(340),
        height: heightPercentage(48),
        borderRadius: 12,
        backgroundColor: "#ffffff"
      },
      text:{
        fontSize: fontPercentage(12),
        color: '#151515'
      }
    }
  }
})

export default ImagePicker;