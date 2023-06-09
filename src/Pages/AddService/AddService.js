import React from "react";

import { Helmet } from 'react-helmet';
import { toast } from "react-toastify";

const Title = "Add Package"

const AddService = () => {

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);


  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const tour_name = form.tour_name.value;
    const uploadedImg = form[2].files[0];
    // const image = form.img.value;
    const price = form.price.value;
    const description = form.description.value;
   

    const formData = new FormData();
    formData.append('image', uploadedImg);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch( url, {
        method: 'POST',
        body: formData
    })
    .then( res => res.json())
    .then(imgData => {
      if(imgData.success){
        const img = imgData.data.url;
        const tour_package  ={tour_name,img,price,description};
        fetch('https://myapp-beige-ten.vercel.app/addService',{
              method:'POST',
              headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(tour_package)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            toast("Servie added successfully");
            e.target.reset();
        })


      }
    })



    
    

   
  }
  return (
    <div className="flex justify-center">
      <Helmet>
        <title> {Title}</title>
      </Helmet>
        
      <div className="md:w-1/2 w-full   ">
      <p className="text-2xl"> Add a package:</p>
        <form onSubmit={handleSubmit} className="  w-full md:w-3/4 mt-5">
          <label className="block text-sm font-medium leading-6 text-gray-900 ">Tour Package Name: </label>
          <input
            type="text"
            name="tour_name"
            placeholder="Type here"
            className=" p-2 block w-full md:w-3/4 mb-8 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
           <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Tour Description:</label>
          
            <textarea 
            id="about"
             name="description" 
             rows="3" 
             className=" p-2 block w-full mt-2 mb-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              
             </textarea>
            
            <label className="block text-sm font-medium leading-6 text-gray-900 ">Upload image: </label>
          <input
            type="file"
            name="img"
            placeholder="https://www.img..."
            className="p-2 block w-full md:w-3/4 mb-8 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
            <label className="block text-sm font-medium leading-6 text-gray-900 ">Price: </label>
          <input
            type="text"
            name="price"
            placeholder=""
            className="p-2 block w-1/4 mb-8 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="w-full flex justify-center">
          <input
            type="submit"
            value = "Add Service"
            className="block  mb-8 mt-2 rounded-md border py-1.5 btn btn-outline"
          />
          </div>
        

          {/* <input type='submit' value='Add Service' */}
     
        </form>
      </div>
    </div>
  );
};

export default AddService;
