import axios from "axios";

const baseURL = "https://efb25c89.ngrok.io/";

let api = {};

api.get = async endpoint => {
  const response = await axios.get(baseURL + endpoint);
  return response;
};

export default api;
