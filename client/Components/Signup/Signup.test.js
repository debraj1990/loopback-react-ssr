import React from 'react';
import {configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';


import Signup from './'


configure({adapter: new Adapter });


describe('Login Component', () => {
  
  it('component should render the compoent without crushing', () => {
    const component = shallow(<Signup/>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  });

  
  it('should render the forms', () => {
    const wrapper = shallow(<Signup error={false} />)
    expect(wrapper.find('Form')).toHaveLength(1)
  });

    
})