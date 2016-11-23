import React, { Component, PropTypes } from 'react';

const mainStyle = { border: '1px solid #a1a1a1', borderRadius: '5px', height: '100%', boxShadow: '2px 2px #a1a1a1' };
const LeftStyle = { display: 'inline-block', float: 'left', height: '100%' };
const RightStyle = { paddingLeft: '10px', display: 'inline-block', height: '100%', float: 'left', borderLeft: '1px solid #EEEEEE' };
const AboveStyle = { width: '100%' };
const BottomStyle = { width: '100%', padding: '10px 5px 10px 10px' };

class MaterialCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vertical: this.props.Vertical,
      style: this.props.style || mainStyle,
      LeftAboveStyle: this.props.LeftAboveStyle,
      RightBottomStyle: this.props.RightBottomStyle,
      LeftAboveElement: this.props.LeftAboveElement || (<div />),
      RightBottomElement: this.props.RightBottomElement || (<div />),
    };
  }

  render() {
    const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    if (width < 600) {
      this.setState({ vertical: true });
    }

    const componentStyle = this.state.style || mainStyle;
    let LeftAboveStyle;
    let RightBottomStyle;

    if (this.state.vertical) {
      LeftAboveStyle = this.state.LeftAboveStyle || AboveStyle;
      RightBottomStyle = this.state.RightBottomStyle || BottomStyle;
    } else {
      LeftAboveStyle = this.state.LeftAboveStyle || LeftStyle;
      RightBottomStyle = this.state.RightBottomStyle || RightStyle;
    }

    return (
      <div style={componentStyle}>
        <div style={LeftAboveStyle}>
          {this.state.LeftAboveElement}
        </div>
        <div style={RightBottomStyle}>
          {this.state.RightBottomElement}
        </div>
      </div>
    );
  }
}

MaterialCards.propTypes = {
  Vertical: PropTypes.bool.isRequired,
  style: PropTypes.object,
  LeftAboveStyle: PropTypes.object,
  RightBottomStyle: PropTypes.object,
  LeftAboveElement: PropTypes.element.isRequired,
  RightBottomElement: PropTypes.element.isRequired,
};

export default MaterialCards;
