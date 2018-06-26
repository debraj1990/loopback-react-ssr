import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Post from './Components/Post'

const Routes = () => (
    <div>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path='/' component={Landing} /> */}
            {/* <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} /> */}
            <Route path='/' component={Post} />
           </Switch>
        </BrowserRouter>
    </div>
)

export default Routes