import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReviewsOnTour from "./ReviewsOnTour/ReviewsOnTour";
import AddReview from "./AddReview/AddReview";
import Spinner from "../Shared/Spinner/Spinner";
import { Helmet } from "react-helmet";

const Title = "Tour Details"
const TourDetails = () => {

  const [tour,setTour] = useState({});
  const [reviews,setReviews] = useState([]);
  const [ instantReviews , setInstantReviews ] = useState([]);
  const {id} = useParams();
  useEffect(() =>{
    fetch(`https://myapp-beige-ten.vercel.app/tourDetails/${id}`)
    .then((response) => response.json())
    .then(data => setTour(data))
     
  },[id]);
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  // if(reviews.length-1 === instantReviews.length){
  //   console.log("instantReviews")
  //   setReviews(reviews);
  // }

  // useEffect(() => {
  //   const email = "ashikghosh.cse7.bu@gmail.com";
  //     fetch(`https://myapp-beige-ten.vercel.app/myReviews/${email}`)
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
      <Helmet>
        <title> {Title} </title>
      </Helmet>
      <div className=" mt-5  flex flex-col md:flex-row md:justify-around  ">
        <div className=" border md:w-3/4 mb-5  ">
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={tour.img} alt="images" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{tour.tour_name}!</h2>
              <p className="text-sm font-extralight">{tour.description}</p>
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
