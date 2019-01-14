import React from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  renderSignedIn() {

  }

  renderSignedOut() {
    return (
      <div>
        <button className='sign-up-button' type='button' onClick={this.props.openModal}>Sign Up</button>
        <button className='sign-in-button' type='button'>Sign Up</button>
      </div>
    );
  }

  render() {
    const { currentUser } = this.props;
    if (currentUser !== undefined) return this.renderSignedIn();
    return this.renderSignedOut();
  }
}

Navbar.propTypes = {
  currentUser: PropTypes.object,
};
