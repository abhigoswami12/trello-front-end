import React from "react";

function Dashboard() {
  return (
    <section className="db-bg font-nunito h-screen">
      <div className="flex items-start max-w-screen-lg mx-auto py-12">
        <div className="w-1/5">
          <div className="flex flex-col leading-10">
            <p className="font-bold text-lg hover:bg-gray-400 opacity-75 px-3 hover:rounded cursor-pointer">
              Home
            </p>
            <p className="font-bold text-lg hover:bg-gray-400 opacity-75 px-3 hover:rounded cursor-pointer">
              Boards
            </p>
            <div>
              <div className="flex justify-between items-center px-3">
                <p className="text-gray-800 text-lg">Teams</p>
                <svg
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
              <div className="flex items-center justify-start px-3 font-bold db-light-bg text-trello-blue rounded-md">
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
                <div className="ml-3">altcampus</div>
              </div>
              <div className="px-6">
                <div>
                  <p>All team Boards</p>
                </div>
                <div> members</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5"></div>
      </div>
    </section>
  );
}

export default Dashboard;
