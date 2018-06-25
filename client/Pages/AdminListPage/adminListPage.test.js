import React from 'react';
import {configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AdminsListPage } from './adminListPage';


configure({adapter: new Adapter });


describe('<AdminList />', () => {
    
    let component;

    beforeEach(() => {
        component = mount(<AdminsListPage fetchAdmins={() => {} } admins={[]} />)
    })

    it('should render admin length of 0 if no admin is available', () => {
        expect(component.props().admins.length).toBe(0)
    })

    it('should render admins length of 2', () => {
        component.setProps({admins: [{name:'YAw', id:2},{name:'Kay', id:5}]})
        expect(component.props().admins .length).toBe(2)
    })


})