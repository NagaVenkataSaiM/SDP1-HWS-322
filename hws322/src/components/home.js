import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import ParticlesBg from 'particles-bg'


const Homepage = ({setLoginUser}) => {
     
    return (


<div class="body-home">
<ParticlesBg type="polygon" bg={true} />
<center><h1> <b>Welcome To Project-HWS322</b></h1></center>
    <div class="home-container">
        
        <div class="col-md-6 contents">
        <div class="row justify-content-center">
        <div class="col-md-8">
              <div class="mb-4">
        <p>
          <Link to="/login"  class="btn btn-block btn-primary">Login</Link>  
          </p>
          <p>
          <Link to="/signup" class="btn btn-block btn-primary">Sign up </Link>
        </p>
        </div>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }


export default Homepage;