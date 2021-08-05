import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "./AuthService";
import { QueryParams } from "../interface/QueryParams";

export const searchByQuery = async (params: QueryParams) => {
  const url = `https://api.spotify.com/v1/search?q=${params.q}&type=${params.type}&market=${params.market}&limit=${params.limit}`;
  try {
    const res = await getToken();
    const token = res.data.access_token;
    const options: AxiosRequestConfig = {
      method: "GET",
      url,
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return await axios(options);
  } catch (e) {
    console.log(e);
  }
};

export const getAnotherPage = async (url:string) => {
  try {
    const res = await getToken();
    const token = res.data.access_token;
    const options: AxiosRequestConfig = {
      method: "GET",
      url,
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return await axios(options);
  } catch (e) {
    console.log(e);
  }
};
