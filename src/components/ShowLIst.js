import React from "react";
import ShowCard from "./ShowCard";

function ShowList() {
  return (
    <div className="bg-list-bg w-64 rounded shadow flex flex-col mr-3">
      <div className="flex justify-between items-center px-3 py-2 text-sm text-gray-800">
        <p className="font-bold">Questions for Next meeting</p>
        <svg
          className="w-4 h-4 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>

      {/* Card */}
      <div>
        <ShowCard />
        <ShowCard />
        <ShowCard />
      </div>
      <div className="flex items-center mx-3 text-gray-700 mb-2 py-1 cursor-pointer hover:bg-gray-400 hover:text-gray-900">
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <p className="ml-1">Add Another Card</p>
      </div>
    </div>
  );
}
export default ShowList;
