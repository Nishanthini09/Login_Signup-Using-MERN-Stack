// import React from 'react';
import { Link } from "react-router-dom";
import image from './6.jpeg';

const Home = () => {
  return (
    <div 
    style={{
      backgroundImage: `url(${image})`, // Replace with your desired image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: "white", // Ensure content is visible on the vibrant background
      textShadow: "1px 1px 2px rgba(0.5, 0.9, 0.7, 0.5)", // Add subtle shadow for text clarity
  }}
    className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1>Login Successfully</h1>
        <Link to='/login' className="btn btn-light my-5">Logout</Link>
    </div>
  )
}

export default Home;
