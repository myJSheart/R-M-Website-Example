import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { themeSecret } from '/imports/ui/themes/Themes.jsx';
import NavigationBar from '/imports/ui/layouts/NavigationBar.jsx';
import Footer from '/imports/ui/layouts/Footer.jsx';
import SubscribeSubPage from '/imports/ui/pages/homesubpages/SubscribeSubPage.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <MuiThemeProvider muiTheme={themeSecret}>
          <div>
            <NavigationBar />
            {this.props.children}
            <SubscribeSubPage />
            <Footer />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
