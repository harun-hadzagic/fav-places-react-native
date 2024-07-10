import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import OutlinedButton from "../components/ui/OutlinedButton"
import { Colors } from "../constants/colors"

const PlaceDetails = ({route,navigation}) =>{
    const lat = route.params.address.lat;
    const lng = route.params.address.lng;

    const showOnMapHandler = () =>{
        navigation.navigate('Map', {
            initalLat: lat,
            initalLng: lng
        })
    }
    return <ScrollView>
        <Image style={styles.image} source={{ uri: route.params.imageUri }}/>
        <View style={styles.addressContainer}>
            <View style={styles.addressContainer}>
                <Text style={styles.address}>{route.params.address.address}</Text>
            </View>
            <OutlinedButton icon={'map'} onPress={showOnMapHandler}>View on Map</OutlinedButton>
        </View>
    </ScrollView>
}

export default PlaceDetails

const styles = StyleSheet.create({
    image:{
        height: '35%',
        minHeight: 300,
        width: "100%"
    },
    locationContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    addressContainer:{
        padding: 20
    },
    address:{
        color: Colors.primary500,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16

    }
})