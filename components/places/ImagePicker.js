import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

const ImagePicker = ({onTakeImage}) => {
  const [pickedImage, setPickedImage] = useState()
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permission"
      );

      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if(!hasPermission){
        return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [19, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri)
    onTakeImage(image.assets[0].uri)
  };

  let imagePreview = <Text>No image taken yet.</Text>
  if(pickedImage){
    imagePreview = <Image style={styles.image} source={{uri: pickedImage}}/>
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton onPress={takeImageHandler} icon="camera">Take Image</OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview:{
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4
  },
  image:{
    width: '100%',
    height: '100%',
    borderRadius: 4
  }
})
