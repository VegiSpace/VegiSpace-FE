import { useSearchParams } from "react-router-dom";
import { FindPW } from "pages";
const AuthHelper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const type = searchParams.get("type");

  // console.log("type :", type);
  return (
    <>
      {/*{type === "id" && <div>아이디 찾기</div>}*/}
      {type === "password" && <FindPW />}
    </>
  );
};

export default AuthHelper;
