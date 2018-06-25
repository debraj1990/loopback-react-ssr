import React from 'react';
import {configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

import { Header } from './Header';


configure({adapter: new Adapter });


describe('<Header />', () => {
    

    it('should render the Header Component', () => {
        const component = shallow(<Header />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

    it('should render Header with login link if auth prop is false', () => {
        const component = shallow(<Header auth={false} />)
        expect(component.contains( <a href="/api/auth/google">Login</a>)).toBeTruthy()
    })

    it('should render Header with logout link if auth prop is true', () => {
        const component = shallow(<Header auth />)
        expect(component.contains(<a href="/api/logout">Logout</a>)).toBeTruthy()
    })
})