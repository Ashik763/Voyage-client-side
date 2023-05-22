import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import MyReview from './MyReview';

import { Helmet } from 'react-helmet';

const Title = "My Reviews";
const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    // setReviews(useLoaderData());
    const {email} = useParams();
    // useEffect(() =>{
        const { data=[] } = useQuery({
            queryKey: ['myReviews', email],
            queryFn: async () => {
                const res = await fetch(`http://localhost:5000/myReviews/${email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                console.log(data);
                setReviews(data);
                return data;
            }
        })


        // fetch(`http://localhost:5000/myReviews/${email}`)
        // .then(response => response.json())
        // .then(data => setReviews(data));
    // },[email])
    
 if(reviews.length === 0){
    return (
    <div className=' text-2xl flex justify-center items-center text-red-400 h-96 w-full'>
        <div>No reviews were added! </div>
    </div>
    )}
    
    return (
        <div className=' flex flex-col items-center  '>
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            {
            // reviews.map(review => <MyReview review = {review}></MyReview>)
          reviews.length>0 &&   reviews.map(review => <MyReview key={review._id} review = {review} reviews={reviews} setReviews={setReviews}></MyReview>) }
            
            {/* } */}
        </div>
    );
};

export default MyReviews;