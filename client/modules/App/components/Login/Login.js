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
