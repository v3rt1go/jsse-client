'use strict';
import React from 'react';

const FavoritesSubmenu = () => {
  return (
    <div className="ui top right pointing dropdown basic button">
      <i className="red heart icon"></i>
      <div className="menu">
        <div className="item"><i className="heart icon"></i> Produse favorite</div>
        <div className="item"><i className="star icon"></i> Producatori favoriti</div>
        <div className="item"><i className="add icon"></i> Adauga lista noua</div>
      </div>
    </div>
  );
};

export default FavoritesSubmenu;
