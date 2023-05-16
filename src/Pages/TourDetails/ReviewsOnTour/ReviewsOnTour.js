import React, { useEffect, useState } from "react";
import ReviewOnTour from "../ReviewOnTour/ReviewOnTour";
import Spinner from "../../Shared/Spinner/Spinner";

const ReviewsOnTour = ({id,reviews,setReviews}) => {
  // console.log(reviews,setReviews);
   
    useEffect(() => {
        fetch(`https://myapp-beige-ten.vercel.app/reviews/${id}`)
        .then((res) => res.json())
        .then(data => {
          
          setReviews(data)
        
        });
    },[setReviews,id])

    if(reviews?.length == 0 ){
      return     <div className='m-5 text-2xl flex justify-center items-centerh-96 w-full'>
                        <div>
                        <p className="text-center text-2xl text-red-400 m-5  "> Reviews</p>
                          No reviews yet !
                          
                           </div>
                 </div>
    }
  return (
    <div>
      <p className="text-center text-2xl text-red-400 m-5  "> Reviews</p>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        {
          reviews.map(review => <ReviewOnTour key={review._id} review={review}></ReviewOnTour>)
        }
   
      </div>
    </div>
  );
};

export default ReviewsOnTour;
