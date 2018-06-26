import React, { Component } from 'react'


class NewPost extends Component{

    state = {
        title: '',
        description: ''
    }

    render(){
        const { title, description } = this.state
        return (
        <form onSubmit={onSubmit} className="col-md-4 col-md-offset-4">
            <div className="form-group">
                <label htmlFor="email">Title:</label>
                <input required onChange={onChange} type="text" name='title' value={title} className="form-control" />
            </div>
            <div className="form-group">
            <label htmlFor="description">Description:</label>
                <textarea required onChange={onChange} name='description' value={description} className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-default">Add Post</button>
        </form>
        )
    }
}

export default NewPost