'use strict';
import React from 'react';

const MailSubmenu = () => {
  return (
    <div className="ui top left pointing dropdown basic button">
      <i className="icons">
        <i className="mail icon"></i>
        <i className="corner green add icon"></i>
      </i>
      <div className="menu">
        <a className="active item">
          <i className="inbox icon"></i>
          <span className="description">(1)</span>
          <span className="text">Inbox</span>
        </a>
        <a className="item">
          <i className="send icon"></i>
          <span className="description">(1)</span>
          <span className="text">Trimise</span>
        </a>
        <a className="item">
          <i className="archive icon"></i>
          <span className="description">(1)</span>
          <span className="text">Arhivate</span>
        </a>
        <div className="item">
          <div className="ui transparent icon input">
            <input type="text" placeholder="Cauta mesaje..." />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailSubmenu;
