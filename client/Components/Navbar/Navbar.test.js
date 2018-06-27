import React from 'react';
import {configure, shallow } from 'enzyme';
import { Link  } from 'react-router-dom'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';


import Navbar from './'


configure({adapter: new Adapter });


describe('Navbar Component', () => {
  
  it('should render the compoent without crushing', () => {
    const component = shallow(<Navbar/>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  });    
})