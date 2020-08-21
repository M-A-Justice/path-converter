/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Input } from '../styles/PathForm.stlye';

class PathForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const { value } = this.state;
    const { pathConvert } = this.props;
    pathConvert(value);
    this.setState({
      value: '',
    });
    e.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input type="text" id="path" placeholder="Please enter a file path!" value={value} onChange={this.handleChange} />
      </Form>
    );
  }
}

export default PathForm;
