import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// route components
import App from '/imports/ui/layouts/App.jsx';
import NotFoundPage from '/imports/ui/pages/NotFoundPage.jsx';
import BlogPage from '/imports/ui/pages/BlogPage.jsx';
import GuidesPage from '/imports/ui/pages/GuidesPage.jsx';
import HomePage from '/imports/ui/pages/HomePage.jsx';
import SubjectsPage from '/imports/ui/pages/SubjectsPage.jsx';
import ReactCoursePage from '/imports/ui/pages/ReactCoursePage.jsx';

const Routers = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="home" component={HomePage} />
      <Route path="blog" component={BlogPage} />
      <Route path="guides" component={GuidesPage} />
      <Route path="subjects" component={SubjectsPage} />
        <Route path="/subjects/react" component={ReactCoursePage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);

export default Routers;
