import { axiosReq } from "./common";
import { API_PATH } from "constant";

interface ILoginReq {
  email: string;
  password: string;
}

function postLogin(body: ILoginReq): Promise<any> {
  return axiosReq.POST(`${API_PATH.USERS_}${API_PATH.USERS_LOGIN}`, body);
}

function getAllUsers() {
  return axiosReq.GET(`${API_PATH.USERS_}${API_PATH.USERS_List}`);
}

export const userAPI = {
  postLogin,
  getAllUsers,
};
