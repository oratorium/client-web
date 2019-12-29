import React from "react";
import styled from "styled-components";

import { Button } from "App/Atomics/Button";
import { InputText } from "App/Atomics/InputText";
import { Link } from "App/Atomics/Link";
import { RESET_PASSWORD, SIGN_UP } from "constants/routes";
import { useEmail } from "hooks/useEmail";
import { usePassword } from "hooks/usePassword";

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

    max-width: 16rem;
    width: 100%;

    input {
      margin: 0 0.5rem;
      padding: 0.5rem 0;

      text-align: center;
    }

    .reset-password {
      width: min-content;

      margin-left: auto;
    }

    .go-to-sign-in {
      width: min-content;

      margin: 0 auto;
    }

    button {
      padding: 1rem;

      border: 1px solid black;
    }
  }
`;

export const SignIn = () => {
  const [emailInfo, dispatchEmailInfo] = useEmail();
  const [passwordInfo, dispatchPasswordInfo] = usePassword();

  const updateEmail = (email: string) => dispatchEmailInfo({ type: "SET", email });
  const updatePassword = (password: string) => dispatchPasswordInfo({ type: "SET", password });

  const tryToSignIn = () => {
    if (emailInfo.error || passwordInfo.error) {
      window.alert("이메일 혹은 암호에 에러가 있습니다");
    }
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
