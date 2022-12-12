import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../Context";
import { validateForm } from "../../utils/validateForm";
import DetailsForm from "../common/DetailsForm";
import "./EditFriend.css";
import { constants } from "../../constants";

const EditFriend = () => {
  const {
    values,
    setValues,
    friendDetails,
    setFriendDetails,
    formErrors,
    setIsSubmitted,
    isSubmitted,
    setFormErrors,
  } = useContext(Context);

  const { EDIT_FRIEND_DETAIL } = constants.EditFriend;

  let params = useParams();

  const navigate = useNavigate();

  let current = friendDetails.filter((obj) => {
    return obj.id === Number(params.id);
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setFormErrors(validateForm(values));
    setIsSubmitted(true);
    e.preventDefault();
  };

  const updateDetails = () => {
    setFriendDetails((current) =>
      current.filter((detail) => {
        return detail.id !== Number(params.id);
      })
    );
    setFriendDetails((prevState) => [...prevState, values]);
    setIsSubmitted(false);
    navigate("/showFriend");
  };

  useEffect(() => {
    if (isSubmitted && Object.keys(formErrors).length === 0) {
      updateDetails();
    }
  }, [formErrors]);

  useEffect(() => {
    setValues(current[0]);
  }, []);

  return (
    <div className="edit-friend-main">
      <div className="edit-friend-main-text">
        <p>{EDIT_FRIEND_DETAIL}</p>
      </div>
      <DetailsForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        submitValue="Save"
      />
    </div>
  );
};

export default EditFriend;
