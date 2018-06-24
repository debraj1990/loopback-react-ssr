import React from 'react';
import {configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

import { NotFoundPage } from './notFoundPage';


configure({adapter: new Adapter });


describe('<NotFoundPage />', () => {
    

    it('should render the NotFoundPage', () => {
        const component = shallow(<NotFoundPage />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

    it('should contain h1 text of opps..', () => {
        const component = shallow(<NotFoundPage />)
        expect(component.contains(<h1>Ooops, route not found.</h1>)).toBeTruthy()
    })
})