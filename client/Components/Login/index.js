import React, { Component } from 'react';
import axios from 'axios'
import Form from '../Form';



class Login extends Component{
    
        state = {
            email:'',
            password:'',
            error:false
        }

    onChange = ({target}) => {
        this.setState({[target.name]:target.value})
    }
    
    // handles when the form is submitted
    onSubmit = async (e) => {
        e.preventDefault();

       try {
           const res = await axios.post('http://localhost:3000/api/Users/login', {
                email:this.state.email,
                password: this.state.password
            }
        )
        // This if statement is to check when there is error from the backend
        if(res.data){
            localStorage.setItem('__id__',res.data.id)
            return this.props.history.replace('/')
        }else {
            return this.setState({error:true})
        }
       
        //Catch handles when there is internet breakage that is not associated with the API
       } catch (e) {
           this.setState({error: true})
       }
    }

    render(){
        const {email, password, error} = this.state
        return (
            <div>
                 <h3 style={{display:'flex',justifyContent:'center'}}>Hi Welcome Login </h3>
                 
                {
                   error &&
                   <div className="col-md-4 col-md-offset-4 alert alert-danger">
                        <strong>Sorry!</strong> Sorry something went wrong, try again
                   </div> 
                }   
                <Form
                  email={email}
                  password={password}
                  onSubmit={this.onSubmit}
                  onChange={this.onChange}
                  type='Login'
                />
            </div>
        )
    }
}



export default Login