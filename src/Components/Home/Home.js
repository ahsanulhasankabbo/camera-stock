import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import camera from './image/main-camera.png'

const Home = () => {
    const [reviews , setReviews ] = useReviews();
    return (
        <div>
            <div className='flex'>
            <div className='px-16 w-6/12'>
                <h1 className='text-teal-400 text-6xl'>Your next Camera</h1>
                <h1 className='text-sky-600 text-6xl'>Your best Camera</h1>
                <p className='my-7 text-xl'>A camera is a piece of equipment that is used for taking photographs, making films, or producing television pictures. Many cameras are now included as part of other digital devices such as phones and tablets.</p>
                <button className='bg-teal-600 text-white p-3 rounded-lg'>Live demo</button>
            </div>
            <div className='px-8 w-6/12'>
                <img className='w-3/4 mx-auto' src={camera} alt="" />
            </div>
            </div>
            <div>
                <h1 className='text-5xl'>Customers reviews(3)</h1>
                {
                    reviews.slice(0,3).map(review => <Review 
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Home;