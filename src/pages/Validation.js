export function SValidation(text) {
  let errors = {};

  if (!text.id) {
    errors.id = "아이디를 입력해 주세요";
  } /* else if (textid.length > 6) {
    errors.userid = "아이디는 여섯자 이상이어야 합니다.";
  } */
  if (!text.password) {
    errors.password = "비밀번호를 입력해 주세요.";
  }
  if (!text.password2) {
    errors.password2 = "비밀번호 재확인을 입력해 주세요.";
  } else if (text.password2 !== text.password) {
    errors.password2 = "비밀번호가 일치하지 않습니다.";
  }
  if (!text.name) {
    errors.name = "이름을 입력해주세요.";
  }
  if (errors.gender === "default") {
    errors.gender = "성별을 선택하세요.";
  }
  return errors;
}
