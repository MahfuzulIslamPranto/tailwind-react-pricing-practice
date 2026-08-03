import React from 'react';

const Navbaruse = ({navbar}) => {
    const {name,id,path,icon} = navbar;
    return (
        <div className='text-white'>
            <h1>{name}</h1>
        </div>
    );
};

export default Navbaruse;