import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Style for the map container
const containerStyle = {
  width: "100%",
  height: "400px", // Adjust the height as per your design
};

// Default center of the map (San Francisco example)
const center = {
  lat: 37.7749, // Latitude for San Francisco
  lng: -122.4194, // Longitude for San Francisco
};

// Your Google Maps API Key (replace with your actual key)
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // <-- Replace this with your key

const GoogleMapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Optional: Add any logic that should execute once the map is loaded.
  }, []);

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12} // Set the zoom level
        onLoad={() => setMapLoaded(true)} // Map load event
      >
        {/* Add a Marker on the map */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
