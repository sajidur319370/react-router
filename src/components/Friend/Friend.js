import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;
  const navigate = useNavigate();

  const showFriends = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };
  return (
    <div>
      <h3>
        <span style={{ color: "blueviolet" }}> Name:</span>
        {name}
      </h3>
      <h4>
        <span style={{ color: "blueviolet" }}>User Name:</span>
        {username}
      </h4>
      <Link to={'/friend/' + id}>Show details</Link>
      <button
        style={{
          width: "160px",
          height: "40px",
          background: "tomato",
          border: "0",
          borderRadius: "5px",
        }}
        onClick={() => {
          showFriends();
        }}
      >
        {username}: {id}
      </button>
    </div>
  );
};

export default Friend;
