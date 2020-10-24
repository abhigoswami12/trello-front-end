import React from "react";

export function validateRegister(values) {
  const errors = {};
  let name = values.name;
  let hasNumber = name.split("").some((char) => Number(char));
  let password = values.password;
  let isValid = password.split("").some((char) => Number(char));

  if (!name) {
    errors.name = "*name is required";
  } else if (name.length < 5) {
    errors.name = "name must be atleat 5 characters long!!";
  } else if (name.toLocaleLowerCase() !== name) {
    errors.name = "name must be in Lowercase";
  } else if (!hasNumber) {
    errors.name = "name must include atleast one number";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 4) {
    errors.password = "Password length must be atleast 4 characters long";
  } else if (!isValid) {
    errors.password = "Password must contains atleast one number.";
  }
  // console.log(errors);
  return errors;
}

export function validateLogin(values) {
  const errors = {};
  let password = values.password;
  let isValid = password.split("").some((char) => Number(char));

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 4) {
    errors.password = "Password length must be atleast 4 characters long";
  } else if (!isValid) {
    errors.password = "Password must contains atleast one number.";
  }
  return errors;
}

// validate create team
export function validateTeam(values) {
  const errors = {};
  let name = values.name;
  if (!name) {
    errors.name = "team name is Required";
  }
  return errors;
}

// validate create Board
export function validateBoard(values) {
  const errors = {};
  let name = values.name;
  if (!name) {
    errors.name = "board name is Required";
  }
  return errors;
}

// validate add list
export function validateList(values) {
  const errors = {};
  let name = values.name;
  if (!name) {
    errors.name = "name of the list is Required";
  }
  return errors;
}

// validate Add Card
export function validateCard(values) {
  const errors = {};
  let name = values.name;
  if (!name) {
    errors.name = "name of the card can't be empty";
  }
  return errors;
}
