import React, { Component } from 'react';
import { Step, Stepper, StepButton } from 'material-ui/Stepper';
import { TAPi18n } from 'meteor/tap:i18n';
import { Grid, Cell } from 'react-mdl';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import showdown from 'showdown';

class ReactCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0,
    };
    this.getStepContent = this.getStepContent.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  getStepContent(step) {
    let mdContent;
    switch (step) {
      case 0:
        mdContent = '[React](https://facebook.github.io/react/) is a Javascript library which is developed and promoted by Facebook. As a UI library, it is used at Facebook in production, and Instagram.com is written entirely in React. Nowadays, it has become one of the most popular tools to develop UI as it can render DOM at both client and server sides. </br> </br> Our courses aim to help you become  proficient and effective with React and other Javascript libraries and framework. After these courses, you will be able to build a web-site including server side. This will become your first step to a full stack.';
        break;
      case 1:
        mdContent = '';
        break;
      default:
        mdContent = `__${TAPi18n.__('pages.reactcoursepage.ongoing')}__`;
    }
    const converter = new showdown.Converter();
    const html = converter.makeHtml(mdContent);
    return html;
  }

  handleBack() {
    this.setState((prevState) => {
      return { stepIndex: prevState.stepIndex - 1 };
    });
  }

  handleNext() {
    this.setState((prevState) => {
      return { stepIndex: prevState.stepIndex + 1 };
    });
  }

  render() {
    const { stepIndex } = this.state;
    return (
      <Grid>
        <Cell col={12} tablet={8} phone={6}>
          <div style={{ position: 'relative' }}>
            <img src="/resources/react-background.jpg" alt="React" style={{ height: '200px', width: '100%' }} />
            <div style={{ color: 'white', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%', fontSize: '24px', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
              React
            </div>
          </div>
        </Cell>
        <Cell offsetDesktop={1} col={10} tablet={8} hidePhone>
          <Stepper linear={false} activeStep={stepIndex}>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 0 })}>{TAPi18n.__('pages.reactcoursepage.introduction')}</StepButton>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 1 })}>{TAPi18n.__('pages.reactcoursepage.target')}</StepButton>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 2 })}>{TAPi18n.__('pages.reactcoursepage.schedule')}</StepButton>
            </Step>
          </Stepper>
        </Cell>
        <Cell offsetDesktop={2} col={8} tablet={8} phone={6}>
          <div dangerouslySetInnerHTML={{ __html: this.getStepContent(this.state.stepIndex) }} />
        </Cell>
        <Cell col={1} tablet={1} phone={1} offsetDesktop={2}>
          <FlatButton
            style={{ color: '#F5F5F5', disabledTextColor: '#FAFAFA' }}
            labelStyle={{ color: 'black' }}
            disabled={stepIndex === 0}
            label={TAPi18n.__('pages.reactcoursepage.back')}
            onTouchTap={this.handleBack}
          />
        </Cell>
        <Cell col={1} tablet={1} phone={1} offsetDesktop={6} offsetTablet={6} offsetPhone={1}>
          <RaisedButton
            disabled={stepIndex === 2}
            label={TAPi18n.__('pages.reactcoursepage.next')}
            onTouchTap={this.handleNext}
          />
        </Cell>
      </Grid>
    );
  }
}

export default ReactCoursePage;
