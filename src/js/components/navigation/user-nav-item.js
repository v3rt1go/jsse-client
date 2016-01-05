'use strict';
import React from 'react';

const UserNavItem = () => {
  return (
    <div className="item userNav">
      <a class="ui dropdown item">
        Messages
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item">
            <i class="dropdown icon"></i>
            <span class="text">Categories</span>
            <div class="menu">
              <div class="item">Unread</div>
              <div class="item">Promotions</div>
              <div class="item">Updates</div>
            </div>
          </div>
          <div class="item">Archive</div>
        </div>
      </a>
      {/*<div className="ui basic icon buttons">
        <button className="ui button"><i className="user icon"></i></button>
        <button className="ui button">
          <i className="icons">
            <i className="mail icon"></i>
            <i className="corner green add icon"></i>
          </i>
        </button>
        <button className="ui button">
          <i className="icons">
            <i className="red heart icon"></i>
            <i className="corner green add icon"></i>
          </i>
        </button>
        <button className="ui button"><i className="teal cube icon"></i></button>
      </div>*/}
      <div className="ui basic icon buttons">
        <button className="ui button"><i className="add user icon"></i> Cont Nou</button>
        <button className="ui button"><i className="lock icon"></i> Login</button>
      </div>
    </div>
  );
};

export default UserNavItem;
