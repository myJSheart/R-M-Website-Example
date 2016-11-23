import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import SubjectsTitlePart from '/imports/ui/elements/forhomepage/SubjectsTitlePart.jsx';
import SubjectsSuggestCoursesPart from '/imports/ui/elements/forhomepage/SubjectsSuggestCoursesPart.jsx';

class SubjectSubPart extends Component {
  render() {
    return (
      <Grid>
        <Cell col={3} tablet={8} phone={6}>
          <SubjectsTitlePart />
        </Cell>
        <Cell col={9} tablet={8} phone={6}>
          <div className="subjectlists">
            <SubjectsSuggestCoursesPart />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default SubjectSubPart;
