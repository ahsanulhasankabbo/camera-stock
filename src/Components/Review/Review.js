import React from 'react';

const Review = (props) => {
    const {name, comment , rating} = props.review;
    return (
        <div>
            <p>{name}</p>
            <p>{comment.slice(0,100)}</p>
            <p>{rating}</p>
        </div>
    );
};

export default Review;