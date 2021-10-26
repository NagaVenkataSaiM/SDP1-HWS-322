import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

class DocHome extends Component {
  render() {
    return (
       <div class="tabbing-content">
    
    <ul class="nav nav-pills" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="pill" href="#login">Appointments</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#regis">Lab Reports</a>
      </li>
    </ul>

    
    <div class="tab-content">
      <div id="appoint" class="container tab-pane active">
        <div class="card-container">
  <div class="card">
  <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image"></img>
  <p class="card__name">Patient-1</p>
  <p class="card__name">Syntomps: Fever,cold</p>
  <button class="card-btn card-draw-border">Treat</button>
  <br />
    <button class="card-btn card-draw-border">Reassign</button>
  </div>
  </div>
      </div>
      <div id="labrep" class="container tab-pane fade">
        
      </div>
    </div>
  </div>


    );
  }
}

export default DocHome;