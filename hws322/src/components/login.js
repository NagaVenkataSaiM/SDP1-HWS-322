import React, { Component ,useState} from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import back from './images/Pediatrician_DFM_01-01.svg'
import ParticlesBg from 'particles-bg'
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) =>{
   const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:"",
        des:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            if(res.data.des === "doctor")
            {
            history.push("/dochome")
          }
        })
    }
    return (
<div class="wave-container">
<ParticlesBg type="polygon"  bg={true} />
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src={back} alt="Image" class="img-fluid" />
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4">
              <h3>Sign In</h3>
              <p class="mb-4">welcome to project HWS322 &nbsp;&nbsp;
              <Link to="/signup">&nbsp;&nbsp;sign up? </Link>
            </p> 
            </div>
            
              <div class="form-group first">
                <label for="username">Email</label>
                <input type="text" class="form-control" id="username" name="email" value={user.email} onChange={handleChange}></input>

              </div>
              <div class="form-group last mb-4">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" value={user.password} onChange={handleChange}></input>
                
              </div>
              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                  <input type="checkbox"/>
                  <div class="control__indicator"></div>
                </label>
                <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span> 
              </div>

              <input type="submit" value="Log In" class="btn btn-block btn-primary" onClick={login}></input>
             <center>
              <span class="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>
              
              <div class="social-login">
                <a href="#" class="facebook">
                  <span class="icon-facebook mr-3"></span> 
                </a>
                <a href="#" class="twitter">
                  <span class="icon-twitter mr-3"></span> 
                </a>
                <a href="#" class="google">
                  <span class="icon-google mr-3"></span> 
                </a>
              </div>
              </center>
           
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
</div>
  
  
    );
  }


export default Login;