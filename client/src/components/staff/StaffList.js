import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/staffs');
        console.log(res.data);
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    
    const renderedPosts = Object.values(posts).map(post => {
        return(
            <div className="card" style={{width: '30%', marginBottom: '20px'}} key={post.id}>
                <div className="card-body">
                    <h3>Name: {post.name}</h3>
                    <h3>Address: {post.address}</h3>
                </div>
            </div>
        )
    })

    return(
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    )
}