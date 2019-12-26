import { createElement, createContext, Reducer, useContext, useReducer, useMemo, DependencyList, Dispatch, ReactNode } from "react";

import { Action, ActionList } from "./combineReducers";

export type CustomDispatch<A> = Dispatch<A> & ((callback: (commit: Dispatch<A>) => void | Promise<void>) => void);

export const createStore = <S, A extends Action | ActionList>(reducer: Reducer<S, A>) => {
  const Context = createContext<readonly [S, CustomDispatch<A>]>(null as any);

  type Selector<SS> = (store: S) => SS;
  type useStore = <SS>(selector: Selector<SS>, dependencies?: DependencyList) => readonly [SS, CustomDispatch<A>];
  const useStore: useStore = (selector, dependencies) => {
    const [store, dispatch] = useContext(Context);
    const createMemo = () => [selector(store), dispatch] as const;
    return useMemo(createMemo, dependencies);
  };

  const useDispatch = () => useContext(Context)[1];

  const useSelector = <SS>(selector: Selector<SS>, dependencies?: DependencyList) => {
    const [store] = useContext(Context);
    const createMemo = () => selector(store);
    return useMemo(createMemo, dependencies);
  };

  type Props = Readonly<{ children: ReactNode; createInitialStore?: () => Record<string, any> }>;
  const StoreProvider = ({ children, createInitialStore = () => ({}) }: Props) => {
    const initializer = () => reducer((createInitialStore() as unknown) as S, ({ type: Symbol("initialization") } as unknown) as A);
    const [state, dispatch] = useReducer(reducer, null, initializer);
    const customDispatch: CustomDispatch<A> = (action: any) => {
      if (typeof action === "function") {
        action(dispatch);
      } else {
        dispatch(action);
      }
    };
    const context = [state, customDispatch] as const;
    return createElement(Context.Provider, { value: context }, children);
  };

  return { useStore, useDispatch, useSelector, StoreProvider };
};
