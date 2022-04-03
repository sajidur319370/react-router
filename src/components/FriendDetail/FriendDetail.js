import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <h2>This is detail of a bondhu: {id}</h2>
            <h3>Name:{friend.name}</h3>
            <h3>User Name:{friend.username}</h3>
            <h4>Email:{friend.email}</h4>
            <h5>address:{friend.address?.city}</h5>
            <h5>Lat:{friend.address?.geo.lat}</h5>
        </div>
    );
};

export default FriendDetail;
