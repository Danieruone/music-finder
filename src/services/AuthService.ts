import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
// credentials
const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_SECRET;

const Authorization =
  "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64");

const data = { grant_type: "client_credentials" };

const authOptions: AxiosRequestConfig = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    Authorization,
  },
  data: qs.stringify(data),
  url: "https://accounts.spotify.com/api/token",
};

export const getToken = async () => {
  return await axios(authOptions);
};
