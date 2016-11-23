import React, { Component, PropTypes } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router';

const tilesData = [
  {
    img: 'https://facebook.github.io/react/img/logo_og.png',
    title: 'Learn ReactJS',
    author: 'zcx',
    featured: true,
  },
  {
    img: 'https://developer.android.com/images/cards/android-studio_2x.png',
    title: 'Learn Android',
    author: 'd',
    featured: true,
  },
];

class IntroductionNewsPart extends Component {

  render() {
    return (
      <div
        style={{
          backgroundColor: '#424242',
        }}
      >
        <GridList
          cols={1}
          padding={1}
          cellHeight={230}
        >
          <Subheader><Link to={'/blog'}>From the Blog</Link></Subheader>
          {
            tilesData.map(tile => (
              <GridTile
                key={tile.img}
                title={<Link to={'/blog'}>{tile.title}</Link>}
                subtitle={<span>by <b>{tile.author}</b></span>}
              >
                <img src={tile.img} alt={tile.title} />
              </GridTile>
            ))
          }
        </GridList>
      </div>
    );
  }
}

IntroductionNewsPart.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default IntroductionNewsPart;
