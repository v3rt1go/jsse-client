'use strict';
import React from 'react';

const AccountSubmenu = () => {
  return (
    <div className="ui top left pointing dropdown basic button">
      <i className="user icon"></i>
      <div className="menu">
        <div className="item"><i className="edit icon"></i>Preferinte cont</div>
        <div className="item"><i className="marker icon"></i>Adrese de livrare</div>
        <div className="item"><i className="lock icon"></i>Resetare parola</div>
      </div>
    </div>
  );
};

export default AccountSubmenu;
