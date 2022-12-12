export const validateForm = (values) => {
  const errors = {};
  const regxName = /^[a-z ,.'-]+$/i;
  const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const regexEmail =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  const regexWork = /^[a-z0-9]+$/i;
  const regxCity = /^[a-z ,.'-]+$/i;

  if (!values.name) {
    errors.name = "Name is required!";
  } else if (!regxName.test(values.name)) {
    errors.name = "Only Alphabets are allowed!";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number is required!";
  } else if (!regexPhone.test(values.phoneNumber)) {
    errors.phoneNumber = "Invalid Phone Number!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regexEmail.test(values.email)) {
    errors.email = "Invalid email format!";
  }
  if (!values.work) {
    errors.work = "Work is required!";
  } else if (!regexWork.test(values.work)) {
    errors.work = "Invalid work details!";
  }
  if (!values.city) {
    errors.city = "City is required!";
  } else if (!regxCity.test(values.name)) {
    errors.name = "Only Alphabets are allowed!";
  }
  return errors;
};
