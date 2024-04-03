// MapComponent.js
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapComponent = () => {
    useEffect(() => {
        mapboxgl.accessToken = ''; // Set your access token here
        const map = new mapboxgl.Map({
            container: 'map-container', // Container ID
            style: 'mapbox://styles/mapbox/streets-v11', // Map style
            center: [-74.006, 40.7128], // Starting position [lng, lat]
            zoom: 9, // Starting zoom level
        });

        return () => map.remove(); // Clean up the map when component unmounts
    }, []); // Empty dependency array to run only once

    return (
        <div id="map-container" style={{ width: '100%', height: '400px' }}></div>
    );
};

export default MapComponent;
