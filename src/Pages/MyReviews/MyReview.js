import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border:'2px solid black'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


const MyReview = ({ review, setReviews, reviews }) => {
  const [updatedText, setUpdatedText] = useState(review?.description);
  const [modalIsOpen, setIsOpen] = useState(false);
  // const MyReview = ({ review}) => {
  const [tour, setTour] = useState({});
  const notify = () => toast("Successfully Deleted!");

  const handleDelete = (e) => {
    const permission = window.confirm("Are you sure you want to delete?");
    if (permission) {
      e.stopPropagation();
      fetch(`https://myapp-beige-ten.vercel.app/myReview/${review._id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          // <ToastContainer />
          notify();
          console.log(data);
          const remainingReviews = reviews.filter((r) => r._id !== review._id);
          setReviews(remainingReviews);
        });
    }
    console.log("clicked");
  };

  const handleUpdate = (e) => {
    const description = e.target.description.value;

    for(let i=0;i<reviews.length;i++) {
        if(reviews[i]._id === review._id){
          reviews[i].description = description;
          break;
        }
    }
    // setReviews(reviews);
    // const selectedReview = reviews.find( r => r._id === review._id);
    // selectedReview.description = description;
    // setReviews(selectedReview);

    // e.preventDefault();
    // const a = handleChange();
    // console.log(a);
    fetch(`https://myapp-beige-ten.vercel.app/updateReview/${review._id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body:JSON.stringify({
        description: description
      }),
    })
    .then((response) => response.json())
    .then((json) => console.log(json));




  };

  function handleChange(e) {
    return e.target.value;
  }

  useEffect(() => {
    fetch(`https://myapp-beige-ten.vercel.app/tourDetails/${review.tour_id}`)
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, [review.tour_id]);

  let subtitle;
  

  function openModal() {
    setIsOpen(true);
    
    
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {

  }
  const  handleSubmit =  async(e) => {
    
     handleUpdate(e);
    setIsOpen(false);
    closeModal();
    

  }





  return (
    <div  className="w-full border shadow-md relative md:w-1/2 m-2">
      <div className="flex cursor-pointer text-xl absolute top-1 right-1">
        {/* The button to open modal */}
       
       
        <div >
          <button className="me-2" onClick={openModal}><AiOutlineEdit></AiOutlineEdit>  </button>
          <Modal
          // className="h-1/2"
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          
          >
           <div className="text-center  h-80 w-80"> 
              <div className=" text-2xl  text-primary ">Edit</div>
              <form  onSubmit={handleSubmit}   >
                  <textarea
                  className="border-2 h-48 w-full m-2"
                  name="description"
                  defaultValue={updatedText}
                  > 
                  </textarea>
                  <input className="cursor-pointer btn btn-outline  " type="submit" value="update" />
                  {/* <button onClick={closeModal}>close</button> */}
              </form>

           </div>
            
           
          </Modal>
        </div>






     

        <AiOutlineDelete onClick={handleDelete}></AiOutlineDelete>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className=" font-medium text-gray-900 dark:text-white">
                {review?.description}
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="font-bold pr-3  text-gray-900 dark:text-white">
                  Place: {tour?.tour_name}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default MyReview;
