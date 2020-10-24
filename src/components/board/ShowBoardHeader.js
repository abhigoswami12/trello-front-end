import React from "react";

function ShowBoardHeader({ board }) {
  return (
    <div>
      <nav className="bg-light-green">
        <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className=" flex items-center justify-center text-white">
                  <a
                    href="#"
                    className="px-3 py-2 hover:bg-green-800 rounded-md"
                  >
                    <span className="text-lg font-bold text-gray-300">
                      {board?.name}
                    </span>
                  </a>

                  {/* <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Team
                  </a> */}

                  <a
                    href="#"
                    className="ml-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white bg-green-800 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
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
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="ml-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white bg-green-800 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <span className="tracking-wider">
                      {board?.teamId?.name}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-md px-3 flex items-center ml-4  md:ml-6 text-gray-300 hover:text-white hover:bg-green-800 focus:outline-none focus:text-white focus:bg-gray-700 py-2">
                <svg
                  className=" w-4 h-4 mr-1"
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
                <span>Show Menu</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ShowBoardHeader;
