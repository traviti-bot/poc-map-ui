import React from 'react';

const AddressInput = ({ name, value, onChange }) => {
    return (
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={`Enter ${name} address`}
        />
    );
};

export default AddressInput;