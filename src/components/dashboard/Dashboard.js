import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css";
import CreateTeam from "./CreateTeam";
import CreateBoard from "./CreateBoard";
import Sidebar from "./Sidebar";
import ShowBoards from "./ShowTeamsBoards";
import ShowTeamsBoards from "./ShowTeamsBoards";
import UserContext from "../Context/UserContext";
// import UserContext from "./Context/UserContext";

// axios.defaults.withCredentials = true;

function Dashboard() {
  // let context = useContext(UserContext);
  // console.log(context, "CONTEXT IN DASHBOARD");

  let [teams, setTeams] = useState(null);
  let [isDataFetching, setIsDataFetching] = useState(false);

  let [activeTeam, setActiveTeam] = useState(null);

  console.log(activeTeam, "activeteam");

  useEffect(() => {
    setIsDataFetching(true);
    axios
      .get("https://desolate-anchorage-67445.herokuapp.com/api/v1/teams", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        let { teams } = res.data;
        setTeams(teams);
        setIsDataFetching(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const [showTeamDialog, setShowTeamDialog] = React.useState(false);
  const openTeamDialog = () => setShowTeamDialog(true);
  const closeTeamDialog = () => setShowTeamDialog(false);

  // const [showBoardDialog, setShowBoardDialog] = React.useState(false);
  // const openBoardDialog = () => setShowBoardDialog(true);
  // const closeBoardDialog = () => setShowBoardDialog(false);
  // let [activeModal, setActiveModal] = useState(null);

  function addNewTeam(team) {
    return setTeams([...teams, team]);
  }

  // function addNewBoard() {
  //   return setTeams(teams)
  // }

  return (
    <>
      <section className="db-bg font-nunito">
        <div className="flex items-start max-w-screen-lg mx-auto py-12">
          <div className="w-1/5">
            <Sidebar
              openTeamDialog={openTeamDialog}
              teams={teams}
              setTeams={setTeams}
              isDataFetching={isDataFetching}
              activeTeam={activeTeam}
              setActiveTeam={setActiveTeam}
            />
          </div>
          <div className="w-4/5 pl-40">
            {/* <UserContext.Provider value={{ teams, setTeams }}> */}
            <ShowTeamsBoards
              // openBoardDialog={openBoardDialog}
              teams={teams}
              isDataFetching={isDataFetching}
              activeTeam={activeTeam}
              setActiveTeam={setActiveTeam}
            />
            {/* </UserContext.Provider> */}
          </div>
        </div>
      </section>

      <Dialog
        style={{ width: "900px" }}
        isOpen={showTeamDialog}
        onDismiss={closeTeamDialog}
      >
        <button className="close-button" onClick={closeTeamDialog}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <CreateTeam closeTeamDialog={closeTeamDialog} addNewTeam={addNewTeam} />
      </Dialog>

      {/* <Dialog
        style={{ width: "360px" }}
        isOpen={showBoardDialog}
        onDismiss={closeBoardDialog}
      >
        <button className="close-button" onClick={closeBoardDialog}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <CreateBoard team={team} />
      </Dialog> */}
    </>
  );
}

export default Dashboard;

// I have lifted state teams and isFetchingData from sidebar to dashboard. Ask if it is correct.
// Shifted create board Dialog from here to showSingleTeamBoards because I needed to pass teamId to CreateBoard Component but could not find way to pass it in Dashboard.
