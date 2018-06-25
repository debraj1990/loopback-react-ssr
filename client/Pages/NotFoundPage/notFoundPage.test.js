import React from 'react';
import {configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

import { NotFoundPage } from './notFoundPage';


configure({adapter: new Adapter });


describe('<NotFoundPage />', () => {
    
    let component;
    
    beforeEach(() => {
        component = shallow(<NotFoundPage />)
    });

    it('should render the NotFoundPage', () => {
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

    it('should contain h1 text of opps..', () => {
        expect(component.contains(<h1>Ooops, route not found.</h1>)).toBeTruthy()
    })
})