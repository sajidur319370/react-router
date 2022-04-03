import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h2>Welcome to my Fancy Routing Website</h2>
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/friends">Friends</CustomLink>
          </li>
          <li>
            <CustomLink to="/posts">Posts</CustomLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
