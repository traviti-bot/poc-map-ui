// AddressInput.js
import React, { useState } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';
import config from '../conf/conf'; // Import the config module

const AddressInput = ({ name, value, placeholder, onChange }) => {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (e) => {
        console.log("Input value:", e.target.value);
        setInputValue(e.target.value);
        // No need to manually check against suggestions, as the selected suggestion will update the input value through onSuggestionSelect
    };

    return (
        <AddressAutofill
            accessToken={config.MAPBOX_ACCESS_TOKEN}
            onSuggestionSelect={(suggestion) => {
                console.log("Selected suggestion:", suggestion);
                setInputValue(suggestion.place_name);
                onChange({ target: { name, value: suggestion.place_name } });
            }}
        >
            <input
                type="text"
                name={name}
                value={inputValue}
                placeholder={placeholder}
                onChange={handleInputChange}
                autoComplete="address-line1"
            />
        </AddressAutofill>
    );
};

export default AddressInput;
