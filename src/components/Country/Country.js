import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flags,name,population,area} =props.country
    return (
        <div className='country bg-dark'>
             <h1>Name:{name.common}</h1>
             <img src={flags.png} alt="" />
            <h4>Population:{population}</h4>
            <p><small>Area:{area}</small></p>
        </div>
    );
};

export default Country;