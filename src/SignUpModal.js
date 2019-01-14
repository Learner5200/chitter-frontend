import React from 'react';

import Modal from 'react-modal';
import SignUpForm from './SignUpForm';

export default function SignUpModal(props) {
  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.close}>
      <SignUpForm closeModal={props.close} />
      <button onClick={props.close} type='button'>close</button>
    </Modal>
  );
}
