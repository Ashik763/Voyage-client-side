import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import MyReview from './MyReview';
import { Helmet } from 'react-helmet';

const Title = "My Reviews";
const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    // setReviews(useLoaderData());
    const {email} = useParams();
    useEffect(() =>{
        fetch(`https://myapp-beige-ten.vercel.app/myReviews/${email}`)
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
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            {
            // reviews.map(review => <MyReview review = {review}></MyReview>)
            reviews.map(review => <MyReview review = {review} reviews={reviews} setReviews={setReviews}></MyReview>) }
            
            {/* } */}
        </div>
    );
};

export default MyReviews;