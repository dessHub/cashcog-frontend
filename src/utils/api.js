import axios from "axios";

const baseURL = "https://cashcog-api.herokuapp.com";

let api = async (endpoint, payload) => {
  return await axios(baseURL + endpoint, payload)
    .then(response => {
      return response;
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log("error", error.response);
      return error.response;
    });
};

export default api;
