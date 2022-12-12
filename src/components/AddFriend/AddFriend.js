import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import "./addFriend.css";
import { validateForm } from "../../utils/validateForm";
import DetailsForm from "../common/DetailsForm";
import { constants } from "../../constants";

const AddFriend = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const {
    values,
    setValues,
    setFriendDetails,
    initialValues,
    formErrors,
    setFormErrors,
    isSubmitted,
    setIsSubmitted,
    detailId,
    setDetailId,
  } = useContext(Context);

  const { ADD_FRIEND_DETAIL, FRIEND_ADDED } = constants.AddFriend;

  const handleChange = (e) => {
    setValues({
      ...values,
      id: detailId,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(values));
    setIsSubmitted(true);
  };

  const updateDetails = () => {
    setDetailId((prevState) => prevState + 1);
    setSuccessMessage(true);
    setFriendDetails((prevState) => [...prevState, values]);
    setValues(initialValues);
    setIsSubmitted(false);
  };

  useEffect(() => {
    if (isSubmitted && Object.keys(formErrors).length === 0) {
      updateDetails();
    }
  }, [formErrors]);

  useEffect(() => {
    setValues(initialValues);
  }, []);

  return (
    <div className="add-friend-main">
      <div className="add-friend-main-text">
        <p>{ADD_FRIEND_DETAIL}</p>
      </div>
      <div className="add-friend-success">
        {successMessage ? <p>{FRIEND_ADDED}</p> : null}
      </div>
      <DetailsForm
        handleSubmit={(e) => handleSubmit(e)}
        handleChange={(e) => handleChange(e)}
        submitValue="ADD"
      />
    </div>
  );
};

export default AddFriend;
