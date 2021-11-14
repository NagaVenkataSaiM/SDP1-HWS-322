import Button from "@restart/ui/esm/Button";
import React, { Component,useState } from "react";

import { Container } from "react-bootstrap";
import doctor from './images/doctor_page.jpg'
import { Link , useHistory} from "react-router-dom";
import {Checkmark} from 'react-checkmark';
import axios from "axios"


const Signup=()=>{
   const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
        phonenumber: "",
        dob: "",
        gender:"",
        id:"",
        des:"",
        hospital:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword ,phonenumber,dob,gender,id,des,hospital} = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invalid input")
        }
        
    }

  const[flag,setFlag]=useState(0)
  
  const setFlagtoone=()=>{setFlag(1)}
  const setFlagtotwo=()=>{setFlag(2)}
  const setFlagtothree=()=>{setFlag(3)}
  const setdoc=()=>{setUser({...user,des: "doctor"})}
  const setstaff=()=>{setUser({...user,des: "staff"})}
  const setpat=()=>{setUser({...user,des: "patient"})}

if(flag===4){
  const buttonstyle={
      backgroundColor: "blueviolet",color: "white",borderRadius: 7,padding: "7px 15px",width: "200px",marginLeft: "25px"
    }
    const signuprowstyle={
      display:"inline-block",marginLeft: "500px",marginTop: "400px"
    } 
  return(
    <div style={signuprowstyle}>
       <Button style={buttonstyle} onClick={()=>{setFlagtoone(); setdoc();}}  >Doctor</Button>
        <Button style={buttonstyle} onClick={()=>{setFlagtotwo(); setstaff();}}  >Staff</Button>
        <Button style={buttonstyle} onClick={()=>{setFlagtothree(); setpat();}} >Patient</Button>

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
           

            <div class="form-group first">
                <label for="did">Doctor ID</label>
                <input type="number" name="id" value={user.id} class="form-control" id="did" onChange={ handleChange }></input>
              </div>

              <div class="form-group last mb-4">
                <label for="hname">Hospital Name</label>
                <input type="text" name="hospital" value={user.hospital} class="form-control" id="hname" onChange={ handleChange }></input>
              </div>

            
              
              <input type="submit" value="Sign Up" onClick={()=>{setFlag(5); register();}} class="btn btn-block btn-primary"></input>
            
            
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
           
            <div class="form-group first">
                <label for="did">Staff ID</label>
                <input type="number" class="form-control" id="did"></input>
              </div>

              <div class="form-group last mb-4">
                <label for="hname">Hospital Name</label>
                <input type="text" class="form-control" id="hname"></input>
              </div>

            
              
              <input type="submit" value="Sign Up" onClick={()=>{setFlag(5)}} class="btn btn-block btn-primary"></input>
            
            
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
           

            <div class="form-group first">
    
                <input type="text" name="name" value={user.name}  class="form-control" placeholder='Full Name' id="username" onChange={ handleChange }></input>
              </div>
 
              <div class="form-group ">
               <input type="email" name="email" value={user.email} class="form-control" placeholder='Email' id="email" onChange={ handleChange }></input>
              </div>

              <div class="form-group">

                <input type="number" name="phonenumber" value={user.phonenumber} class="form-control" placeholder='Mobile number' id="phoneno" onChange={ handleChange }></input>
              </div>
            
              <div class="form-group">
                <input type="password" name="password" value={user.password} class="form-control" placeholder='Password' id="password" onChange={ handleChange }></input>
                
              </div>

              <div class="form-group">
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} class="form-control" placeholder='Re-enter password' id="repassword" onChange={ handleChange }></input>
                
              </div>

              <div class="form-group last mb-4">
              <small>Date of birth:</small>
                <input type="date" name="dob" value={user.dob} class="form-control" id="dob" onChange={ handleChange }></input>
              </div>
              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Male</span>
                  <input type="checkbox" name="gender" value="male" onChange={ handleChange } />
                  <div class="control__indicator"></div>
                </label>&ensp;
                <label class="control control--checkbox mb-0"><span class="caption">Female</span>
                  <input type="checkbox" name="gender" value="female" onChange={ handleChange } />
                  <div class="control__indicator"></div>
                </label>&ensp;
                <label class="control control--checkbox mb-0"><span class="caption">Others</span>
                  <input type="checkbox" name="gender" value="other" onChange={ handleChange } />
                  <div class="control__indicator"></div>
                </label>&ensp;
                
              </div>


              <button type="submit" value="Next" onClick={()=>{setFlag(4)}} class="btn btn-block btn-primary">Next</button>
            
            
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