import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Tabs, Tab } from 'material-ui/Tabs';
import { TAPi18n } from 'meteor/tap:i18n';
import SubscribeSubPart from '/imports/ui/elements/forhomepage/SubscribeSubPart.jsx';
import SubscribeRegisterPart from '/imports/ui/elements/forhomepage/SubscribeRegisterPart.jsx';

class SubscribeSubPage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#757575', width: '100%' }}>
        <Grid>
          <Cell offsetDesktop={3} col={6}>
            <Tabs inkBarStyle={{ backgroundColor: '#EEEEEE' }}>
              <Tab style={{ backgroundColor: '#BDBDBD' }} label={TAPi18n.__('pages.homesubpages.subscribesubpage.register')}>
                <SubscribeRegisterPart />
              </Tab>
              <Tab style={{ backgroundColor: '#BDBDBD' }} label={TAPi18n.__('pages.homesubpages.subscribesubpage.subscribe')}>
                <SubscribeSubPart />
              </Tab>
            </Tabs>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default SubscribeSubPage;
