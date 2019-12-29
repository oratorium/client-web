import { useReducer } from "react";

type State = ReturnType<typeof createInitialState>;

type Action = {
  type: "SET";
  password: string;
};

const NONE = "";

const isValidatePassword = (password: string) => {
  const pattern = /[a-z0-9]{12,}/;
  return pattern.test(password);
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET": {
      const { password } = action;
      if (!isValidatePassword(password)) {
        return { value: NONE, error: "암호 형식이 올바르지 않습니다" };
      }
      return { value: password, error: NONE };
    }
    default: {
      return state;
    }
  }
};

const createInitialState = () => ({ value: NONE, error: NONE });

export const usePassword = () => useReducer(reducer, null, createInitialState);
