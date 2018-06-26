import React, { Component } from 'react';
import axios from 'axios'
class Post extends Component {

    async componentDidMount() {
       const res = await axios.get('http://localhost:3000/api/Posts')
       console.log(res)
    }


    render(){
        return (
            <div>
                <h1>This is the post</h1>
            </div>
        )
    }
}

export default Post