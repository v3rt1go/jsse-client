'use strict';
import React from 'react';
import LanguageNavItem from './language-nav-item';
import UserNavItem from './user-nav-item';
import CartNavItem from './cart-nav-item';

const LeftMenu = () => {
  return (
    <div className="right menu">
      <LanguageNavItem />
      <UserNavItem />
      <CartNavItem />
    </div>
  );
};

export default LeftMenu;
