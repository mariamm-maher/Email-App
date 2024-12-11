import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Header from "../components/global/heading";
const userDATA = [
  {
    id: 1,
    name: "User A",
    status: "active",
    location: { lat: 30.0444, lng: 31.2357 },
  },
  {
    id: 2,
    name: "User B",
    status: "deactivated",
    location: { lat: 31.2001, lng: 29.9187 },
  },
  {
    id: 3,
    name: "User C",
    status: "active",
    location: { lat: 25.6872, lng: 32.6396 },
  },
];

const Maps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCrNZC2Mlzmoj2JdjWWdVRP4pa58ZYI8co", // Replace with your API key
  });

  const [users, setUsers] = useState(userDATA);

  const mapContainerStyle = {
    width: "100%", // Full width
    height: "500px", // Set a fixed height (can adjust this value)
    borderRadius: "15px", // Modern rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for a modern look
    overflow: "hidden", // Hide any overflowing content
  };

  const center = {
    lat: 26.8206, // Egypt latitude
    lng: 30.8025, // Egypt longitude
  };

  useEffect(() => {
    // Fetching user data from an API endpoint
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (loadError) {
    return <div>Error loading maps. Please try again later.</div>;
  }

  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <>
      <Header mainText="Map" subText="who is active ?" />
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={6} center={center}>
        {userDATA.map((user) => (
          <Marker
            key={user.id}
            position={user.location}
            title={`${user.name} - ${user.status}`} // Tooltip showing user info
            icon={{
              // Set the marker's color based on user status
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: user.status === "active" ? "green" : "red",
              fillOpacity: 1,
              strokeWeight: 0,
              scale: 8, // Adjust size as needed
            }}
          />
        ))}
      </GoogleMap>
    </>
  );
};

export default Maps;
