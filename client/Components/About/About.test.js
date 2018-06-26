import React from 'react';
import {configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

import About from './'


configure({adapter: new Adapter });


describe('About page', () => {
  test('About component should render as expected', () => {
    const component = shallow(<About />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  });
})