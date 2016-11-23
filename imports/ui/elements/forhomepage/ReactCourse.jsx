import React, { Component } from 'react';
import { Link } from 'react-router';
import { TAPi18n } from 'meteor/tap:i18n';

class ReactCourse extends Component {
  render() {
    return (
      <div className={'subject'}>
        <Link to={'/subjects/react'}>
          <div className={'subject-header'} style={{ backgroundImage: 'url(resources/react-background.jpg)' }}>
            <h3
              className={'subject-title'}
              style={{ color: 'white',
              paddingLeft: '30px',
              paddingTop: '20px',
              paddingBottom: '5px',
              fontFamily: 'Comic Sans MS, cursive, sans-serif',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '30px' }}
            >
              {TAPi18n.__('pages.subjectspage.subjectslist.subjectitem.react')}
            </h3>
          </div>
        </Link>
        <div className={'subject-body'}>
          {TAPi18n.__('pages.subjectspage.subjectslist.subjectitem.reactbody')}
        </div>
        <div className={'subject-footer'}>
          <span>
            <Link className={'subject-related-tags'} to={'subjects/react/schedule'}>
              Course Schedule
            </Link>
          </span>
          <span>
            <Link className={'subject-related-tags'} to={'subjects/react/target'}>
              Course Target
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default ReactCourse;
