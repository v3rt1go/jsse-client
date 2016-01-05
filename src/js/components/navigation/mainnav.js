'use strict';
import React from 'react';
import LeftMenu from './left-menu';
import RightMenu from './right-menu';

const MainNav = () => {
  return (
    <div className="ui attached small menu">
      <div className="ui container">
        <LeftMenu />
        <RightMenu />
      </div>
    </div>
  );
};

export default MainNav;
