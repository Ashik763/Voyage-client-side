import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const TourInHome = ({ tour }) => {
  return (
    <div className=" relative md:w-3/12 m-3 hover:shadow-lg dark:hover:shadow-black/30   ">
      <div className="card  bg-base-100 shadow-xl">
        <PhotoProvider >
        <figure className="border w-full cursor-pointer ">
        <PhotoView src={tour.img}>
          <img
              className="w-full h-[16rem] "
              src={tour.img}
              alt="img"
            />
       </PhotoView>
         
        </figure>
        </PhotoProvider>

        <div className="card-body h-[13rem]">
          <h2 className="card-title">{tour.tour_name}!</h2>
          <p>{tour?.description.length > 100 ? tour?.description.substring(0,80)+"...": tour.description }</p>
          <div className="card-actions absolute bottom-2 right-2">
            <Link className="btn btn-outline" to={`/tour/${tour._id}`}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourInHome;
