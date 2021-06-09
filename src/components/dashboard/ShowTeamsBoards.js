import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import ShowSingleTeamBoards from "./ShowSingleTeamBoards";

function ShowTeamsBoards({ teams, isDataFetching, activeTeam, setActiveTeam }) {
  // let context = useContext(UserContext);
  // console.log(context.teams, "in SHow Teams Boards");
  return (
    <div>
      {activeTeam ? (
        <ShowSingleTeamBoards
          // openBoardDialog={openBoardDialog}
          teams={teams}
          team={activeTeam}
          isDataFetching={isDataFetching}
        />
      ) : (
        teams?.map((team) => {
          return (
            <ShowSingleTeamBoards
              // openBoardDialog={openBoardDialog}
              teams={teams}
              team={team}
              isDataFetching={isDataFetching}
            />
          );
        })
      )}
    </div>
  );
}

export default ShowTeamsBoards;
