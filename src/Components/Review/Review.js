import React from 'react';

const Review = (props) => {
    const { name, comment, rating } = props.review;
    return (
        <div className='mx-10 p-8 border-2 md:w-96'>
            <h4 className='text-2xl font-semibold flex justify-center mb-5'>{name}</h4>
            <p>{comment}</p>
            <p className='font-medium mt-5'>Rating : {rating}</p>
        </div>
    );
};

export default Review;