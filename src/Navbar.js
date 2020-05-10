import React, { Component } from "react";
import "./Navbar.css";
import "./css/bootstrap.min.css";

class Navbar extends Component {
  
  render() {
    var Create_Trip_Button = {
      marginRight: "15px",
      height: "40px",
      width: "150px",
      marginBottom: "0px",
      textAlign: "center",
      color: "##2980B9",
      backgroundColor: "FFFFFF",
      opacity: "1",
      fontSize: "12px",
      border: "1px solid #D5D5D5",
      borderRadius: "5px",
      opacity: "1",
    };
    return (
      <div className="navbar">
        <label>TRIP MANAGEMENT</label>
        <div>
        <input type="submit" value ="Create a Trip" style={Create_Trip_Button}/>
        <button type="button" className="btn btn-outline-dark" >Export</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
