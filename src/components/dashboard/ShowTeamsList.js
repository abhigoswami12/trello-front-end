import React from "react";
import axios from "axios";
import ShowSingleTeamBoards from "./ShowSingleTeamBoards";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import userEvent from "@testing-library/user-event";

// axios.defaults.withCredentials = true;

function ShowTeamsList({
  isDataFetching,
  team,
  activeMenu,
  setActiveMenu,
  teams,
  setTeams,
  activeTeam,
  setActiveTeam,
}) {
  let [authErr, setAuthErr] = useState("");
  let context = useContext(UserContext);
  if (isDataFetching) {
    return <h1>Loading...</h1>;
  }

  // function handleClickOnTeam(teams, team) {
  //   console.log("entered", teams, team);
  //   setActiveMenu(team.name);
  //   return <ShowSingleTeamBoards teams={teams} team={team} />;
  // }
  function handleDeleteTeam() {
    let teamId = team._id;
    axios({
      method: "DELETE",
      url: `https://desolate-anchorage-67445.herokuapp.com/api/v1/teams/${team._id}`,
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        let newTeams = teams?.filter((team) => team._id !== teamId);
        setActiveTeam(null);
        return setTeams(newTeams);
      })
      .catch((error) => {
        return setAuthErr(error?.response?.data?.msg);
      });
  }

  return (
    <div>
      <div
        className={`${
          activeTeam?.name === team.name && "active-menu"
        } flex items-center justify-start px-3 font-bold hover:bg-gray-200 cursor-pointer rounded-md`}
        onClick={() => setActiveTeam(team)}
      >
        <div>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div className="ml-3">{team.name}</div>
      </div>

      {activeTeam?.name === team.name && (
        <div className="px-6 leading-7 my-2">
          {context.user._id === team.adminId && (
            <div
              className="mt-3 flex items-center mb-1 hover:bg-gray-200 cursor-pointer rounded-md px-2"
              onClick={() => handleDeleteTeam()}
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <p className="text-gray-800 text-sm ml-3">Delete</p>
            </div>
          )}

          <div className="flex items-center">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="ml-3 text-gray-800 text-sm">Members</p>
          </div>
          <small className="text-red-700">{authErr}</small>
        </div>
      )}
    </div>
  );
}

export default ShowTeamsList;
