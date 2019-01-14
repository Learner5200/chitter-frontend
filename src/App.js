import React from 'react';

import Navbar from './Navbar';
import SignUpModal from './SignUpModal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpModalIsOpen: false,
    };
    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.closeSignUpModal = this.closeSignUpModal.bind(this);
  }

  openSignUpModal() {
    this.setState({ signUpModalIsOpen: true });
  }

  closeSignUpModal() {
    this.setState({ signUpModalIsOpen: false });
  }

  render() {
    const { signUpModalIsOpen } = this.state;
    return (
      <div>
        <Navbar openModal={this.openSignUpModal} />
        <SignUpModal isOpen={signUpModalIsOpen} close={this.closeSignUpModal} />
      </div>
    );
  }
}
