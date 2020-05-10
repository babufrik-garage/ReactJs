import React, { Component } from "react";
import iFilter from "./Icons/TMFilter.svg";
import Arrow from "./Icons/TMarrow.svg";

class Filter extends Component {
  render() {
    var div_style = {

    }
    var filter_image = {
      marginLeft: "18px",
      marginTop: "12px",
      height: "12px",
      width: "12px",
      backgroundImage: `url(${iFilter})`,
      marginBottom: "0px",
      color: "#707070",
    };
    var Filter_Text = {
      marginLeft: "6.66px",
      height: "17px",
      width: "61px",
      marginBottom: "0px",
      textAlign: "left",
      color: "#707070",
      opacity: "1",
      fontSize: "12px",
    };
    var Sort_Text = {
      marginLeft: "152px",
      height: "18px",
      width: "91px",
      marginBottom: "0px",
      textAlign: "left",
      color: "#707070",
      opacity: "1",
      fontSize: "12px",
    };
    var Sort_Image = {
      marginLeft: "7px",
      height: "5px",
      width: "5px",
      backgroundImage: `url(${Arrow})`,
      marginBottom: "0px",
      color: "#707070",
    };
    return (
      <div>
        <label style={filter_image} />
        <label style={Filter_Text}>Edit Filter</label>
        <label style={Sort_Text}>Sort by Recent</label>
        <label style={Sort_Image}/>
      </div>
    );
  }
}

export default Filter;
