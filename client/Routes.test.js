import React from 'react'
import { configure, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16'


configure({adapter: new Adapter })

import Routes from './Routes'

import Post from './Components/Post'
import Login from './Components/Login'



test('should render the Home component when visiting /', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(Post).length).toBe(1)
})
