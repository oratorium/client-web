import { combineReducers, createStore } from "lib/danuel-store";

import { SelfReducer as Self } from "./SelfInfo";
import { Reducer } from "react";

const reducer = combineReducers({ Self });

export type AppStore = typeof reducer extends Reducer<infer S, any> ? S : never;

export const {
  StoreProvider: AppStoreProvider,
  useStore: useAppStore,
  useSelector: useAppSelector,
  useDispatch: useAppDispatch
} = createStore(reducer);
