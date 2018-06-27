import React from 'react';
import {configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import PostDetail from './PostDisplay'

import Post from './'


configure({adapter: new Adapter });


describe('Login Component', () => {
  
  it('component should render the compoent without crushing', () => {
    const component = shallow(<Post />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  });

  

it('should not render any PostDetails when post is empty', () => {

  const posts = []
  const wrapper = shallow(<Post posts={posts} />)
  expect(wrapper.find(PostDetail)).toHaveLength(0)
 });
     
})