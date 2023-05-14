import React from 'react';
import Banner from '../Banner/Banner';
import ServiceInHome from '../ServiceInHome/ServiceInHome';

import ReviewsOnHome from '../ReviewsOnHome/ReviewsOnHome';
import Blogs from '../Blogs/Blogs';


const Home = () => {
    return (
        <div className='flex justify-center' >
            <div className='w-11/12 md:w-4/5  '> 
            <Banner></Banner>
            <ServiceInHome></ServiceInHome>
            <ReviewsOnHome></ReviewsOnHome>
            <Blogs></Blogs>
            
           

            </div>
            

        </div>
    );
};

export default Home;