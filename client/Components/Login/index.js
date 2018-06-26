import React, { Component } from 'react';
import Form from '../Form';



class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:'',
        }
    }

    onChange = ({target}) => {
        console.log(target)
    }
    
    render(){
        const {name, email, password} = this.state
        return (
            <div>
                <Form
                  name={name}
                  email={password}
                  password={email}
                  type='Login'
                />
            </div>
        )
    }
}



export default Login