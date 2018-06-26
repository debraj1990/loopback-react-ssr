import React, { Component } from 'react';
import Form from '../Form';



class Login extends Component{
    
        state = {
            email:'',
            password:'',
        }

    onChange = ({target}) => {
        this.setState({[target.name]:target.value})
    }

    render(){
        const {email, password} = this.state
        return (
            <div>
                <Form
                  email={email}
                  password={password}
                  onChange={this.onChange}
                  type='Login'
                />
            </div>
        )
    }
}



export default Login