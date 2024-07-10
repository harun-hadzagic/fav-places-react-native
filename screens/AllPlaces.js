import { useEffect, useState } from "react";
import PlacesList from "../components/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocues = useIsFocused();
  useEffect(() => {
    if (isFocues && route.params?.isAdding) {
      route.params.isAdding = false;

      setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocues, route]);
  return <PlacesList places={loadedPlaces}/>;
};

export default AllPlaces;
