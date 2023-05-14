import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReviewsOnTour from "./ReviewsOnTour/ReviewsOnTour";
import AddReview from "./AddReview/AddReview";
import Spinner from "../Shared/Spinner/Spinner";

const TourDetails = () => {

  const [tour,setTour] = useState({});
  const [reviews,setReviews] = useState([]);
  const [ instantReviews , setInstantReviews ] = useState([]);
  const {id} = useParams();
  useEffect(() =>{
    fetch(`http://localhost:5000/tourDetails/${id}`)
    .then((response) => response.json())
    .then(data => setTour(data))
     
  },[id]);

  // if(reviews.length-1 === instantReviews.length){
  //   console.log("instantReviews")
  //   setReviews(reviews);
  // }

  // useEffect(() => {
  //   const email = "ashikghosh.cse7.bu@gmail.com";
  //     fetch(`http://localhost:5000/myReviews/${email}`)
  //     .then(response => response.json())
  //     .then(data => setReviews(data));
  // },[setReviews]);
 

  
  // if(tour){
  //   return <Spinner></Spinner>
  // }
  // useEffect(() =>{
    
  // },[]);
  // console.log(tourPlace);

  return (
    <div className="mt-5">
      <div className=" mt-5  flex flex-col md:flex-row md:justify-around  ">
        <div className=" border md:w-3/4 mb-5  ">
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={tour.img} alt="images" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{tour.tour_name}!</h2>
              <p>{tour.description}</p>
            </div>
          </div>
        </div>
      </div>

       <ReviewsOnTour key={tour._id} id={tour._id} reviews={reviews} setReviews={setReviews}  ></ReviewsOnTour>
       <AddReview id={tour._id} setTour={setTour} reviews={reviews} setReviews={setReviews} setInstantReviews={setInstantReviews} ></AddReview>
    </div>
  );
};

export default TourDetails;
