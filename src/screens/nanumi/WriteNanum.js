import React, {useState} from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView,View, Pressable, Button} from "react-native";
import { InputStyle1 } from "../../components/Input";

const WriteNanum = () => {

    const [values, setValues] = useState({
        title: '',
    });

    const onChangeText = (name, value) => {
        console.log(name)
        setValues({
          ...values, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });

        console.log(value)
    };

    return (
        <SafeAreaView style={styles.container}>
            <InputStyle1 name="title" label="제목" placeholder="글 제목을 입력해주세요." value={values.title} onChangeText={onChangeText} star={true}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFFFFF'
    },
});



export default WriteNanum;