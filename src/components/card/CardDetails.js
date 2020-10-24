import React from "react";

function CardDetails({ card }) {
  return (
    <section className="font-nunito db-bg">
      <div>
        <div className="flex items-center text-gray-700">
          <svg
            className="w-6 h-6 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="font-bold text-xl pb-2 text-gray-800 ml-2">
            {card.name}
          </h2>
        </div>
        <p className="text-gray-700 tracking-wide text-sm pb-3">
          in list{" "}
          <a href="" className="underline">
            {card.listId.name}
          </a>
        </p>
      </div>
      <div className="flex items-start font-nunito">
        <div className="w-3/4 flex flex-col my-10 ">
          <div className="">
            <h3 className="text-sm text-gray-600 font-bold mb-3">Labels</h3>
            <div className="flex items-center">
              <p className="font-semibold text-gray-700 bg-yellow-500 px-3 py-1 rounded mb-3 cursor-pointer hover:bg-yellow-300 mr-2">
                Copy Request
              </p>
              <p className="font-semibold text-gray-700 bg-green-500 px-3 py-1 rounded mb-3 cursor-pointer hover:bg-green-200 mr-2">
                Trello Tip
              </p>
              <svg
                className="w-8 h-8 mb-3 text-gray-700 p-2 bg-gray-200 hover:bg-gray-500 rounded cursor-pointer"
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
          </div>
          <div>
            <form action="">
              <div className="">
                <div className="flex items-center my-3">
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
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                  <label
                    htmlFor=""
                    className="font-bold text-gray-800 ml-1 text-lg"
                  >
                    Description
                  </label>
                </div>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="4"
                  placholder="Write Something"
                  className="border-2 border-gray-400 w-full px-2 py-2 rounded font-lg mb-1"
                ></textarea>
              </div>
              <div className="mb-10">
                <input
                  type="submit"
                  name=""
                  id=""
                  value="save"
                  className="btn rounded"
                />
              </div>
              <div className="flex items-center my-3">
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <label
                  htmlFor=""
                  className="font-bold text-gray-800 ml-1 text-lg"
                >
                  Activity
                </label>
              </div>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Taco's co"
                className="border shadow border-gray-400 w-full px-2 py-2 rounded font-lg mb-5"
              />
            </form>
          </div>
        </div>
        <div className="w-1/4 flex flex-col pl-6">
          <h3 className="text-sm text-gray-600 font-bold mb-3">ADD TO CARD</h3>
          <div>
            <p className="font-semibold text-gray-700 bg-gray-200 px-3 py-1 rounded-md mb-3 cursor-pointer hover:bg-gray-100">
              Members
            </p>
            <p className="font-semibold text-gray-700 bg-gray-200 px-3 py-1 rounded-md mb-3 cursor-pointer hover:bg-gray-100">
              Labels
            </p>
            <p className="font-semibold text-gray-700 bg-gray-200 px-3 py-1 rounded-md mb-3 cursor-pointer hover:bg-gray-100">
              Due Date
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardDetails;
