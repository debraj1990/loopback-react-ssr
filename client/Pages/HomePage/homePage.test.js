import React from 'react';
import {configure, shallow, mount } from 'enzyme';
import {MemoryRouter } from 'react-router'
import Adapter from 'enzyme-adapter-react-16';

import HomePage from './HomePage';


configure({adapter: new Adapter });


describe('<HomePage />', () => {
    it('should render the HomePage', () => {
        const result = shallow(<HomePage.component />)
        expect(result.contains(<h3>Welcome</h3>)).toBeTruthy()
    })
})