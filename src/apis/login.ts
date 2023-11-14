import { axiosReq } from "./common";
import { API_PATH } from "constant";

interface ILoginRes {
  email: string;
  password: string;
}

function postLogin(data: ILoginRes) {
  return axiosReq.POST(`${API_PATH.USERS_}${API_PATH.USERS_LOGIN}`, data);
}

export const loginAPI = {
  postLogin,
};
