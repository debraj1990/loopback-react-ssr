import React, { Component } from 'react';
import Form from '../Form';



class Signup extends Component{
    
    state = {
        email:'',
        password:'',
        name:''
    }

    onChange = ({target}) => {
        this.setState({[target.name]:target.value})
    }
    render(){
        const {name, email, password} = this.state
        return (
            <div>
                <Form
                  name={name}
                  email={email}
                  password={password}
                  onChange={this.onChange}
                  type='Signup'
                />
            </div>
        )
    }
}



export default Signup