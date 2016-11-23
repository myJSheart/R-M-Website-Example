import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <div className="mdl-logo">fi:O</div>
          <ul className="mdl-mini-footer__link-list">
            <li><a>Help</a></li>
            <li><a>Privacy & Terms</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
