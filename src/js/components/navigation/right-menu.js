'use strict';
import React from 'react';

const LeftMenu = () => {
  return (
    <div className="right menu">
      <div className="item">
        <div className="ui icon teal button" tabIndex="0">
          <div className="ui tiny floating circular red label">5</div>
          <i className="cart icon"></i>
          {/* TODO: Default text for no items in cart is: COSUL MEU */}
          <span className="cart-total">423 RON</span>
          {/* TODO: Add a submenu with all the items from the cart and total.
              Should be displayed when Cart button is hovered
          */}
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
