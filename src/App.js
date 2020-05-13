import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Filter from "./Filter";
import TripDetails from "./TripDetails";
import "./css/bootstrap.min.css";
function App() {
  const menu_style = {
    width: "376px",
    height: "40px",
    background: " #FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #E5E5E5",
    opacity: "1",
  };
  const menu_Details_style = {
    width: "376px",
    background: " #F9F9F9 0% 0% no-repeat padding-box",
    border: "1px solid #E5E5E5",
    opacity: "1",
  };
  return (
    <div className="container">
      <div className="row">
        <Navbar></Navbar>
      </div>
      <div className="row" style={{ gridColumnGap: "0px" }}>
        <div
          className="col-md-4"
          style={{ width: "376px", gridColumnGap: "0px" }}
        >
          <div className="row" style={menu_style}>
            <Filter />
          </div>
          <div className="row" style={menu_Details_style}>
            <Card />
          </div>
        </div>
        <div
          className="col"
          style={{
            background: "#F9F9F9 0% 0% no-repeat padding-box",
            width: "990px",
          }}
        >
          <div className="row">
            <TripDetails></TripDetails>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
