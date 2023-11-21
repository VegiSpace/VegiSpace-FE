import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosReq = {
  async GET<T>(path: string, option?: { params: string }) {
    const response = await axiosInstance.get<T>(`${path}/`, option);
    console.log("axiosReq: GET: ", response);
    return response;
  },

  async POST<T>(path: string, body: T, option?: AxiosRequestConfig) {
    const response = await axiosInstance.post<T>(`${path}/`, body, option);
    console.log("axiosReq: POST: ", path, body, response);
    return response.data;
  },
};
