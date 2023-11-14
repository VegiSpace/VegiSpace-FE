import { axiosReq } from "./common";
import { API_PATH } from "constant";

interface ILoginRes {
  email: string;
  password: string;
}

function postLogin(data: ILoginRes) {
  return axiosReq.POST(`${API_PATH.USERS_}${API_PATH.USERS_LOGIN}/`, data);
}

function getAllUsers() {
  return axiosReq.GET(`${API_PATH.USERS_}${API_PATH.USERS_List}/`);
}

export const userAPI = {
  postLogin,
  getAllUsers,
};
