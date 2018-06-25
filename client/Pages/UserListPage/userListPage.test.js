import React from 'react';
import {configure, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { UsersList } from './userListPage';


configure({adapter: new Adapter });


describe('<UserList />', () => {
    
    let component;

    beforeEach(() => {
        component = mount(<UsersList fetchUsers={() => {} } users={[]} />)
    })

    it('should render users length   of 0 if no users is available', () => {
        expect(component.props().users.length).toBe(0)
    })

    it('should render users length of 2', () => {
        component.setProps({users: [{name:'Josh', id:2},{name:'Kay', id:5}]})
        expect(component.props().users.length).toBe(2)
    })

    it('should render when all props are passed', () => {
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

})