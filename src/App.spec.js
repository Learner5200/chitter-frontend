import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render a <div>', () => {
    const app = shallow(<App />);
    expect(app.find('div').length).toEqual(1);
  });
});
