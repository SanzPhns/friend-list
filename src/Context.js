import React, { useState } from "react";
import data from "./data.json";

export const Context = React.createContext("");
export const ContextProvider = ({ children }) => {
  const initialValues = {
    id: "",
    name: "",
    phoneNumber: "",
    email: "",
    work: "",
    city: "",
  };

  const [values, setValues] = useState(initialValues);
  const [friendDetails, setFriendDetails] = useState(data.user);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [detailId, setDetailId] = useState(6);

  return (
    <Context.Provider
      value={{
        values,
        setValues,
        friendDetails,
        setFriendDetails,
        initialValues,
        formErrors,
        setFormErrors,
        isSubmitted,
        setIsSubmitted,
        detailId,
        setDetailId,
      }}
    >
      {children}
    </Context.Provider>
  );
};
