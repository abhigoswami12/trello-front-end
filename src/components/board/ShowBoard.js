import React from "react";
import ShowBoardHeader from "./ShowBoardHeader";
import ShowList from "../list/ShowLIst";
import Header from "../header/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import AddList from "./AddList";

// axios.defaults.withCredentials = true;

function ShowBoard() {
  let [board, setBoard] = useState(null);
  console.log(board);
  let params = useParams();
  console.log(params);
  useEffect(() => {
    axios
      .get(
        `https://desolate-anchorage-67445.herokuapp.com/api/v1/boards/${params.boardId}`
      )
      .then((res) => {
        let { board } = res.data;
        console.log(board, "BOARD");

        return setBoard(board);
      });
  }, []);

  function addNewList(list) {
    setBoard({
      ...board,
      lists: [...board.lists, list],
    });
  }

  return (
    <div className="bg-light-green">
      {console.log("entered render")}
      <ShowBoardHeader board={board} />
      <div className="h-screen overflow-x-scroll">
        <section className="max-w-7xl px-1 my-2 sm:px-6 lg:px-4 font-nunito">
          <div className="flex flex-no-wrap items-start">
            {board?.lists?.map((list) => {
              {
                console.log(list, "list");
              }
              return <ShowList list={list} />;
            })}
            <AddList board={board} addNewList={addNewList} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ShowBoard;
