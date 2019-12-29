import { useReducer } from "react";

type State = ReturnType<typeof createInitialState>;

type Action = {
  type: "SET";
  email: string;
};

const NONE = "";

const isValidateEmail = (email: string) => {
  const pattern = /.+@.+\..+/;
  return pattern.test(email);
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET": {
      const { email } = action;
      if (!isValidateEmail(email)) {
        return { value: NONE, error: "이메일 형식이 올바르지 않습니다" };
      }
      return { value: email, error: NONE };
    }
    default: {
      return state;
    }
  }
};

const createInitialState = () => ({ value: NONE, error: NONE });

export const useEmail = () => useReducer(reducer, null, createInitialState);
