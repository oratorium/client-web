import React from "react";
import styled from "styled-components";
import { InputText } from "App/Atomics/InputText";
import { Button } from "App/Atomics/Button";

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

export const SignUp = () => (
  <Layout>
    <form>
      <strong>가입 신청</strong>
      <label>연합원 기본 정보 입력</label>
      <InputText placeholder="E-mail@example.com" />
      <InputText placeholder="별명" />
      <InputText placeholder="나이" />
      <Button type="submit" onClick={console.log}>
        가입 신청
      </Button>
    </form>
  </Layout>
);
