import React, { Component, PropTypes } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';

class GuidesTitlePart extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.router.push('/guides');
  }

  render() {
    return (
      <div>
        <h3><b>{TAPi18n.__('elements.forhomepage.guidestitlepart.title')}</b></h3>
        <p>{TAPi18n.__('elements.forhomepage.guidestitlepart.content')}</p>
        <RaisedButton
          secondary
          label={TAPi18n.__('elements.forhomepage.guidestitlepart.find')}
          onTouchTap={this.handleClick}
        />
      </div>
    );
  }
}

GuidesTitlePart.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(GuidesTitlePart);
