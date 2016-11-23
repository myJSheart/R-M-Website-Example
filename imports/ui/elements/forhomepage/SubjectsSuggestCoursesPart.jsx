import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Chip, ChipContact } from 'react-mdl';
import _ from 'underscore';
import { Link } from 'react-router';
// import Chip from 'material-ui/Chip';

const cardData = [
  {
    user: {
      name: 'zcx',
      unit: {
        name: 'unimelb',
        url: 'http://www.unimelb.edu.au/',
      },
      avatar: 'https://freeiconshop.com/files/edd/person-outline-filled.png',
      url: 'zcx',
    },
    subject: {
      title: 'Learn ReactJS',
      tags: [
        { tag: 'Javascript' },
        { tag: 'ReactJS' },
        { tag: 'MeteorJS' },
        { tag: 'front-end' },
        { tag: 'Web Developer' },
      ],
      img: 'https://facebook.github.io/react/img/logo_og.png',
      content: 'I am the developer of this web-site. Learn ReactJS with me!',
      url: 'reactjs',
    },
  },
  {
    user: {
      name: 'd',
      unit: {
        name: 'unimelb',
        url: 'http://www.unimelb.edu.au/',
      },
      url: 'd',
    },
    subject: {
      title: 'Learn Android',
      tags: [
        { tag: 'Android' },
        { tag: 'Framework' },
        { tag: 'Mobile Development' },
      ],
      img: 'https://developer.android.com/images/cards/android-studio_2x.png',
      content: 'I am professional in Android Development. Learn Android with me!',
      url: 'android',
    },
  },
];

class SubjectsSuggestCoursePart extends Component {

  render() {
    if (_.isUndefined(cardData) || _.isNull(cardData) || cardData.length === 0) {
      return (<div>No Sugested Subjects!</div>);
    }
    return (
      <Grid>
        {
          cardData.map((card, index) =>
            <div>
              <Cell col={6} tablet={8} phone={6} key={`SubjectsSuggestCourse${index}`}>
                <Card shadow={0} style={{ height: '300px' }}>
                  <CardTitle
                    style={{ height: '160px', background: `url(${card.subject.img}) center / cover` }}
                  >
                    <Link style={{ color: 'white', fontSize: '80%', marginBottom: '-100px' }} to={`/subjects/${card.subject.url}`}>{card.subject.title}</Link>
                  </CardTitle>
                  <CardText>
                    {card.subject.content}
                  </CardText>
                  <CardActions border>
                    {card.subject.tags.map((tag, i) => (
                      <Chip key={`Tag${i}`}>{tag.tag}</Chip>
                    ))}
                  </CardActions>
                  <CardMenu>
                    <Chip><ChipContact style={{ background: `url(${card.user.avatar}) 0 0 /cover` }} /><Link style={{ color: 'black' }} to={`/users/${card.user.url}`}>{card.user.name}</Link></Chip>
                  </CardMenu>
                </Card>
              </Cell>
            </div>
          )
        }
      </Grid>
    );
  }
}

export default SubjectsSuggestCoursePart;
