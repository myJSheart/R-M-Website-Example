import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import GuidesTitlePart from '/imports/ui/elements/forhomepage/GuidesTitlePart.jsx';
import GuidesSpecificationPart from '/imports/ui/elements/forhomepage/GuidesSpecificationPart.jsx';

class GuidesSubPage extends Component {
  render() {
    return (
      <Grid>
        <Cell col={3} tablet={4} phone={6}>
          <GuidesTitlePart />
        </Cell>
        <Cell col={9} tablet={4} phone={6}>
          <GuidesSpecificationPart />
        </Cell>
      </Grid>
    );
  }
}

export default GuidesSubPage;
