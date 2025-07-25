import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../../styles/map/map.css';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Font Awesome location icon

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
    lat: 49.20, // Latitude for Chilliwack
    lng: -122.50 
  };

// Coordinates for various cities
const cityCoordinates = [
    { name: 'Surrey', lat: 49.1913, lng: -122.8490 },
    { name: 'Vancouver', lat: 49.2827, lng: -123.1207 },
    { name: 'Abbotsford', lat: 49.0504, lng: -122.3045 },
    { name: 'Mission', lat: 49.1327, lng: -122.3210 },
    { name: 'Chilliwack', lat: 49.1579, lng: -121.9515 },
    { name: 'Hope', lat: 49.3820, lng: -121.4429 },
    { name: 'Agassiz', lat: 49.2386, lng: -121.7697 },
    { name: 'Richmond', lat: 49.1666, lng: -123.1336 },
    { name: 'Langley', lat: 49.1044, lng: -122.6604 },
    { name: 'Coquitlam', lat: 49.2827, lng: -122.7919 },
    { name: 'Maple Ridge', lat: 49.2193, lng: -122.5984 },
    { name: 'Delta', lat: 49.0847, lng: -123.0583 },
    { name: 'White Rock', lat: 49.0253, lng: -122.8026 },
  ];
  
  function Map() {
    // Options to customize the map
    const mapOptions = {
        streetViewControl: false, // Disable Street View control
        mapTypeControl: false,    // Disable Map Type control (Satellite, Hybrid, etc.)
    };

    return (
    <section className="map-container">
        <div className="map-title">
            <h1 className="h1-map-title h1-title">AREAS WE COVER</h1>
        </div>
        <div className="border-line-div-areas">
              <span className="border-line-areas" />
        </div>
        <div className='city-list'>
            <ul>
            {cityCoordinates.map((city, index) => (
                <li key={index} className="city-item">
                <FaMapMarkerAlt className="city-icon" />
                {city.name}
                </li>
            ))}
            </ul>
        </div>
        <div className='map-display'>
            <LoadScript googleMapsApiKey="">
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}  // Center the map over Fraser Valley
                zoom={9}         // Set zoom level
                options={mapOptions}
                >
                {cityCoordinates.map((city, index) => (
                    <Marker key={index} position={{ lat: city.lat, lng: city.lng }} title={city.name} />
                ))}
                </GoogleMap>
            </LoadScript>
        </div>
      </section>
    );
  }
  
  export default Map;
