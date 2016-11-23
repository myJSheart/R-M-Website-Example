import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routers from '/imports/ui/layouts/Routers.jsx';
// import App from '/imports/ui/layouts/App.jsx';
injectTapEventPlugin();

Meteor.startup(() => {
  render(<Routers />, document.getElementById('render-target'));
});
