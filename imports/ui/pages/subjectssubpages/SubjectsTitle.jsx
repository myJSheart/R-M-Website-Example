import React, { Component } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
import { Grid, Cell } from 'react-mdl';

class SubjectsTitle extends Component {
  render() {
    return (
      <div className="sectionmain">
        <Grid>
          <Cell offsetDesktop={1} col={12} tablet={8} phone={6}>
            <div className="sectionborder">
              <h2 className="sectiontitle" style={{ color: 'white' }}>{TAPi18n.__('pages.subjectspage.subjectstitle.title')}</h2>
              <p style={{ color: 'white' }}>{TAPi18n.__('pages.subjectspage.subjectstitle.content')}</p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default SubjectsTitle;
