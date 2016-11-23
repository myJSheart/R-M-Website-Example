import React, { Component } from 'react';
import GuidesTitle from '/imports/ui/pages/guidessubpages/GuidesTitle.jsx';
import GuidesLists from '/imports/ui/pages/guidessubpages/GuidesLists.jsx';

class GuidesPage extends Component {

  render() {
    return (
      <div>
        <GuidesTitle />
        <GuidesLists />
      </div>
    );
  }
}

export default GuidesPage;
