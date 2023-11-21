import { axiosReq } from "./common";
import { API_PATH } from "constant";
import { SignUpFormValues } from "types";

interface ILoginReq {
  email: string;
  password: string;
}

interface ISignupReq
  extends Omit<
    SignUpFormValues,
    "emailDomain" | "emailAddress" | "selectAll" | "passwordConfirm"
  > {
  email: string;
}

function postLogin(body: ILoginReq): Promise<any> {
  return axiosReq.POST(`${API_PATH.USERS_}${API_PATH.USERS_LOGIN}`, body);
}

function postSignup(body: ISignupReq): Promise<any> {
  return axiosReq.POST(`${API_PATH.USERS_}${API_PATH.USERS_SIGNUP}`, body);
}

function getAllUsers() {
  return axiosReq.GET(`${API_PATH.USERS_}${API_PATH.USERS_List}`);
}

export const userAPI = {
  postLogin,
  postSignup,
  getAllUsers,
};
