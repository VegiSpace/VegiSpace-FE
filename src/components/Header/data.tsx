interface pathDataProps {
  needPrev: boolean;
  title: string;
  needHeader: boolean;
  needAuth: boolean;
}

interface headerDataProps {
  [index: string]: pathDataProps;
}

const headerData: headerDataProps = {
  "/login": {
    needPrev: true,
    title: "로그인",
    needHeader: true,
    needAuth: false,
  },
  "/": {
    needPrev: false,
    title: "",
    needHeader: false,
    needAuth: false,
  },
  "/signup": {
    needPrev: true,
    title: "회원가입",
    needHeader: true,
    needAuth: false,
  },
  "/shop": {
    needPrev: false,
    title: "식료품 가게",
    needHeader: true,
    needAuth: true,
  },
  "/recipe": {
    needPrev: false,
    title: "레시피 북",
    needHeader: true,
    needAuth: true,
  },
  "/order": {
    needPrev: false,
    title: "주문 내역",
    needHeader: true,
    needAuth: true,
  },
  "/mypage": {
    needPrev: false,
    title: "마이 페이지",
    needHeader: true,
    needAuth: true,
  },
  "/find?type=id": {
    needPrev: true,
    title: "아아디 찾기",
    needHeader: true,
    needAuth: false,
  },
  "/find?type=password": {
    needPrev: true,
    title: "비밀번호 찾기",
    needHeader: true,
    needAuth: false,
  },
};

export { headerData };
