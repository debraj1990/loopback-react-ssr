import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Signup from './Components/Signup'
// import Signup from './Components/Signup'
import About from './Components/About';

const App = () => (
    <div>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path='/' component={Landing} /> */}
            {/* <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} /> */}
            <Route path='/' component={About} />
           </Switch>
        </BrowserRouter>
    </div>
)

export default App