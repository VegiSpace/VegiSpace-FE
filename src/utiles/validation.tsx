//조건 충족 시 true 반환
//경고창을 띄울 필요가 없는 상태: true

function IsEmail(value: string) {
  const regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  console.log(value, regExp.test(value));
  if (value === undefined || value === "") {
    return true;
  } else {
    return regExp.test(value); //조건 충족 시 true 반환
  }
}

function IsId(value: string) {
  const regExp = /[A-Za-z0-9]\w{4,}/;
  console.log(value, regExp.test(value));
  if (value === undefined || value === "") {
    return true;
  } else {
    return regExp.test(value); //조건 충족 시 true 반환
  }
}

function IsPassword(value: string) {
  const regExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
  console.log(regExp.test(value));
  console.log(value, regExp.test(value));
  if (value === undefined || value === "") {
    return true;
  } else {
    return regExp.test(value); //조건 충족 시 true 반환
  }
}

export { IsEmail, IsId, IsPassword };
