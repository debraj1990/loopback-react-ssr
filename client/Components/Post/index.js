import React, { Component } from 'react';
import axios from 'axios'
import Navbar from '../Navbar';
import PostDetail from './PostDisplay';
class Post extends Component {

    state = {
        posts: [],
        error: false
    }

    async componentDidMount() {

       try {
            const posts = (await axios.get('http://localhost:3000/api/Posts')).data
            this.setState({posts})
       } catch (e) {
           this.setState({error:true})
       }
       
    }

    renderPost() {
        return this.state.posts.map(post => {
            return <PostDetail key={post.id} {...post} />
        })
    }

    render(){
        const {error} = this.state
        return (
            <div className="container-fluid bg-3 text-center"> 
                <h3>Find Our Awesome Posts</h3>
                {error && 
                    <div className="alert alert-danger">
                    <strong>Sorry Your internet might have issues connecting!</strong>.
                  </div>
                }
                <div className="row">
                    {this.renderPost()}
                </div>
            </div>
        )
    }
}

export default Post