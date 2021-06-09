import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

// axios.defaults.withCredentials = true;

function ShowSingleBoard({ openBoardDialog, board, team }) {
  //   let [board, setBoard] = useState(null);
  let history = useHistory();
  // function handleShowBoard() {
  //   axios.get(`/api/v1/boards/${board._id}`).then((res) => {
  //     let { board } = res.data;
  //     console.log(board);
  //     //   setBoard(board);
  //     history.push(`/boards/${board._id}`);
  //   });
  // }
  return (
    <Link to={`/boards/${board._id}`} exact>
      <div
        className="w-48 text-center px-4 py-10 hover:bg-gray-400 rounded-md cursor-pointer bg-gray-300 mr-5 mb-10"
        // onClick={handleShowBoard}
      >
        <p className="text-trello-blue">{board.name}</p>
      </div>
    </Link>
  );
}

export default ShowSingleBoard;
