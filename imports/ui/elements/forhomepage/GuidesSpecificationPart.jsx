import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Card, Carousel } from 'antd';
import { TAPi18n } from 'meteor/tap:i18n';
import { Link } from 'react-router';
import 'antd/dist/antd.css';

class GuidesSpecificationPart extends Component {
  render() {
    return (
      <Grid>
        <Cell col={6} tablet={8} phone={6}>
          <Card title={<Link to={'/guides/a'}>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.one.title')}</Link>}>
            <Carousel>
              <div><h3>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.one.content.one')}</h3></div>
              <div><h3>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.one.content.two')}</h3></div>
            </Carousel>
          </Card>
        </Cell>
        <Cell col={6} tablet={8} phone={6}>
          <Card title={<Link to={'/guides/a'}>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.two.title')}</Link>}>
            <Carousel>
              <div><h3>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.two.content.one')}</h3></div>
              <div><h3>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.two.content.two')}</h3></div>
              <div><h3>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.two.content.three')}</h3></div>
            </Carousel>
          </Card>
        </Cell>
        <Cell col={6} tablet={8} phone={6}>
          <Card title={<Link to={'/guides/a'}>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.two.title')}</Link>}>
            <Carousel>
              <div><h3>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.two.content.one')}</h3></div>
            </Carousel>
          </Card>
        </Cell>
        <Cell col={6} tablet={8} phone={6}>
          <Card title={<Link to={'/guides/a'}>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.two.title')}</Link>}>
            <Carousel>
              <div><h3>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.two.content.one')}</h3></div>
              <div><h3>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.two.content.one')}</h3></div>
              <div><h3>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.two.content.two')}</h3></div>
              <div><h3>{TAPi18n.__('elements.forhomepage.guidesspecificationpart.two.content.three')}</h3></div>
            </Carousel>
          </Card>
        </Cell>
      </Grid>
    );
  }
}

export default GuidesSpecificationPart;
