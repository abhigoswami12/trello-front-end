import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

import { validateLogin } from "../../utils/validateLogic";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { useState } from "react";
import HidePassword from "../PasswordIcons/HidePassword";
import ShowPassword from "../PasswordIcons/ShowPassword";

function Login() {
  let [showPassword, setShowPassword] = useState(false);
  let [authErr, setAuthErr] = useState("");
  let context = useContext(UserContext);

  let history = useHistory();
  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLogin,
    onSubmit: (values, actions) => {
      axios({
        method: "POST",
        url: "/api/v1/users/login",
        data: {
          user: values,
        },
      })
        .then((res) => {
          let { user } = res.data;
          context.setUser(user);
          actions.setSubmitting(false);
          return history.push("/dashboard");
        })
        .catch((error) => {
          actions.setSubmitting(false);
          context.setUser(null);
          setAuthErr(error?.response?.data?.message);
        });
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex justify-center">
        <img
          className="w-32 h-32"
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"
          alt="trello-logo"
        />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`rounded-md shadow-sm rounded-md shadow-sm appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 
                  ${
                    errors.email
                      ? ` focus:border-red-700`
                      : ` focus:border-green-700`
                  }`}
                />
                <small className="block text-red-700">
                  {(errors && errors.email && touched.email && errors.email) ||
                    (authErr && authErr.includes("email") && authErr)}
                </small>
              </div>
            </div>

            <div className="mt-6">
              <label
                for="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type={!showPassword ? "password" : "text"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={`rounded-md shadow-sm rounded-md shadow-sm appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 
                  ${
                    errors.password
                      ? ` focus:border-red-700`
                      : ` focus:border-green-700`
                  }`}
                />
                {showPassword ? (
                  <HidePassword setShowPassword={setShowPassword} />
                ) : (
                  <ShowPassword setShowPassword={setShowPassword} />
                )}
                <small className="block text-red-700">
                  {(errors &&
                    errors.password &&
                    touched.password &&
                    errors.password) ||
                    (authErr && authErr.includes("password") && authErr)}
                </small>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  for="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-5">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  // disabled={isSubmitting}
                  className={`${
                    isSubmitting
                      ? "cursor-not-allowed bg-dark-green "
                      : "bg-bg-light-green "
                  } w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-bg-dark-green focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out`}
                >
                  {isSubmitting ? "Signing in" : "Sign in"}
                </button>
              </span>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm leading-5"></div>
            </div>

            <div className="flex justify-center items-center pt-6 text-sm text-trello-blue">
              <p>New Member?</p>
              <span className="ml-2 text-bg-light-green underline text-base hover:text-bg-dark-green">
                <Link to="/signup">Signup</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// proper validation i.e. catching error from backend and displaying
// push notification
