import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Grid, Cell } from 'react-mdl';
import IntroductionTitlePart from '/imports/ui/elements/forhomepage/IntroductionTitlePart.jsx';
import IntroductionNewsPart from '/imports/ui/elements/forhomepage/IntroductionNewsPart.jsx';

class IntroductionSubPage extends Component {

  render() {
    const imgUrl = 'http://www.intrawallpaper.com/static/images/violet-vector-leaves-circles-backgrounds-for-powerpoint_PdfkI4q.jpg';
    return (
      <div style={{ height: '550px' }}>
        <div style={{ backgroundImage: `url(${imgUrl})`, height: '550px' }}>
          <Grid>
            <Cell col={8} tablet={8} phone={6}>
              <IntroductionTitlePart />
            </Cell>
            <Cell col={4} tablet={8} hidePhone>
              <div className="introductionnews">
                <IntroductionNewsPart />
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withRouter(IntroductionSubPage);
