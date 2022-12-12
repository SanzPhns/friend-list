import React, { useContext } from "react";
import { Context } from "../../Context";
import { constants } from "../../constants";

const DetailsForm = ({ handleSubmit, handleChange, submitValue }) => {
  const { values, formErrors } = useContext(Context);
  const { NAME, PHONE_NUMBER, EMAIL, WORK, CITY } = constants.DetailsForm;

  return (
    <form onSubmit={handleSubmit} className="add-form">
        {/* <div className="add-form-input">
        <div className="add-form-input-item">
          <p>{NAME}</p>
        </div>
        <div className="add-form-input-field">
          <input
            value={values.name}
            onChange={handleChange}
            name="name"
          />
          <p>{formErrors.name}</p>
        </div>
      </div> */}
      <label>
        Name
        <input type="text" value="sanz" onChange={handleChange}/>
      </label>

        {/* <div className="add-form-input">
        <div className="add-form-input-item">
          <p>{PHONE_NUMBER}</p>
        </div>
        <div className="add-form-input-field">
          <input
            value={values.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
          />
          <p>{formErrors.phoneNumber}</p>
        </div>
      </div>

      <div className="add-form-input">
        <div className="add-form-input-item">
          <p>{PHONE_NUMBER}</p>
        </div>
        <div className="add-form-input-field">
          <input
            value={values.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
          />
          <p>{formErrors.phoneNumber}</p>
        </div>
      </div>

      <div className="add-form-input">
        <div className="add-form-input-item">
          <p>{EMAIL}</p>
        </div>
        <div className="add-form-input-field">
          <input value={values.email} onChange={handleChange} name="email" />
          <p>{formErrors.email}</p>
        </div>
      </div>

      <div className="add-form-input">
        <div className="add-form-input-item">
          <p>{WORK}</p>
        </div>
        <div className="add-form-input-field">
          <input value={values.work} onChange={handleChange} name="work" />
          <p>{formErrors.work}</p>
        </div>
      </div>

      <div className="add-form-input">
        <div className="add-form-input-item">
          <p>{CITY}</p>
        </div>
        <div className="add-form-input-field">
          <input value={values.city} onChange={handleChange} name="city" />
          <p>{formErrors.city}</p>
        </div>
      </div> */}

      <div
        className={
          submitValue === "ADD"
            ? "submit-sec submit-sec-add"
            : "submit-sec submit-sec-edit"
        }
      >
        <button type="submit"> {submitValue} </button>
        </div>
    </form>
  );
};

export default DetailsForm;
