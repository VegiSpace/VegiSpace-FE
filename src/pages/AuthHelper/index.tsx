import { useSearchParams } from "react-router-dom";

const AuthHelper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const type = searchParams.get("type");

  console.log("type :", type);
  return (
    <>
      {type === "id" && <div>아이디 찾기</div>}
      {type === "password" && <div>비밀 번호 찾기</div>}
    </>
  );
};

export default AuthHelper;
