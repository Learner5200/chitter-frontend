import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from './Navbar';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });
  it('should render a <div>', () => {
    expect(app.find('div').length).toEqual(1);
  });
  it('should render a Navbar', () => {
    expect(app.containsMatchingElement(<Navbar />)).toEqual(true);
  });
});
