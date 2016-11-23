import React, { Component } from 'react';
import SubjectsTitle from '/imports/ui/pages/subjectssubpages/SubjectsTitle.jsx';
import SubjectsList from '/imports/ui/pages/subjectssubpages/SubjectsList.jsx';

class SubjectsPage extends Component {
  render() {
    return (
      <div>
        <SubjectsTitle />
        <SubjectsList />
      </div>
    );
  }
}

export default SubjectsPage;
