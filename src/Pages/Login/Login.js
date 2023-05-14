import React, { useContext } from "react";
// import ReactSpinner from 'react-bootstrap-spinner'
import "./Login.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { AiOutlineGoogle,AiFillGithub } from 'react-icons/ai';
// import Spinner from "../../Shared/Spinner";

const Login = () => {

  

  const {signIn,loading,setLoading,error,setError,signInWithGoogle,updateUserProfile} = useContext(AuthContext);
  const {user} = useContext(AuthContext);

  //console.log();(loading);
 const navigate = useNavigate();
const location  = useLocation();

//console.log();(location);
 const from = location.state?.from?.pathname || '/';
 if(user){
  return <Navigate to="/" state={{from: location}} replace></Navigate>
 }

    const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
      //console.log();(result);
      setError('');
    
      // navigate(from, {replace: true});
      setLoading(true);
      handleUpdateUserProfile(result.user.name,result.user.photoURL)
        // handleUpdateUserProfile(name,photoURL);
    })
    .catch(err =>{
      //console.log();(err);
      setError(err.message);
    })
  }
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }

    updateUserProfile(profile)
        .then(() => { 
          setLoading(false);
          navigate(from, {replace: true})
          
        })
        .catch(error =>{ 
          console.error(error);
          setLoading(false);
        
        });
}


// Sign in with Email and password
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   

    signIn(email, password)
        .then(result => {
            const user = result.user;
            //console.log();(user);
            form.reset();
            navigate(from, {replace: true});
            setError('');
            // if(user.emailVerified){
            //     navigate(from, {replace: true});
            // }
            // else{
            //     toast.error('Your email is not verified. Please verify your email address.')
            // }
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
        .finally(() => {
            setLoading(false);
        })


        
}
  return (
    <div className=" login-container flex align-center">
      <div className="  login-content border p-10 m-auto ">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h2 className="text-center text-2xl"> Log In</h2>
            <label   htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control border w-full h-8"
              id="email"
              aria-describedby="emailHelp"
            />
          
          </div>
          <div className="mb-3">
            <label   htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control border w-full h-8"
              id="password"
            />
          </div>
      
          <button type="submit" className="btn mt-5 btn-outline w-full border ">
            Login
          </button>
        </form>
        <div className="text  text-red-600">
          {error} 

        </div>
        <p className="text-center mt-3"> 
        Don't have an account?<Link className="link" to="/register">Register</Link>
        </p>
        <div className=' sign-in-options text-center '> 

<h6>Or you can continue with  </h6>
<p className=" flex justify-center mt-2"> 
    <span onClick={handleGoogleSignIn} className='sign-in-option  sign-in-with-google text-5xl'><AiOutlineGoogle></AiOutlineGoogle> </span>
    {/* <span className="sign-in-option sign-in-with-github text-5xl"><AiFillGithub></AiFillGithub> </span> */}
   
</p>

</div>
       
      </div>
    </div>
  );
};

export default Login;