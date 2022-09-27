import React from 'react';
import './Country.css'

const Country = (props) => {
    const { area, region, name, flags } = props.country;

    return (
        <div className='country bg-warning'>
            <img src={flags.png} alt="" />
            <h1>Name: {name.common}</h1>
            <p>Area: {area}</p>
            <p>Region: {region}</p>

        </div>
    );
};

export default Country;