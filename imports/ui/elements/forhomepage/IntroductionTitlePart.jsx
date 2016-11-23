import React, { Component } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';

class IntroductionTitlePart extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: 'white' }} >{TAPi18n.__('elements.forhomepage.introductionpart.slogan')}</h1>
        <h4 style={{ color: 'white' }} >{TAPi18n.__('elements.forhomepage.introductionpart.introduction')}</h4>
      </div>
    );
  }
}

export default IntroductionTitlePart;
