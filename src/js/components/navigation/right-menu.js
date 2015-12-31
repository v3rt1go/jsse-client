'use strict';
import React from 'react';

const LeftMenu = () => {
  return (
    <div className="right menu">
      <div className="item">
        <div className="ui icon positive button" tabindex="0">
          <div className="ui tiny floating circular red label">5</div>
          <i className="cart icon"></i>
          {/* TODO: Default text for no items in cart is: COSUL MEU */}
          <span className="cart-total">423 RON</span>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
