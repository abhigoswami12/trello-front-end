import React, { useRef } from "react";
import { useState } from "react";
import ShowCard from "../card/ShowCard";
import axios from "axios";
import useOnClickOutside from "../../hooks/UseOnClickOutside";
import AddCard from "./AddCard";
import { useEffect } from "react";

function ShowList({ list }) {
  let [editListTitle, setEditListTitle] = useState(false);
  let [cards, setCards] = useState([]);
  // console.log(list);
  // console.log(list._id);

  const ref = useRef();
  useOnClickOutside(ref, () => setEditListTitle(false));

  // Have not used this approach previously
  useEffect(() => {
    axios
      .get(`/api/v1/cards/${list._id}/cards`)
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

  return (
    <div className="bg-list-bg list-container rounded shadow flex flex-col mr-3">
      <div className="flex justify-between items-center px-3 py-2 text-sm text-gray-800">
        {!editListTitle ? (
          <p className="font-bold" onClick={() => setEditListTitle(true)}>
            {list.name}
          </p>
        ) : (
          <input
            ref={ref}
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                setEditListTitle(false);
              }
            }}
            type="text"
            name=""
            id=""
            className="font-bold w-full mr-2 p-2"
            value="Questions for Next meeting"
          />
        )}

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
        {cards?.map((card) => {
          return <ShowCard card={card} />;
        })}
      </div>
      <AddCard list={list} addNewCard={addNewCard} />
    </div>
  );
}
export default ShowList;
