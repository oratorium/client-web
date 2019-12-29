import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "App/Atomics/Button";
import { InputText } from "App/Atomics/InputText";
import { Link } from "App/Atomics/Link";
import { RESET_PASSWORD, SIGN_UP } from "constants/routes";

const Layout = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  form {
    display: grid;
    grid-gap: 1rem;
    align-content: center;

    max-width: 240px;
    width: 100%;

    input {
      padding: 0.5rem 0;

      text-align: center;
    }

    .reset-password {
      text-align: end;
    }

    .go-to-sign-in {
      text-align: center;
    }

    button {
      padding: 1rem;

      border: 1px solid black;
    }
  }
`;

const NONE = "";

const createInfo = () => ({ value: NONE, error: NONE });

export const SignIn = () => {
  const [emailInfo, setEmailInfo] = useState(createInfo);
  const [passwordInfo, setPasswordInfo] = useState(createInfo);

  const isValidateEmail = (email: string) => {
    const pattern = /.+@.+\..+/;
    return pattern.test(email);
  };
  const isValidatePassword = (password: string) => {
    const pattern = /[a-z0-9]{12,}/;
    return pattern.test(password);
  };

  const updateEmail = (email: string) => {
    if (isValidateEmail(email)) {
      setEmailInfo(() => ({ value: email, error: NONE }));
    } else {
      setEmailInfo(() => ({ value: NONE, error: "이메일 형식이 올바르지 않습니다" }));
    }
  };
  const updatePassword = (password: string) => {
    if (isValidatePassword(password)) {
      setPasswordInfo(() => ({ value: password, error: NONE }));
    } else {
      setPasswordInfo(() => ({ value: NONE, error: "비밀번호는 12자 이상이고, 알파벳과 숫자가 1개 이상이어야 합니다" }));
    }
  };

  const tryToSignIn = () => {
    isValidateEmail(emailInfo.value);
    isValidatePassword(passwordInfo.value);
  };

  return (
    <Layout>
      <form>
        <InputText type="email" placeholder="e-mail@example.com" onBlur={updateEmail} />
        <InputText type="password" placeholder="굉장히 안전한 비밀번호" onBlur={updatePassword} />
        <Link.Internal to={RESET_PASSWORD} className="reset-password">
          비밀번호를 잊으셨나요?
        </Link.Internal>
        <Button type="submit" onClick={tryToSignIn}>
          로그인
        </Button>
        <Link.Internal to={SIGN_UP} className="go-to-sign-in">
          회원 가입 신청하기
        </Link.Internal>
      </form>
    </Layout>
  );
};
