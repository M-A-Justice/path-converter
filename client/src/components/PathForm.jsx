/* eslint-disable react/prop-types */
import React from 'react';

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
    e.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="path">
          <input type="text" id="path" value={value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default PathForm;
