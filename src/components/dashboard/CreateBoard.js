// import Axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { validateBoard } from "../../utils/validateLogic";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Link, useHistory } from "react-router-dom";

// axios.defaults.withCredentials = true;

function CreateBoard({ teams, team, closeBoardDialog, addNewBoard }) {
  let [isTeamOptionsOpen, setIsTeamOptionsOpen] = useState(false);
  // let [teamName, setTeamName] = useState(null);
  let [newTeam, setNewTeam] = useState(team);

  let history = useHistory();
  // let context = useContext(UserContext);

  // console.log(context.user, "Context");
  // console.log(teams, "TEAMS");
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
    },
    validate: validateBoard,
    onSubmit: (values, actions) => {
      axios({
        method: "POST",
        url: "https://desolate-anchorage-67445.herokuapp.com/api/v1/boards",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        data: {
          board: {
            name: values.name,
            teamId: newTeam._id,
          },
        },
      })
        .then((res) => {
          let { board } = res.data;
          actions.setSubmitting(false);
          closeBoardDialog();

          // addNewBoard(board);
          history.push(`/boards/${board._id}`);
        })
        .catch((error) => {
          return actions.setSubmitting(false);
        });
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="" className="font-bold text-gray-900">
            Board's Name
          </label>
          <div className="mb-5">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Taco's co"
              className="border-2 border-gray-400 w-full px-2 py-2 rounded font-lg"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
            />
            <small className="text-red-700">
              {errors?.name && touched.name && errors.name}
            </small>
          </div>
        </div>

        <div className="flex justify-between">
          <div class="relative inline-block text-left">
            <div>
              <span class="rounded-md shadow-sm">
                <button
                  type="button"
                  class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={() => setIsTeamOptionsOpen(!isTeamOptionsOpen)}
                >
                  {newTeam ? newTeam.name : team.name}
                  {/* <!-- Heroicon name: chevron-down --> */}
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            </div>

            {isTeamOptionsOpen && (
              <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                <div class="rounded-md bg-white shadow-xs">
                  {teams?.map((team) => {
                    return (
                      <div
                        class="py-1 block"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <p
                          class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          role="menuitem"
                          onClick={() => {
                            // setTeamName(team.name);
                            setNewTeam(team);
                            setIsTeamOptionsOpen(false);
                          }}
                        >
                          {team.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div>
            <input
              type="submit"
              name=""
              id=""
              value={isSubmitting ? "Creating Board" : "Create Board"}
              className={`btn rounded ${isSubmitting && "cursor-not-allowed"}`}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateBoard;
