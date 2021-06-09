import Dialog from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import React, { useState } from "react";
import CreateBoard from "./CreateBoard";
import ShowSingleBoard from "./ShowSingleBoard";

function ShowSingleTeamBoards({ teams, team, isDataFetching }) {
  const [showBoardDialog, setShowBoardDialog] = React.useState(false);
  const openBoardDialog = () => setShowBoardDialog(true);
  const closeBoardDialog = () => setShowBoardDialog(false);

  // let [singleTeam, setSingleTeam] = useState(team);

  // function addNewBoard(board) {
  //   return setSingleTeam({
  //     ...singleTeam,
  //     boards: [...singleTeam.boards, board],
  //   });
  // }
  // console.log(teams, "Teams in showsingleteamboards");
  console.log("called on click");

  return (
    <>
      <div className="font-bold text-xl flex items-center text-gray-900">
        <svg
          className="w-5 h-5"
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
        <p className="ml-2">{team.name}</p>
      </div>
      <div className="flex flex-wrap mt-6">
        {team?.boards?.map((board) => {
          //team is converted to singleTeam
          return (
            <ShowSingleBoard
              team={team}
              teams={teams}
              openBoardDialog={openBoardDialog}
              board={board}
            />
          );
        })}
        <div
          className="px-4 py-10 hover:bg-gray-400 rounded-md cursor-pointer mb-10"
          onClick={openBoardDialog}
        >
          <p className="text-dark-green">Create new board</p>
        </div>
      </div>

      <Dialog
        style={{ width: "360px" }}
        isOpen={showBoardDialog}
        onDismiss={closeBoardDialog}
      >
        <button className="close-button" onClick={closeBoardDialog}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <CreateBoard
          teams={teams}
          team={team}
          closeBoardDialog={closeBoardDialog}
          // addNewBoard={addNewBoard}
        />
      </Dialog>
    </>
  );
}
export default ShowSingleTeamBoards;
