import React from 'react';
import axios from 'axios';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { handle: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.currentTarget.id;
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    const { handle, password } = this.state;
    const data = { user: { handle, password } };
    alert(JSON.stringify(data));
    axios.post('https://chitter-backend-api.herokuapp.com/users', data)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Handle:
          <input type='text' id='handle' value={this.state.handle} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type='text' id='password' value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}
