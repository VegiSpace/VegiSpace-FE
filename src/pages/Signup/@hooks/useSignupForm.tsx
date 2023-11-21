import { userAPI } from "apis";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SignUpFormValues } from "types";

const useSignupForm = () => {
  const navigation = useNavigate();
  const submitLoginForm = async (formData: SignUpFormValues) => {
    const { emailAddress, emailDomain, selectAll, passwordConfirm, ...rest } =
      formData;
    const email = emailAddress + "@" + emailDomain;
    const data = {
      ...rest,
      email,
    };
    try {
      const response = await userAPI.postSignup(data);
      console.log("useSignupForm", response);
      navigation("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        const errorData = error.response?.data;
        const errorStatus = errorData?.status;
        throw new Error(`로그인 에러 ${errorStatus}: ${errorData}`);
      }
      console.log(error);
    }
  };
  return { submitLoginForm };
};

export default useSignupForm;
