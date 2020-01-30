import axios from "axios";

const baseURL = "https://cashcog-api.herokuapp.com";

let api = {};

api.get = async endpoint => {
  const response = await axios(baseURL + endpoint)
    .then(response => response)
    .catch(error => {
      return error.response;
    });
  return response;
};

api.patch = async (endpoint, payload) => {
  // eslint-disable-next-line no-console
  console.log("payload", payload);

  let fetchData = {
    method: "PATCH",
    data: payload,
    headers: new Headers()
  };
  return await axios(baseURL + endpoint, fetchData)
    .then(response => {
      // eslint-disable-next-line no-console
      console.log("response", response);
      return response;
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log("error", error.response);
      return error.response;
    });
};

api.delete = async endpoint => {
  let fetchData = {
    method: "DELETE",
    headers: new Headers()
  };
  return await axios(baseURL + endpoint, fetchData)
    .then(response => {
      // eslint-disable-next-line no-console
      console.log("response", response);
      return response;
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log("error", error.response);
      return error.response;
    });
};
export default api;
