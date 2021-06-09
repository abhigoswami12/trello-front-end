import React, { useRef } from "react";
import { useState } from "react";
import ShowCard from "../card/ShowCard";
import axios from "axios";
import useOnClickOutside from "../../hooks/UseOnClickOutside";
import AddCard from "./AddCard";
import { useEffect } from "react";

// axios.defaults.withCredentials = true;

function ShowList({ list }) {
  let [editListTitle, setEditListTitle] = useState(false);
  let [cards, setCards] = useState([]);

  let [isListMenuOpen, setIsListMenuOpen] = useState(false);
  let [listName, setListName] = useState(list.name);
  // let [showList, setShowList] = useState(list);
  // let [showListMenu, setShowListMenu] = use
  // console.log(list);
  // console.log(list._id);

  const ref = useRef();
  useOnClickOutside(ref, () => setEditListTitle(false));

  // Have not used this approach previously
  useEffect(() => {
    axios
      .get(
        `https://desolate-anchorage-67445.herokuapp.com/api/v1/cards/${list._id}/cards`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        // console.log(res.data);
        let { cards } = res.data;
        return setCards(cards);
      })
      .catch((error) => console.log(error));
  }, []);

  function addNewCard(card) {
    setCards([...cards, card]);
  }
  console.log(list, "list");

  return (
    <div className="bg-list-bg list-container rounded shadow flex flex-col mr-3">
      <div className="flex justify-between items-center px-3 py-2 text-sm text-gray-800">
        {!editListTitle ? (
          <p className="font-bold" onClick={() => setEditListTitle(true)}>
            {listName}
          </p>
        ) : (
          <input
            ref={ref}
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                axios({
                  method: "PUT",
                  url: `https://desolate-anchorage-67445.herokuapp.com/api/v1/lists/${list?._id}`,
                  headers: {
                    authorization: localStorage.getItem("token"),
                  },
                  data: {
                    list: {
                      name: listName,
                      boardId: list.boardId,
                    },
                  },
                })
                  .then((res) => {
                    let { list } = res.data;
                    // setShowList(list);
                    setEditListTitle(false);
                  })
                  .catch((error) => console.log(error));
              }
            }}
            type="text"
            name=""
            id=""
            className="font-bold w-full mr-2 p-2"
            value={listName}
            onChange={(event) => setListName(event.target.value)}
          />
        )}

        <div class="relative inline-block text-left">
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
        </div>
      </div>

      {/* Card */}
      <div>
        {cards?.map((card) => {
          return <ShowCard card={card} />;
        })}
      </div>
      <AddCard list={list} addNewCard={addNewCard} />
    </div>
  );
}
export default ShowList;
