import React, { Component } from 'react'
import axios from 'axios'


class NewPost extends Component{

    state = {
        title: '',
        description: ''
    }

    componentWillMount(){
        if(!localStorage.getItem('__id__')){
            return this.props.history.push('/')
        }
        this.setState({token:localStorage.getItem('__id__')})
    }

    onChange = ({target}) => {
        this.setState({[target.name]:target.value})
    }

    onSubmit = async(e) => {
       e.preventDefault()
        
       try {
          axios.post(`http://localhost:3000/api/Posts?access_token=${this.state.token}`, this.state) 
          return this.props.history.push('/')
       } catch (e) {
           this.setState({error:true})
       }
    }
    render(){
        const { title, description } = this.state
        return (
        <form onSubmit={this.onSubmit} className="col-md-4 col-md-offset-4">
            {
                this.state.error &&
                 <div className="alert alert-danger">
                    <strong>Sorry!</strong> Sorry something went wrong, try again
                 </div> 
            }   
            <div className="form-group">
                <label htmlFor="email">Title:</label>
                <input required onChange={this.onChange} type="text" name='title' value={title} className="form-control" />
            </div>
            <div className="form-group">
            <label htmlFor="description">Description:</label>
                <textarea required onChange={this.onChange} name='description' value={description} className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-default">Add Post</button>
        </form>
        )
    }
}

export default NewPost