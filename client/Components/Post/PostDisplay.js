import React from 'react'


const PostDetail = (props) => (
     <div>
        <div className="col-sm-4">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        </div>
    </div>
)

export default PostDetail