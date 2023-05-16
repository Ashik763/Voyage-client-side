import React, { useEffect, useState } from 'react';
import TourInHome from '../Home/ServiceInHome/TourInHome';
import { Helmet } from 'react-helmet';

const Title = "All Packages";

const AllTours = () => {
    const [tours,setTours]  = useState([]);
    useEffect(()=>{
        fetch('https://myapp-beige-ten.vercel.app/alltours')
        .then(res => res.json())
        .then(data => {
            setTours(data);
            console.log(data);
        
        } )
    },[])
   
    return (
        <div className='mt-5 '>
            <Helmet>
                <title> {Title}</title>
            </Helmet>
            
            <div className='text-center'> 
                {/* <p className=' text-bold '>   </p> */}
                <p className='  text-[#FF6041] text-4xl mt-5 text-bold'> Packages </p>
            </div>
            
                <div className=' mt-5   flex flex-col md:flex-row flex-wrap  border md:justify-around    '>
                    {
                        tours.map(tour => <TourInHome key={tour._id} tour={tour}> </TourInHome>)
                    }

                </div>
         
     

       
       
       </div>
    );
};

export default AllTours;