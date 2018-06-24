import React from 'react';
import {configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Home } from './homePage';


configure({adapter: new Adapter });


describe('<Home />', () => {
    it('should render the HomePage', () => {
        const result = shallow(<Home />)
        expect(result.contains(<h3>Welcome</h3>)).toBeTruthy()
    })
})