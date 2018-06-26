import React, { Component } from 'react';
import axios from 'axios'
import Form from '../Form';



class Signup extends Component{
    
    state = {
        email:'',
        password:'',
        name:'',
        success:false,
        error: false
    }

    onChange = ({target}) => {
        this.setState({[target.name]:target.value})
    }

    onSubmit = async (e) => {
        e.preventDefault();

       try {
           const res = await axios.post('http://localhost:3000/api/Users', {
                name: this.state.name,
                email:this.state.email,
                password: this.state.password
            }
        )

        // This if statement is to check when there is error from the backend
        if(res.data){
            return this.setState({success:true,email:'',password:'',name:''})
        }else {
            return this.setState({error:true})
        }
       
        //Catch handles when there is internet breakage that is not associated with the API
       } catch (e) {
           this.setState({error: true})
       }
    }
    render(){
        const {name, email, password, success, error} = this.state
        return (
            <div>
                <h3 style={{display:'flex',justifyContent:'center'}}>Hello Signup </h3> 

                {
                   success &&
                   <div className="col-md-4 col-md-offset-4 alert alert-success">
                        <strong>Success!</strong> Way to go, now Login.
                   </div> 
                } 
                {
                   error &&
                   <div className="col-md-4 col-md-offset-4 alert alert-danger">
                        <strong>Sorry!</strong> Sorry email taken, try again
                   </div> 
                } 
                <Form
                  name={name}
                  email={email}
                  password={password}
                  onSubmit= {this.onSubmit}
                  onChange={this.onChange}
                  type='Signup'
                />
            </div>
        )
    }
}



export default Signup