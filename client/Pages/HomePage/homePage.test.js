import React from 'react';
import {configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

import { Home } from './homePage';


configure({adapter: new Adapter });


describe('<Home />', () => {
    
    let component;
    
    beforeEach(() => {
        component = shallow(<Home />)
    });

    it('should render the HomePage', () => {
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

    it('should contain h3 text Welcome', () => {
        expect(component.contains(<h3>Welcome</h3>)).toBeTruthy()
    })
})