import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));

    }, [id])
    return (
        <div>
            <h2>This  is Post Details for:{id}</h2>
            <h5>{post.title}</h5>
            <h6>{post.body}</h6>
        </div>
    );
};

export default PostDetail;