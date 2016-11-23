import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import { Grid, Cell } from 'react-mdl';
import IntroductionSubPage from '/imports/ui/pages/homesubpages/IntroductionSubPage.jsx';
import SubjectSubPage from '/imports/ui/pages/homesubpages/SubjectSubPage.jsx';
import GuidesSubPage from '/imports/ui/pages/homesubpages/GuidesSubPage.jsx';

class HomePage extends Component {
  render() {
    const dividerStyle = {
      height: '1px',
      backgroundColor: '#9E9E9E',
      opacity: '0.54',
    };
    return (
      <div>
        <IntroductionSubPage />
        <Divider />
        <Grid shadow={3}>
          <Cell col={10} tablet={8} phone={6} offsetDesktop={1} offsetTablet={0} offsetPhone={0}>
            <GuidesSubPage />
            <Divider style={dividerStyle} />
            <SubjectSubPage />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
