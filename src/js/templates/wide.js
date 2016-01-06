'use strict';
import React from 'react';
import MainNav from './../components/navigation/mainnav';

const WideTemplate = () => {
  return (
    <div className="ui">
      <MainNav />
      <img src="http://placehold.it/1920x600.jpg" width="100%" />
    </div>
  );
};

export default WideTemplate;
