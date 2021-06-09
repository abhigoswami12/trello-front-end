import Axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { validateCard } from "../../utils/validateLogic";
import axios from "axios";

// axios.defaults.withCredentials = true;

function AddCard({ list, addNewCard }) {
  let [addCard, setAddCard] = useState(false);

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
    },
    validate: validateCard,
    onSubmit: (values, actions) => {
      // console.log(list, "List in add card");
      axios({
        method: "POST",
        url: "https://desolate-anchorage-67445.herokuapp.com/api/v1/cards",
        data: {
          card: {
            name: values.name,
            listId: list._id,
            boardId: list.boardId,
          },
        },
      })
        .then((res) => {
          let { card } = res.data;
          actions.setSubmitting(false);
          values.name = "";
          return addNewCard(card);
        })
        .catch((error) => actions.setSubmitting(false));
    },
  });
  return (
    <>
      {!addCard ? (
        <div
          onClick={() => setAddCard(true)}
          className="flex items-center mx-3 text-gray-700 mb-2 py-1 cursor-pointer hover:bg-gray-400 hover:text-gray-900"
        >
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
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mx-3">
            <div className="w-full">
              <textarea
                className="shadow rounded resize-none p-2 w-full"
                name="name"
                id=""
                rows="2"
                placeholder="add card"
                onChange={handleChange}
                onBlur={handleChange}
                value={values.name}
              ></textarea>
              <small className="text-red-700">
                {errors?.name && touched.name && errors.name}
              </small>
            </div>
            <div className="flex flex-between items-center mb-2">
              <button type="submit" className="btn rounded">
                save
              </button>
              <span
                className="cursor-pointer ml-8 font-bold text-gray-700"
                onClick={() => setAddCard(false)}
              >
                X
              </span>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default AddCard;
