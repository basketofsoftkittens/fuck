import React, { Component } from 'react';

export class Login extends Component {
  /* YOU CODE HERE */
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h1>
            Login
          </h1>
          <form>
            <label>
            Email:
              <input type="text" name="Email" />
            </label>
            <label>
            Password:
              <input type="text" name="Password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object,
};

Login.propTypes = {};

export default Login;
