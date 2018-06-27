import React from 'react';
import {configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import { createMemoryHistory } from 'history'

import Login from './'
import { c } from 'strong-globalize/lib/globalize';


configure({adapter: new Adapter });


describe('Login Component', () => {
  
  it('component should render the compoent without crushing', () => {
    const history = createMemoryHistory('/login')
    const component = shallow(<Login history={history} />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  });

  it('should check whether the localstorage id is saved', () => {

    localStorage.setItem('__id__', 'dkdkskkekekdkkdkdkdkk')
    expect(localStorage.getItem('__id__')).toBe('dkdkskkekekdkkdkdkdkk')
  })

    it('should render the forms', () => {
        const wrapper = shallow(<Login error={false} />)
        expect(wrapper.find('Form')).toHaveLength(1)
      });

    
})