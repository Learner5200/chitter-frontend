import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  let navbar;
  beforeEach(() => {
    navbar = shallow(<Navbar />);
  });
  it('should render a <div />', () => {
    expect(navbar.find('div').length).toEqual(1);
  });
  describe('No user signed in', () => {
    it('should contain a sign up button', () => {
      expect(navbar.find('.sign-up-button').length).toEqual(1);
    });
    it('should contain a sign in button', () => {
      expect(navbar.find('.sign-in-button').length).toEqual(1);
    });
  });
});
