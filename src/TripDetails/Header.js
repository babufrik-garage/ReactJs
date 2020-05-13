import React, { Component } from "react";
import Delay from "../Icons/TMdelay.svg";
export default class Header extends Component {
  render() {
    const head_Style = {
      width: " 923px",
      height: " 130px",
      background: " #FFFFFF 0% 0% no-repeat padding-box",
      border: " 1px solid #E5E5E5",
      borderRadius: " 5px",
    };
    var Delay_Image_Style = {
        marginLeft: "40px",
        marginTop: "28.5px",
        marginBottom: "0px",
        backgroundImage: `url(${Delay})`,
        width: "12px",
        height: "12px",
      };
    return (
    <div style={head_Style}>
        <p style={{marginLeft:"40px",marginTop:"20px",textAlign:"left"}}>
        MH 47 TT 4561 on Delhivery BLR Soukya Road Gateway - Delhivery BLR-Nelmangala Hub
        </p>
        <p style={{width:"843px",marginLeft:"41px",border:"1px solid #E5E5E5",height:"1.1px"}}></p>
        <p><label style={{Delay_Image_Style}} /></p>
    </div>);
  }
}
