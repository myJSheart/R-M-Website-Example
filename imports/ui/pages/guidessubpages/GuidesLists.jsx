import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Checkbox from 'material-ui/Checkbox';
import MaterialCards from '/imports/ui/elements/shared/MaterialCards.jsx';

class GuidesLists extends Component {
  render() {
    const rightElement = (
      <div>
        <h2>How to learn with us</h2>
        <div style={{ paddingTop: '5px', fontSize: '16px' }}>This page gives a brief introduction about how to learn with us. This page is a sample page for guides
        </div>
      </div>);
    return (
      <Grid>
        <Cell offsetDesktop={1} col={2}>
          <h3>Guides Sections</h3>
          <Checkbox labelStyle={{ fontSize: '18px', color: 'black' }} label="Introduction" />
          <Checkbox labelStyle={{ fontSize: '18px', color: 'black' }} label="Courses" />
          <Checkbox labelStyle={{ fontSize: '18px', color: 'black' }} label="How to Use" />
        </Cell>
        <MaterialCards
          Vertical={false}
          LeftAboveElement={<img width="150px" src="/resources/logo.png" alt="SQ" />}
          RightBottomElement={rightElement}
        />
      </Grid>
    );
  }
}

export default GuidesLists;
