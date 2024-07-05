import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../ui/Button";

const PlaceForm = () => {
    const [title, setTitle] = useState('')
    const [pickedLocation, setPickedLocation] = useState()
    const [selectedImage, setSelectedImage] = useState()

    const changeTitleHandler = (enteredText) =>{
        setTitle(enteredText.nativeEvent.text)
    }

    const savePlaceHandler = () =>{
        console.log(title)
        console.log(pickedLocation)
        console.log(selectedImage)
    }
    const takeImageHandler = (imageUri) =>{
        setSelectedImage(imageUri)
    }
    const pickLocationHandler = useCallback ((location) =>{
        setPickedLocation(location)
    }, [])
  return (
    <ScrollView style={styles.form}>
        <View>
            <Text style={styles.lable}>Title</Text>
            <TextInput style={styles.input} onChange={changeTitleHandler} value={title}/>
        </View>
        <ImagePicker onTakeImage={takeImageHandler}/>
        <LocationPicker onPickLocation={pickLocationHandler}/>
        <Button onPress={savePlaceHandler}>Add Place</Button>
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
