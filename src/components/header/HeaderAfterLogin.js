import React, { useRef, useState } from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

import useOnClickOutside from "../../hooks/UseOnClickOutside";
import UserContext from "../Context/UserContext";

// axios.defaults.withCredentials = true;

function HeaderAfterLogin() {
  let [dropDown, setDropDown] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setDropDown(false));

  return (
    <div>
      <nav className="bg-dark-green">
        <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className=" flex items-center justify-center text-white">
                  <Link
                    className="px-3 py-2 hover:bg-green-800 rounded-md"
                    to="/"
                  >
                    <svg
                      className="w-6 h-6 opacity-75 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </Link>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-green-800 focus:outline-none focus:text-white focus:bg-gray-700 pointer-events-none"
                  >
                    <svg
                      width="24"
                      height="24"
                      role="presentation"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 1a1 1 0 011-1h4a1 1 0 011 1v10a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm9-1a1 1 0 00-1 1v6a1 1 0 001 1h4a1 1 0 001-1V6a1 1 0 00-1-1h-4z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="ml-1">Boards</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:bg-green-800 focus:outline-none focus:text-white focus:bg-gray-700 pointer-events-none"
                  aria-label="Notifications"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                {/* <!-- Profile dropdown --> */}
                <div className="ml-3 relative">
                  <div>
                    <button
                      className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                      onClick={() => setDropDown(!dropDown)}
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                      ref={ref}
                    >
                      {dropDown && <DropDown />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className="hidden h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
function DropDown() {
  let context = useContext(UserContext);
  //   const cookies = new Cookies();
  let history = useHistory();

  function handleLogout() {
    axios
      .get(
        "https://desolate-anchorage-67445.herokuapp.com/api/v1/users/logout",
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => localStorage.setItem("token", null))
      .catch((error) => console.log(error));
  }

  return (
    <div
      className="py-1 rounded-md bg-white shadow-xs"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <a
        href="##"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 pointer-events-none opacity-50"
        role="menuitem"
      >
        Your Profile
      </a>

      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 pointer-events-none opacity-50"
        role="menuitem"
      >
        Settings
      </a>

      <Link
        to="/"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={() => {
          //   cookies.remove("token", { path: "/" });
          handleLogout();
          context.setUser(null);
        }}
      >
        Sign out
      </Link>
    </div>
  );
}
export default HeaderAfterLogin;

// how to remove cookie
