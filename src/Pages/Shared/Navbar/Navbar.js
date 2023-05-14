import React, { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FcServices } from 'react-icons/fc';
import "./Navbar.css";
// import { BsSun } from 'react-icons/bs';
// import { BsMoonStars } from 'react-icons/bs';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {
  const email = "ashikghosh763@gmail.com";

  const {user,logOut} = useContext(AuthContext);
  console.log(user);
  // const {mood,setMood} = useContext(MoodContext);
  const navigate = useNavigate();
  const handleLogOut = () =>{
      logOut()
      .then(() =>{
        //console.log();("logged out");
        navigate('/');
        
      })
      .catch((err) =>{
        //console.log();(err);
      })
  }

  //Mood
  // const handleNightMood = () => {
  //   setMood('night');
  // }
  // const handleDayMood = () =>{
  //   setMood('day');
  // }
    return (
        <div>
         <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     
        
        <li>  <Link to='/' >Home</Link>  </li> 
        <li>  <Link to='/tours' >All packages</Link>  </li> 
       {user?<li>  <Link to={`/myReviews/${email}`} >Reviews</Link>   </li> : '' }
        {user ? <li>  <Link to='/addService' >Add Service</Link>  </li> :''}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Voyage</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>  <Link to='/' >Home</Link>  </li> 
        <li>  <Link to='/tours' >All packages</Link>  </li> 
       {user?<li>  <Link to={`/myReviews/${email}`} >Reviews</Link>   </li> : '' }
        {user ? <li>  <Link to='/addService' >Add Service</Link>  </li> :''}
    </ul>
  </div>
  <div className="navbar-end">
  
     {/* {user ?  <Link to="/login" className="btn btn-ghost">Sign in</Link> :  <Link to="/login" className="btn btn-ghost">Sign in</Link>  }     */}
     <ul> 
        <li> 
            <span className={'  topic-name text-decoration-none'   }> 
                      <>
                          {
                              user?.uid ?
                                  <div className="d-flex align-middle">
                                    <div className='flex align-bottom '> 
                                      <span> {user?.photoURL ? <img className="img-fluid  user-img me-2" src={user.photoURL} alt ="" /> : <AiOutlineUser></AiOutlineUser> } </span> 
                                          <span className='flex my-auto'>{user?.displayName || user?.uid}</span>
                                          <button className="btn btn-outline ms-2"  onClick={handleLogOut}>Log out</button>
                                    </div>
                                   
                                  </div>
                                  :
                                  <>
                                  <button className='btn btn-outline'><Link className="topic-name text-decoration-none " to='/login'>Login </Link>
 </button>
                                      
                                  </>
                          }


                      </>
          
          
          
            </span> 
        </li>
          
     </ul>
 
  </div>
</div>
        </div>
    );
};

export default Navbar;