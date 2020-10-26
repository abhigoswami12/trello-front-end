import Axios from "axios";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ShowTeamsList from "./ShowTeamsList";
import { useState } from "react";

function Sidebar({
  activeTeam,
  setActiveTeam,
  openTeamDialog,
  isDataFetching,
  teams,
  setTeams,
}) {
  //   let [teams, setTeams] = useState(null);
  //   let [isDataFetching, setIsDataFetching] = useState(false);
  //   console.log(isDataFetching);
  //   useEffect(() => {
  //     setIsDataFetching(true);
  //     axios
  //       .get("/api/v1/teams")
  //       .then((res) => {
  //         let { teams } = res.data;
  //         setTeams(teams);
  //         setIsDataFetching(false);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);
  // let [activeMenu, setActiveMenu] = useState("boards");

  return (
    <div className="flex flex-col leading-10">
      <Link>
        <p
          className={`${
            !activeTeam ? "active-menu rounded-md" : ""
          } font-bold hover:bg-gray-200 rounder-md px-3 hover:rounded cursor-pointer`}
          onClick={() => setActiveTeam(null)}
        >
          Boards
        </p>
      </Link>
      <div>
        <div className="flex justify-between items-center px-3">
          <p className="text-gray-800">Teams</p>
          <svg
            onClick={openTeamDialog}
            className="w-4 h-4 text-gray-800 cursor-pointer hover:opacity-75 hover:text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <div>
          {/* {typeof activeMenu === "string"} */}
          {teams?.map((team) => {
            return (
              <ShowTeamsList
                // activeMenu={activeMenu}
                // setActiveMenu={setActiveMenu}
                isDataFetching={isDataFetching}
                team={team}
                teams={teams}
                setTeams={setTeams}
                activeTeam={activeTeam}
                setActiveTeam={setActiveTeam}
              />
            );
          })}
        </div>
        {/* <div className="px-6 leading-7">
          <div className="pt-3 flex items-center">
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
                d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
              />
            </svg>
            <p className="text-gray-800 text-sm ml-3">All team Boards</p>
          </div>
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
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
