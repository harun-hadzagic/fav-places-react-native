import { GOOGLE_MAPS_API_KEY } from "@env";

export const getMapPreview = (lat, lng) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
  return imagePreviewUrl;
};

export const getAddress = async (lat, lng) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Faild to fetch address!");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
};
