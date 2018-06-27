import React from 'react';
import {configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import { createMemoryHistory } from 'history'

import NewPost from './'


configure({adapter: new Adapter });


describe('New Post Component', () => {
  
  it('component should push the user if localstorage is not set', () => {
    const history = createMemoryHistory('/')
    const component = shallow(<NewPost history={history} />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  });

  it('should render component when localstorage is set', () => {

    localStorage.setItem('__id__', 'dkdkskkekekdkkdkdkdkk')
    const history = createMemoryHistory('/posts/new')
    const component = shallow(<NewPost history={history} />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})