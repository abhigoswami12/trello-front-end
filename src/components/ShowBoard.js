import React from "react";
import ShowBoardHeader from "./ShowBoardHeader";
import ShowList from "./ShowLIst";
import Header from "./header/Header";

function ShowBoard() {
  return (
    <div className="bg-light-green h-screen ">
      <Header />
      <ShowBoardHeader />
      <section className="max-w-7xl px-1 my-2 sm:px-6 lg:px-4 font-nunito">
        <div className="flex flex-no-wrap items-start">
          <ShowList />
          <ShowList />
          <div className=" hover:bg-dark-green hover:rounded bg-lighter-green w-64 rounded shadow">
            <div className="flex items-center py-1 px-2 text-gray-700 cursor-pointer hover:text-gray-900">
              <svg
                className="w-5 h-5 text-white"
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
              <p className="ml-1 text-white py-1">Add another list</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShowBoard;
