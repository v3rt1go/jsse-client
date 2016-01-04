'use strict';
import React from 'react';

const LeftMenu = () => {
  return (
    <div className="left menu">
      <a href="/" className="header borderless item">
        <img src="images/logo-circle.png" className="logo plate" />
        <span className="caps"> ROMANIAN</span>
        <span className="cursive">Signature</span>
      </a>
      <a className="item borderless" href="#">
        <i className="facebook nav icon"></i>
      </a>
      <a className="item borderless" href="#">
        <i className="twitter nav icon"></i>
      </a>
      <a className="item borderless" href="#">
        <i className="pinterest nav icon"></i>
      </a>
    </div>
  );
};

export default LeftMenu;
