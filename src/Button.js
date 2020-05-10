import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css'

class Button extends Component {

    render(){
        return (
        <button type="button" className={this.props.class} >{this.props.name}</button>
        );
    }
}

export default Button;