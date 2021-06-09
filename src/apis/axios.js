// import axios from "axios";

// export const setAuthHeaders = (setLoading = () => null) => {
//   axios.defaults.headers = {
//     Accept: "applicaion/json",
//     "Content-Type": "application/json",
//     "X-CSRF-TOKEN": document
//       .querySelector('[name="csrf-token"]')
//       .getAttribute("content"),
//   };
//   const token = localStorage.getItem("token");
//   if (token) {
//     axios.defaults.headers["X-Auth-Token"] = token;
//   }
//   setLoading(false);
// };

import axios from "axios";

export const setAuthHeaders = (setLoading = () => null) => {
  axios.defaults.headers = {
    Accept: "applicaion/json",
    "Content-Type": "application/json",
  };
  const token = localStorage.getItem("token");
  // const email = localStorage.getItem("authEmail");
  if (token) {
    // axios.defaults.headers["X-Auth-Email"] = email;
    axios.defaults.headers["X-Auth-Token"] = token;
  }
  setLoading(false);
};
