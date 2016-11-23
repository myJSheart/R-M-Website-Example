import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid, Cell } from 'react-mdl';

class NotFoundPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Grid>
          <Cell>
            <img src="resources/logo.png" alt="not found" />
            <h1>Ops, Your Page is Gone</h1>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default createContainer(() => {
  const appData = {};
  return appData;
}, NotFoundPage);
