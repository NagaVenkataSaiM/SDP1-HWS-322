import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import doctor from './images/doctor_page.jpg'
import { Link } from "react-router-dom";
import {Checkmark} from 'react-checkmark';


const Signup=()=>{
  const[flag,setFlag]=useState(0)
  
  const setFlagtoone=()=>{setFlag(1)}
  const setFlagtotwo=()=>{setFlag(2)}
  const setFlagtothree=()=>{setFlag(3)}

if(flag===4){
  const buttonstyle={
      backgroundColor: "blueviolet",color: "white",borderRadius: 7,padding: "7px 15px",width: "200px",marginLeft: "25px"
    }
    const signuprowstyle={
      display:"inline-block",marginLeft: "280px",marginTop: "250px"
    } 
  return(
    <div style={signuprowstyle}>
       <Button style={buttonstyle} onClick={setFlagtoone} >Doctor</Button>
        <Button style={buttonstyle} onClick={setFlagtotwo} >Staff</Button>
        <Button style={buttonstyle} onClick={setFlagtothree}>Patient</Button>
        <Button style={buttonstyle}><Link to="/dochome" >DocHome</Link> </Button>


    </div>

  );
}
if(flag===5){
  return(
    <div style={{marginTop: '300px'}}>
    <div>
      <Checkmark size='xxLarge' />
      <h1 style={{textAlign: "center", marginTop: '40px'}}><b>Yay, SignUp Successful!</b></h1>
    </div>
    </div>
  );
}

  if(flag===1){
    return(
      <div class="content">
     <div class="container">

            <div class="col-md-8">
              <div class="mb-4">
              <h3>SignUp Doctor, </h3>
            </div>
            <form action="#" method="post">

            <div class="form-group first">
                <label for="did">Doctor ID</label>
                <input type="number" class="form-control" id="did"></input>
              </div>

              <div class="form-group last mb-4">
                <label for="hname">Hospital Name</label>
                <input type="text" class="form-control" id="hname"></input>
              </div>

            
              
              <input type="submit" value="Sign Up" onClick={()=>{setFlag(5)}} class="btn btn-block btn-primary"></input>
            
            </form>
            </div>
          </div>
          
        </div>
         
    );
  }

  if(flag===2){
    return(
      <div class="content">
     <div class="container">

            <div class="col-md-8">
              <div class="mb-4">
              <h3>SignUp Staff, </h3>
            </div>
            <form action="#" method="post">

            <div class="form-group first">
                <label for="did">Staff ID</label>
                <input type="number" class="form-control" id="did"></input>
              </div>

              <div class="form-group last mb-4">
                <label for="hname">Hospital Name</label>
                <input type="text" class="form-control" id="hname"></input>
              </div>

            
              
              <input type="submit" value="Sign Up" onClick={()=>{setFlag(5)}} class="btn btn-block btn-primary"></input>
            
            </form>
            </div>
          </div>
          
        </div>
        
    );
  }

  else if(flag===0){
   
  return(

      <div class="content">
    <div class="container">
      
      <div class="row">
      <div class="col-md-6">
          <img src={doctor} style={{borderRadius: 7,height: 350, width: 1080,marginTop: "80px"}}alt="Image" class="img-fluid" />

          <span class="d-block text-left my-4 text-muted">&mdash; login with &mdash;</span>
          <div class="social-login">
                <a href="#" class="facebook">
                  <span class="icon-facebook mr-3"></span> 
                </a>&emsp;
                <a href="#" class="twitter">
                  <span class="icon-twitter mr-3"></span> 
                </a>&emsp;
                <a href="#" class="google">
                  <span class="icon-google mr-3"></span> 
                </a>&emsp;
              </div>
              

        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4">
              <h3>SignUp</h3>
            </div>
            <form action="#" method="post">

            <div class="form-group first">
    
                <input type="text" class="form-control" placeholder='Full Name' id="username"></input>
              </div>
 
              <div class="form-group ">
               <input type="email" class="form-control" placeholder='Email' id="email"></input>
              </div>

              <div class="form-group">

                <input type="number" class="form-control" placeholder='Mobile number' id="phoneno"></input>
              </div>
            
              <div class="form-group">
                <input type="password" class="form-control" placeholder='Password' id="password"></input>
                
              </div>

              <div class="form-group">
                <input type="password" class="form-control" placeholder='Re-enter password' id="repassword"></input>
                
              </div>

              <div class="form-group last mb-4">
              <small>Date of birth:</small>
                <input type="date" class="form-control" id="dob"></input>
              </div>
              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Male</span>
                  <input type="checkbox"/>
                  <div class="control__indicator"></div>
                </label>&ensp;
                <label class="control control--checkbox mb-0"><span class="caption">Female</span>
                  <input type="checkbox" />
                  <div class="control__indicator"></div>
                </label>&ensp;
                <label class="control control--checkbox mb-0"><span class="caption">Others</span>
                  <input type="checkbox"/>
                  <div class="control__indicator"></div>
                </label>&ensp;
                
              </div>


              <button type="submit" value="Next" onClick={()=>{setFlag(4)}} class="btn btn-block btn-primary">Next</button>
            
            </form>
            </div>
          </div>
          
        </div>
        
    </div>
  </div>  
    );

          </div>

  );  
  }
}


export default Signup;