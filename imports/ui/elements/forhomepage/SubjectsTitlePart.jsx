import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TAPi18n } from 'meteor/tap:i18n';
import { withRouter } from 'react-router';

class SubjectsTitlePart extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.router.push('/subjects');
  }

  render() {
    return (
      <div>
        <h3><b>{TAPi18n.__('elements.forhomepage.subjectstitlepart.title')}</b></h3>
        <p>{TAPi18n.__('elements.forhomepage.subjectstitlepart.content')}</p><br />
        <RaisedButton
          secondary
          label={TAPi18n.__('elements.forhomepage.subjectstitlepart.find')}
          onTouchTap={this.handleClick}
        />
      </div>
    );
  }
}

SubjectsTitlePart.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(SubjectsTitlePart);
