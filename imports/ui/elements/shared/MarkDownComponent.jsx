import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import showdown from 'showdown';
import { Grid, Cell } from 'react-mdl';

class MarkDownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: '',
    };
    this.handleEditor = this.handleEditor.bind(this);
  }

  handleEditor(event) {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(event.target.value);
    console.log(html);
    this.setState({ preview: html });
  }

  render() {
    return (
      <Grid>
        <Cell col={6}>
          <TextField
            textareaStyle={{ color: 'red' }}
            multiLine
            rows={1000}
            floatingLabelText="Editor"
            onChange={this.handleEditor}
          />
        </Cell>
        <Cell col={6}>
          <div dangerouslySetInnerHTML={{ __html: this.state.preview }} />
        </Cell>
      </Grid>
    );
  }
}

export default MarkDownComponent;
