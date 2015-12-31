'use strict';
import React from 'react';
import MainNav from './../components/navigation/mainnav';

const WideTemplate = () => {
  return (
    <div className="ui">
      <MainNav />
      <img src="http://placehold.it/500x800.jpg" />

      <div className="ui mini positive button" tabindex="0">
        <i className="cart icon"></i>
        TOTAL 0 RON 
      </div>
    </div>
  );
};

export default WideTemplate;
