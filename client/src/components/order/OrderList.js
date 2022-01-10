import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/orders');
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
                    <h3>ID User: {post.idAccount}</h3>
                    <h3>Total: {post.totalMoney}</h3>
                    <h3>Date: {post.date}</h3>
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