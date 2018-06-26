import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Post from './Components/Post'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import NewPost from './Components/NewPost';

const Routes = () => (
    <HashRouter>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Post}/>
                <Route path="/login" component={Login} />                         
                <Route path="/signup" component={Signup} />
                <Route path='/post/new' component={NewPost} />
            </Switch>
        </div>
    </HashRouter>
)

export default Routes