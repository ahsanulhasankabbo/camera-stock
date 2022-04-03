import React from 'react';
import image from './notfound404.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;