import React, { useState } from "react";
import { Text, Image, StyleSheet, TouchableOpacity,View, Pressable} from "react-native";
import { widthPercentage, heightPercentage, fontPercentage } from "../ResponsiveSize";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import Modal from "react-native-modal";
import { ProfileImage } from "./ProfileImage";
import { ImageBtn1, ImageBtn2 } from "./Button";


const ImagePicker = (props) => {
  const {type} = props;

  const [offset, setOffset] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);

  const getImageByLibrary = () => {
    //launchImageLibrary : 사용자 앨범 접근
      launchImageLibrary({}, (res)=>{
        alert(res.assets[0].uri)
        const formdata = new FormData()
        formdata.append('file', res.assets[0].uri);
        console.log(res);
      })
      setModalVisible(false);
  }

  const getImageByCamera = () =>{
        //launchImageLibrary : 사용자 앨범 접근
        launchCamera({}, (res)=>{
          alert(res.assets[0].uri)
          const formdata = new FormData()
          formdata.append('file', res.assets[0].uri);
          console.log(res);
        })
        setModalVisible(false);
  }

  const ModalTrigger = () => {
    switch(type){
      case "profile":
        return <ProfileImage/>;
      case "major":
        return <ImageBtn1 type={type}/>;
      case "detail":
        return <ImageBtn1 type={type}/>;
      case "receipt":
        return <ImageBtn2/>;
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