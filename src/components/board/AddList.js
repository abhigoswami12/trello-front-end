import { useFormik } from "formik";
import React, { useState } from "react";
import axios from "axios";
import { validateList } from "../../utils/validateLogic";

// axios.defaults.withCredentials = true;

function AddList({ board, addNewList }) {
  let [addList, setAddList] = useState(false);
  // let [list, setList] = useState(null);

  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
    },
    validate: validateList,
    onSubmit: (values, actions) => {
      axios({
        method: "POST",
        url: "https://desolate-anchorage-67445.herokuapp.com/api/v1/lists",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        data: {
          list: {
            name: values.name,
            boardId: board._id,
          },
        },
      })
        .then((res) => {
          let { list } = res.data;
          actions.setSubmitting(false);
          values.name = "";
          return addNewList(list);
        })
        .catch((error) => actions.setSubmitting(false));
    },
  });

  return (
    <>
      {!addList ? (
        <div
          onClick={() => setAddList(true)}
          className="list-container hover:bg-dark-green hover:rounded bg-lighter-green rounded shadow"
        >
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
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="w-64">
            <div className="w-full">
              <textarea
                className="shadow rounded resize-none p-2 w-full"
                name="name"
                id=""
                rows="2"
                placeholder="Add List"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
              ></textarea>
              <small className="text-red-700">
                {errors?.name && touched.name && errors.name}
              </small>
            </div>
            <div className="flex flex-between items-center mb-2">
              <button type="submit" className="btn rounded">
                {isSubmitting ? "Adding List" : "Add List"}
              </button>
              <span
                className="cursor-pointer ml-8 font-bold text-gray-700"
                onClick={() => setAddList(false)}
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

export default AddList;
