import React, { Component } from "react";
var FontAwesome = require("react-fontawesome");

export default class extends Component {

  render() {
    const loading = (
      <FontAwesome
        className='fas fa-circle-notch'
        name='circle'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    );

    return <div className="container m-5 p-5 text-center">{loading}</div>;
  }
}
