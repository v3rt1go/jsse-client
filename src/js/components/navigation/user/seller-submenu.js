'use strict';
import React from 'react';

const SellerSubmenu = () => {
  return (
    <div className="ui top right pointing dropdown basic button">
      <i className="teal cube icon"></i>
      <div className="menu">
        <div className="item"><i className="edit icon"></i> Profil vanzator</div>
        <div className="item"><i className="cube icon"></i> Administrare produse</div>
        <div className="item"><i className="bar chart icon"></i> Rapoarte</div>
      </div>
    </div>
  );
};

export default SellerSubmenu;
