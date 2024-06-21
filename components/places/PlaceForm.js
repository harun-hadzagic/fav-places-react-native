import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

const PlaceForm = () => {
    const [title, setTitle] = useState('')

    const changeTitleHandler = (enteredText) =>{
        setTitle(enteredText)
    }
  return (
    <ScrollView style={styles.form}>
        <View>
            <Text style={styles.lable}>Title</Text>
            <TextInput style={styles.input} onChange={changeTitleHandler} value={title}/>
        </View>
        <ImagePicker />
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
    form:{
        flex: 1,
        padding: 24
    },
    lable: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500
    },
    input:{
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    }
})
