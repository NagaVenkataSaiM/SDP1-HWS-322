import React, { Component,useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ParticlesBg from 'particles-bg';
import logo from './images/klife-logo.png';
import nvspp from './images/nvspp.jpg';
import './styles/profile-card.css'


const Homepage = ({setLoginUser}) => {

    const [flag,setflag]=useState(0)
    const [op,setop] =useState(0)

    const handleChange = e=> {
      setop(e.target.value)
    }

function About(props)
{
  if(props.selection===0 || props.selection==="0")
  {
  return (
     <div>
      
        <div class="tab-content" style={{postion:"absolute",top:"30%",left:"10%",padding:"0"}}>
    <div class="profile-container">
      <div class="cover-photo">
        <img src={nvspp} class="profile" />
      </div>
      <div class="profile-name">Nvsai M</div>
      <p class="about">Student at KLuniversity<br /> WebMaster at focus,KLU<br />Peer Mentor<br /> Y20 2020-2024</p>
     
      <div>
      <br />
      <br />
        <i> <a href="https://facebook.com/nvsai.m" class="icon-facebook mr-3"></a></i>
       <i> <a href="https://instagram.com/mnvsai/" class="icon-instagram mr-3"></a></i>
        <i> <a href="https://youtube.com" class="icon-youtube mr-3"></a></i>
       <i> <a href="https://twitter.com/nagavenkatasa18" class="icon-twitter mr-3"></a></i>
      </div>
    </div>

    <div class="profile-container">
      <div class="cover-photo">
        <img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" class="profile" />
      </div>
      <div class="profile-name">Vinay Ratna</div>
      <p class="about">User Interface Designer and<br />front-end developer</p>
     
      <div>
      <br />
      <br />
        <i> <a href="https://facebook.com" class="icon-facebook mr-3"></a></i>
       <i> <a href="https://instagram.com" class="icon-instagram mr-3"></a></i>
        <i> <a href="https://youtube.com" class="icon-youtube mr-3"></a></i>
       <i> <a href="https://twitter.com" class="icon-twitter mr-3"></a></i>
      </div>
    </div>

 <div class="profile-container">
      <div class="cover-photo">
        <img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" class="profile" />
      </div>
      <div class="profile-name">Karthikeya</div>
      <p class="about">User Interface Designer and<br />front-end developer</p>
     
      <div>
      <br />
      <br />
       <i> <a href="https://facebook.com" class="icon-facebook mr-3"></a></i>
       <i> <a href="https://instagram.com" class="icon-instagram mr-3"></a></i>
        <i> <a href="https://youtube.com" class="icon-youtube mr-3"></a></i>
       <i> <a href="https://twitter.com" class="icon-twitter mr-3"></a></i>
      </div>
    </div>


       </div>
       </div>
    );
}
else if(props.selection==="1")
{
  return (
     <div>
     
        <div class="tab-content" style={{height:"40rem",postion:"absolute",top:"30%",left:"10%",padding:"0",display: "flex",
          justifyContent: "center"
          }}>
          
        <text>
        <br />
        <br />
    <b><h1 style={{fontSize:"70px"}}>Our VISION</h1></b>
    <br />
    <br />
    <br />
    <br />
   <h2 style={{fontSize:"40px"}}><b>"we aim to personalise health care for everyone"</b></h2>
      
     </text>
    </div>
   
    </div>
    );
}
else if(props.selection==="2")
{
   return (
    <div>
     
        <div class="tab-content" style={{height:"40rem",postion:"absolute",top:"30%",left:"10%",padding:"0",display: "flex",
          justifyContent: "center"
          }}>
   <h1>Features</h1>
   </div>
   </div>
   );
}
}



    if(flag===0)
    {
     
    return (
    


<div class="body-home">
<div class="navcont">
        <img src={logo} class="img1"/>
        <div class="navcont2">
        <button onClick={()=>setflag(1)}>About</button>
       <button >Blog</button>
        </div>
        </div>
<ParticlesBg type="polygon" bg={true} />

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
else if(flag===1)
{

    return (
      <div>
      <div class="navcont">
        <img src={logo} class="img1"/>
        <div class="navcont2">
        <button onClick={()=>setflag(0)}>Home</button>
       <button >Blog</button>
        </div>
        </div>
        <ParticlesBg type="polygon" bg={true} />
        <center>
        <select  onChange={handleChange} style={{width:"10%",borderRadius:"20px",padding:"10px",backgroundColor:"#6D69FE",color:"white"}}>
        <option value="0">Team</option>
        <option value="1">Vision</option>
        <option value="2">Features</option>
        </select>
      <About selection={op} />
      </center>
      </div>
       
        );

  }
}


export default Homepage;