'use strict';
import React from 'react';

class LanguageNavItem extends React.Component {
  componentDidMount() {
    $('.languageNav > .dropdown').dropdown();
  }

  render() {
    return (
      <div className="fitted item languageNav">
        <div className="ui top right pointing dropdown icon borderless basic item">
          <i className="fitted ro flag"></i> RO
          <div className="menu">
            <div className="item"><i className="ro flag"></i> Romana (RO)</div>
            <div className="item"><i className="gb flag"></i> English (UK)</div>
            <div className="item"><i className="us flag"></i> English (US)</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LanguageNavItem;
