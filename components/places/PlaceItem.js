import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

const PlaceItem = ({ place, onSelect }) => {
  console.log("sad ovo", place.title)
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
    item:{
flexDirection: 'row',
alignItems: "flex-start",
borderRadius: 6,
marginVertical: 12,
backgroundColor: Colors.primary500,
elevation: 2,
shadowColor: "black",
shadowOpacity: 0.15,
shadowOffset: { width: 1, height: 1 },
shadowRadius: 2,
borderRadius: 4,

    },
    pressed:{
      opacity: 0.9
    },
    image:{
      flex: 1,
      borderBottomLeftRadius: 4,
      borderTopLeftRadius: 4
    },
    info:{
      flex: 2
    },
    title:{},
    address:{}
})
