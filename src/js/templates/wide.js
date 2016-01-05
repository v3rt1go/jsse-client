'use strict';
import React from 'react';
import MainNav from './../components/navigation/mainnav';

const WideTemplate = () => {
  return (
    <div className="ui">
      <MainNav />
      <img src="http://placehold.it/1920x600.jpg" width="100%" />

      <div className="ui icon buttons">
        <div class="ui top left pointing dropdown button">
          <i className="user icon"></i>
          <div className="menu">
            <div className="item"><i className="edit icon"></i>Edit User</div>
            <div className="item"><i className="delete icon"></i>Remove User</div>
            <div className="item"><i className="hide icon"></i>Make Invisible</div>
          </div>
        </div>
        <div className="ui top left pointing dropdown button">
          <i className="users icon"></i>
          <div className="menu">
            <div className="item"><i className="edit icon"></i>Edit Group</div>
            <div className="item"><i className="delete icon"></i>Remove Group</div>
            <div className="item"><i className="hide icon"></i>Hide from Group</div>
          </div>
        </div>
        <div className="ui top right pointing dropdown button">
          <i className="settings icon"></i>
          <div className="menu">
            <div className="item"><i className="edit icon"></i> Edit</div>
            <div className="item"><i className="delete icon"></i> Remove</div>
            <div className="item"><i className="hide icon"></i> Hide</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WideTemplate;
