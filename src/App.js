// App.js
import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import AddressInput from './components/AddressInput';
import MapButton from './components/MapButton';

const App = () => {
  const [addresses, setAddresses] = useState({ address1: '', address2: '' });
  const [route, setRoute] = useState(null);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddresses({ ...addresses, [name]: value });
  };

  const handleMapClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/map/plotRoute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addresses),
      });
      const data = await response.json();
      setRoute(data.route);
    } catch (error) {
      console.error('Error mapping route:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: '1', position: 'relative' }}>
        <MapComponent route={route} />
      </div>
      <div style={{ padding: '20px', backgroundColor: '#fff' }}>
        <AddressInput name="address1" value={addresses.address1} onChange={handleAddressChange} placeholder="Choose A Starting Place" />
        <AddressInput name="address2" value={addresses.address2} onChange={handleAddressChange} placeholder="Choose Destination" />
        <MapButton onClick={handleMapClick} />
      </div>
    </div>
  );
};

export default App;
