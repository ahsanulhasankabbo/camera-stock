import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import camera from './image/Camera.avif'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='md:flex'>
                <div className='px-16 md:w-6/12'>
                    <h1 className='text-teal-400 md:text-6xl'>Your next Camera</h1>
                    <h1 className='text-sky-600 md:text-6xl'>Your best Camera</h1>
                    <p className='my-7 text-xl'>A camera is a piece of equipment that is used for taking photographs, making films, or producing television pictures. Many cameras are now included as part of other digital devices such as phones and tablets.</p>
                    <button className='bg-teal-600 text-white p-3 rounded-lg'>Live demo</button>
                </div>
                <div className='px-8 md:w-6/12 mt-5'>
                    <img className='w-3/4 mx-auto' src={camera} alt="" />
                </div>
            </div>
            <h1 className='md:text-5xl my-10 flex justify-center'>Customers reviews(3)</h1>
            <div className='md:flex'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
            <button className='bg-teal-600 text-white p-3 rounded-lg flex mx-auto my-10'>See all reviews</button>
        </div>
    );
};

export default Home;