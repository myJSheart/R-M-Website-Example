import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ReactCourse from '/imports/ui/elements/forhomepage/ReactCourse.jsx';

class SubjectsList extends Component {
  render() {
    return (
      <Grid>
        <Cell col={5} offsetDesktop={1} tablet={8} phone={6} >
          <ReactCourse />
        </Cell>
      </Grid>
    );
  }
}

export default SubjectsList;
