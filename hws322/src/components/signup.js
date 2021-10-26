import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

class Signup extends Component {
  render() {
    return (
      <div class="body-home">
      <h>signup</h>
      <p>
          <Link to="/dochome"  class="btn btn-block btn-primary">DocHome</Link>  
          </p>
          </div>
    );
  }
}

export default Signup;