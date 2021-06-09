import React from "react";

import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css";
import CardDetails from "./CardDetails";
import { useState } from "react";

function ShowCard({ card }) {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  let [isListMenuOpen, setIsListMenuOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white mx-3 my-3 px-2 py-1 rounded shadow cursor-pointer hover:bg-gray-200"
        onClick={open}
      >
        <div className="flex justify-between">
          <p className="text-gray-800">{card.name}</p>

          {/* <div class="relative inline-block text-left">
            <div>
              <button class="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600">
                <svg
                  className="w-4 h-4 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setIsListMenuOpen(!isListMenuOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
            </div>
            {isListMenuOpen && (
              <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                <div class="rounded-md bg-white shadow-xs">
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    >
                      edit list
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    >
                      delete list
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>

      <Dialog isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <CardDetails card={card} />
      </Dialog>
    </>
  );
}

export default ShowCard;
