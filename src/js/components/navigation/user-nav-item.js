'use strict';
import React from 'react';
import AccountSubmenu from './user/account-submenu';
import MailSubmenu from './user/mail-submenu';
import FavoritesSubmenu from './user/favorites-submenu';
import SellerSubmenu from './user/seller-submenu';

class UserNavItem extends React.Component {
  componentDidMount() {
    $('.userNav .dropdown').dropdown({
      on: 'hover'
    });
  }

  render() {
    return (
      <div className="item userNav">
        <div className="ui icon buttons">
          <AccountSubmenu />
          <MailSubmenu />
          <FavoritesSubmenu />
          <SellerSubmenu />
        </div>
        <div className="basic borderless icon buttons">
          <button className="ui basic borderless icon button"><i className="add user icon"></i> Cont Nou</button>
          <button className="ui basic borderless icon button"><i className="lock icon"></i> Login</button>
        </div>
      </div>
    );
  }
}

export default UserNavItem;
