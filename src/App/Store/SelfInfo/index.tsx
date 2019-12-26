import { createDuck } from "lib/danuel-store";

type NonSignInUserInfo = {
  id: null;
  displayName: null;
};

type SignInUserInfo = {
  id: string;
  displayName: string;
};

const createInitialState = () => ({ id: null, displayName: null } as NonSignInUserInfo | SignInUserInfo);

export const SelfReducer = createDuck({
  namespace: "Self",
  createInitialState,
  reducers: {
    signOut(state) {
      state.id = null;
      state.displayName = null;
    },
    signIn(state, { id, displayName }: SignInUserInfo) {
      state.id = id;
      state.displayName = displayName;
    }
  }
});
