import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Spinner from '../../Pages/Shared/Spinner/Spinner';
import AllTours from '../../Pages/AllTours/AllTours';
import TourDetails from '../../Pages/TourDetails/TourDetails';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import AddService from '../../Pages/AddService/AddService';
import PrivateRoute from '../../Components/PrivateRoute/PrivateRoute';
import NotFound from '../../Pages/NotFound/NotFound';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main> </Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/tours',
                element:<AllTours></AllTours>
            },
            {
                path:'tour/:id',
                // loader:({params}) => fetch(`https://myapp-beige-ten.vercel.app/tourDetails/${params.id}`),
                element:<TourDetails></TourDetails>
            },
            {
                path:'/myReviews/:email',
                // loader:({params}) => fetch(`https://myapp-beige-ten.vercel.app/myReviews/${params.email}`),
                element:<PrivateRoute>  <MyReviews></MyReviews> </PrivateRoute>
            },
            {
                path:'/addService',
                // loader:({params}) => fetch(`https://myapp-beige-ten.vercel.app/myReviews/${params.email}`),
                element:<PrivateRoute>  <AddService></AddService> </PrivateRoute>
            }
        ]
            
        
    },
    {
        path: '/login',
        element:<Login></Login>
    },
    {
        path: '/register',
        element:<Register></Register>
    },
    {
        path: '/spinner',
        element:<Spinner></Spinner>
    },
    {
        path: '*',
        element: <NotFound></NotFound>

    }
   
        
   
])