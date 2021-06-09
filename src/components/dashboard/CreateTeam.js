import { useFormik } from "formik";
import React from "react";
import { validateTeam } from "../../utils/validateLogic";
import axios from "axios";

// axios.defaults.withCredentials = true;

function CreateTeam({ closeTeamDialog, addNewTeam }) {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validate: validateTeam,
    onSubmit: (values, actions) => {
      axios({
        method: "POST",
        url: "https://desolate-anchorage-67445.herokuapp.com/api/v1/teams",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        data: {
          team: values,
        },
      }).then((res) => {
        let { team } = res.data;
        addNewTeam(team);
        closeTeamDialog();
      });
    },
  });

  return (
    <>
      <section>
        <div className="flex items-center font-nunito">
          <div className="w-1/2 flex flex-col my-10 ">
            <div className="">
              <h2 className="font-bold text-2xl pb-3 text-gray-900">
                Let's build a Team
              </h2>
              <p className="text-gray-700 tracking-wide font-xl font-semibold pb-3">
                Boost your productivity by making it easier for everyone to
                access boards in one location.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="font-bold text-gray-900">
                    Team's Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Taco's co"
                    className="border-2 border-gray-400 w-full px-2 py-2 rounded font-lg mb-5"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <small>
                    {errors && errors.name && touched.name && errors.name}
                  </small>
                </div>
                <div>
                  <label htmlFor="" className="font-bold text-gray-900">
                    Team's Description
                  </label>
                  <textarea
                    name="description"
                    id=""
                    cols="30"
                    rows="5"
                    placholder="Write Something"
                    className="border-2 border-gray-400 w-full px-2 py-2 rounded font-lg mb-5"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    name=""
                    id=""
                    value="continue"
                    className="btn rounded"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2">
            {/* <img
              className="bg-cover"
              src="https://a.trellocdn.com/prgb/dist/images/create-team/wavy-border.1ea9c6f8c41d10be0e12.svg"
              alt="team background"
            /> */}
            <img
              src="https://a.trellocdn.com/prgb/dist/images/organization/empty-board.286f8fc83e01c93ed27e.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateTeam;

// INstead of formik do it on your own
