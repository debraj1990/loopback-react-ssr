import React, { Component } from 'react';
import Form from '../Form';



class Signup extends Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:'',
            name:''
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
                  onChange={this.onChange}
                  type='Signup'
                />
            </div>
        )
    }
}



export default Signup