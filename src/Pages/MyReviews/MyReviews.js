import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import MyReview from './MyReview';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    // setReviews(useLoaderData());
    const {email} = useParams();
    useEffect(() =>{
        fetch(`http://localhost:5000/myReviews/${email}`)
        .then(response => response.json())
        .then(data => setReviews(data));
    },[email])
    
 if(reviews.length === 0){
    return (
    <div className=' text-2xl flex justify-center items-center text-red-400 h-96 w-full'>
        <div>No reviews were added! </div>
    </div>
    )}
    
    return (
        <div className=' flex flex-col items-center  '>
            {
            // reviews.map(review => <MyReview review = {review}></MyReview>)
            reviews.map(review => <MyReview review = {review} reviews={reviews} setReviews={setReviews}></MyReview>) }
            
            {/* } */}
        </div>
    );
};

export default MyReviews;