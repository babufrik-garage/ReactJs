import React, { Component } from "react";
import "./css/bootstrap.min.css";
import Vehicle from "./TMVehicle.svg";
import Person from "./Icons/TMDriver.svg";
import Source from "./Icons/TMSource.svg";
import Destination from "./Icons/TMDestination.svg";
import Delay from "./Icons/TMdelay.svg";
import Skipped from "./Icons/TMskipped.svg";
class Card extends Component {
  render() {
    var card_style = {
      marginRight: "18px",
      marginLeft: "18px",
      marginTop: "18px",
      marginBottom: "18px",
      width: "340px",
      height: "330px",
      background: " #F8FBFC 0% 0% no-repeat padding-box",
      fontFamily: "Open Sans",
      border: "1px solid #E5E5E5",
      opacity: "1",
    };
    var Bus_Image_Style = {
      marginLeft: "21px",
      marginTop: "20px",
      marginBottom: "0px",
      backgroundImage: `url(${Vehicle})`,
      width: "12px",
      height: "12px",
    };
    var Vehicle_Number_Style = {
      marginLeft: "7px",
      marginBottom: "0px",
      height: "18px",
      textAlign: "left",
      letterSpacing: "0px",
      color: "#707070",
      opacity: "1",
      fontSize: "13px",
    };
    var Person_Image_Style = {
      marginLeft: "21px",
      marginTop: "13px",
      marginBottom: "0px",
      backgroundImage: `url(${Person})`,
      width: "12px",
      height: "12px",
    };
    var Bill_Number_Style = {
      marginLeft: "7px",
      marginTop: "10px",
      height: "18px",
      marginBottom: "0px",
      textAlign: "left",
      color: "#707070",
      opacity: "1",
      fontSize: "13px",
    };
    var Travel_detail_style = {
      fontWeight: "SemiBold",
      marginLeft: "21px",
      marginTop: "24px",
      width: "240px",
      marginBottom: "0px",
      height: "36px",
      textAlign: "left",
      color: "#707070",
      opacity: "1",
      fontSize: "13px",
    };
    var Source_Image_Style = {
      marginLeft: "21px",
      marginTop: "10px",
      marginBottom: "0px",
      backgroundImage: `url(${Source})`,
      width: "12px",
      height: "12px",
    };
    var Travel_Origin_style = {
      marginLeft: "7px",
      height: "18px",
      marginBottom: "0px",
      textAlign: "left",
      color: "#707070",
      opacity: "1",
      fontSize: "13px",
    };
    var Travel_Origin_time_style = {
      marginLeft: "44px",
      marginTop: "7px",
      height: "15px",
      marginBottom: "0px",
      textAlign: "left",
      fontColor: "#A0A0A0",
      opacity: "1",
      fontSize: "11px",
    };
    var Travel_Origin_Label_Stat = {
      marginLeft: "10px",
      marginTop: "5px",
      width: "75px",
      height: "20px",
      marginBottom: "0px",
      textAlign: "center",
      backgroundColor: "#2ECC71",
      borderRadius: "5px",
      opacity: "1",
      fontSize: "11px",
      color: "#FFFFFF",
    };
    var Destination_Image_Style = {
      marginLeft: "21px",
      marginTop: "24px",
      marginBottom: "0px",
      backgroundImage: `url(${Destination})`,
      width: "12px",
      height: "12px",
    };
    var Travel_Destination_style = {
      marginLeft: "7px",
      height: "18px",
      marginBottom: "0px",
      textAlign: "left",
      color: "#707070",
      opacity: "1",
      fontSize: "13px",
    };
    var Travel_Destination_time_style = {
      marginLeft: "44px",
      marginTop: "7px",
      height: "15px",
      marginBottom: "0px",
      textAlign: "left",
      fontColor: "#A0A0A0",
      opacity: "1",
      fontSize: "11px",
    };
    var Travel_Destination_Label_Stat = {
      marginLeft: "10px",
      marginTop: "5px",
      width: "89px",
      height: "20px",
      marginBottom: "0px",
      textAlign: "center",
      backgroundColor: "#E74C3C",
      borderRadius: "5px",
      opacity: "1",
      fontSize: "11px",
      color: "#FFFFFF",
    };
    var seperator = {
      marginTop: "18.5px",
      marginLeft: "20.5px",
      marginBottom: "0px",
      width: "300px",
      height: "0px",
      border: "1.2px solid #E5E5E5",
      opacity: "1",
    };
    var margin = {
      marginBottom: "0px",
    };
    var Delay_Image_Style = {
      marginLeft: "21px",
      marginTop: "11.5px",
      marginBottom: "0px",
      backgroundImage: `url(${Delay})`,
      width: "12px",
      height: "12px",
    };
    var delay_information = {
      marginLeft: "10px",
      marginTop: "10.5px",
      height: "18px",
      marginBottom: "0px",
      textAlign: "left",
      color: "#707070",
      opacity: "1",
      fontSize: "13px",
      fontFamily: "Open Sans",
      fontWeight: "SemiBold"
    };
    var Skipped_Image_Style = {
      marginLeft: "52px",
      marginTop: "11.5px",
      marginBottom: "0px",
      backgroundImage: `url(${Skipped})`,
      width: "12px",
      height: "12px",
    };
    var stop_information = {
      marginLeft: "8.83px",
      marginTop: "10.5px",
      height: "18px",
      marginBottom: "0px",
      textAlign: "left",
      color: "#707070",
      opacity: "1",
      fontSize: "13px",
    };
    return (
      <div style={card_style}>
        <p style={margin}>
        <label style={Bus_Image_Style} />
        <label style={Vehicle_Number_Style}>MH 12 NR 9281</label>
        </p>
        <p style={margin}>
        <label style={Person_Image_Style} />
        <label style={Bill_Number_Style}>IBL00975456</label>
        </p>
        <label style={Travel_detail_style}>
          Delhivery BLR-Soukya Road GateWay - Delhivery BLR-Nelmangala Hub
        </label>
        <p style={margin}>
        <label style={Source_Image_Style} />
        <label style={Travel_Origin_style}>
          Delhivery BLR-Soukya Road GateWay
        </label>
        </p>
        <p style={margin}>
        <label style={Travel_Origin_time_style}>Feb 21st, 03:13PM</label>
        <label style={Travel_Origin_Label_Stat}>On Time</label>
        </p>
        <label style={Destination_Image_Style} />
        <label style={Travel_Destination_style}>
          Delhivery BLR-Nelmangala Hub
        </label>
        <label style={Travel_Destination_time_style}>Feb 21st, 03:13PM</label>
        <label style={Travel_Destination_Label_Stat}>34 min Delay</label>
        <div style={seperator}></div>
        <label style={Delay_Image_Style} />
        <label style={delay_information}>Delay at 5 stops</label>
        <label style={Skipped_Image_Style} />
        <label style={stop_information}>1 Stop skipped</label>
      </div>
    );
  }
}

export default Card;
