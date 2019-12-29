import React from "react";
import styled from "styled-components";

import { Button } from "App/Atomics/Button";
import { InputText } from "App/Atomics/InputText";
import { useEmail } from "hooks/useEmail";
import { usePassword } from "hooks/usePassword";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  form {
    display: grid;
    grid-gap: 1rem;
    align-content: center;

    max-width: 16rem;
    width: 100%;

    strong,
    label,
    input {
      text-align: center;
    }

    strong {
      font-size: 2rem;
    }

    label {
      margin-top: 1rem;

      font-size: 1.25rem;
      font-weight: bolder;
    }

    input {
      margin: 0 0.5rem;
      padding: 0.5rem 0;
    }

    button {
      padding: 1rem;

      border: 1px solid black;
    }
  }
`;

export const SignUp = () => {
  const [emailInfo, dispatchEmailInfo] = useEmail();
  const [passwordInfo, dispatchPasswordInfo] = usePassword();

  const updateEmail = (email: string) => dispatchEmailInfo({ type: "SET", email });
  const updatePassword = (password: string) => dispatchPasswordInfo({ type: "SET", password });

  const tryToSignUp = () => {
    if (emailInfo.error || passwordInfo.error) {
      window.alert("이메일 혹은 암호에 에러가 있습니다");
    }
  };

  return (
    <Layout>
      <form>
        <strong>가입 신청</strong>
        <label>연합원 기본 정보 입력</label>
        <InputText placeholder="E-mail@example.com" onBlur={updateEmail} />
        <InputText placeholder="별명" onBlur={updatePassword} />
        <Button type="submit" onClick={tryToSignUp}>
          가입 신청
        </Button>
      </form>
    </Layout>
  );
};
