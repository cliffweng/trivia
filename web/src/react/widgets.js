import React from 'react';
import {FormControl,FormGroup, Form} from 'react-bootstrap';

class FormSelect extends React.Component {
    render() {
      return <FormGroup >
      <FormControl  as="select" onChange={this.props.onChange}>
      {this.props.options.map((item) => <option key={item} value={item}>{item}</option>)}
      </FormControl>
      </FormGroup>;
    }
}
class SignOn extends React.Component {
  render() {
    return <FormGroup >
    <FormControl  as="select" onChange={this.props.onChange}>
    {this.props.options.map((item) => <option key={item} value={item}>{item}</option>)}
    </FormControl>
    </FormGroup>;
  }
}
export {FormSelect, SignOn}