import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { TAPi18n } from 'meteor/tap:i18n';

class GuidesTitle extends Component {
  render() {
    return (
      <div className="sectionmain">
        <Grid>
          <Cell offsetDesktop={1} col={12} tablet={8} phone={6}>
            <div className="sectionborder">
              <h2 className="sectiontitle" style={{ color: 'white' }}>Guides</h2>
              <p style={{ color: 'white' }}>How to join us and become an excellent programmer</p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default GuidesTitle;
