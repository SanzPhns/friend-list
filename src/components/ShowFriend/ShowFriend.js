import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../../Context";
import "./showFriend.css";
import { constants } from "../../constants";

const ShowFriend = () => {
  const { friendDetails, setFriendDetails } = useContext(Context);
  const [isImportant, setIsImportant] = useState(false);
  const {
    MARK_IMPORTANT,
    NAME,
    PHONE_NUMBER,
    EMAIL,
    WORK,
    CITY,
    EDIT,
    DELETE,
    EMPTY_MESSAGE,
  } = constants.ShowFriend;

  const handleImportant = () => {
    setIsImportant((prevState) => !prevState);
  };

  const handleDelete = (id) => {
    console.log("handle delete: ", id);
    const newDetails = friendDetails.filter((details) => {
      return details.id !== id;
    });
    setFriendDetails(newDetails);
  };

  return friendDetails.length !== 0 ? (
    <div className="show-friend-main">
      <div className="show-friend show-friend-header">
        <div className="box">{MARK_IMPORTANT}</div>
        <div className="box">{NAME}</div>
        <div className="box">{PHONE_NUMBER}</div>
        <div className="box">{EMAIL}</div>
        <div className="box">{WORK}</div>
        <div className="box">{CITY}</div>
      </div>

      {friendDetails.map((detail) => (
        <div
          key={detail.id}
          className={
            isImportant
              ? "show-friend show-friend-important"
              : "show-friend show-friend-details"
          }
        >
          <input
            type="checkBox"
            onChange={handleImportant}
            checked={isImportant}
            className="checkBox"
          />
          <div className="box">{detail.name}</div>
          <div className="box">{detail.phoneNumber}</div>
          <div className="box">{detail.email}</div>
          <div className="box">{detail.work}</div>
          <div className="box">{detail.city}</div>
          <div className="editDeletButtons">
            <Link to={`/showFriend/${detail.id}`}>
              <button className="editButton">{EDIT}</button>
            </Link>
          </div>
          <div className="editDeletButtons">
            <button
              className="deleteButton"
              onClick={() => handleDelete(detail.id)}
            >
              {DELETE}
            </button>
          </div>
        </div>
      ))}
      <Outlet />
    </div>
  ) : (
    <div className="show-friend-empty">
      <p>{EMPTY_MESSAGE}</p>
    </div>
  );
};

export default ShowFriend;
