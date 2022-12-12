import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./FriendList.css";
import { constants } from "../../constants";

const FriendList = () => {
  const { HOME, ADD_FRIEND, FRIEND_LIST } = constants.FriendList;
  return (
    <div className="friend-list-app">
      <nav className="home-nav">
        <div className="home-nav-logo">
          <Link to="/">{HOME}</Link>
        </div>
        <div className="home-nav-links">
          <Link to="/addFriend">{ADD_FRIEND}</Link>
          <Link to="/showFriend">{FRIEND_LIST}</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default FriendList;
