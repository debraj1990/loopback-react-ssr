import React from 'react';
import {configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

import NewPost from './'


configure({adapter: new Adapter });


describe('New Post Component', () => {
  test('component should render as expected', () => {
    const component = shallow(<NewPost />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  });
})