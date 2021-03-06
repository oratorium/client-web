import immer from "immer";

type Option<S, R> = Readonly<{
  namespace: string;
  createInitialState: S | (() => S);
  reducers: R;
}>;

type Reducer<S> = (state: S, action: { readonly type: symbol; readonly payload: any }) => S;

interface Action<P> {
  readonly type: unique symbol;
  readonly payload: P;
}

type Actions<S, R extends Record<string, (state: S, payload: any) => void>> = {
  readonly [key in keyof R]: R[key] extends (state: S) => void
    ? () => Action<void>
    : R[key] extends (state: S, payload: infer P) => void
    ? (payload: P) => Action<P>
    : never;
};

export const createDuck = <S, R extends Record<string, (state: S, payload: any) => void>>({
  namespace,
  createInitialState,
  reducers
}: Option<S, R>) => {
  const reducer: Reducer<S> = (
    state = typeof createInitialState === "function" ? (createInitialState as () => S)() : createInitialState,
    action
  ) => (!map.has(action.type) ? state : immer(state, draft => void map.get(action.type)!(draft as S, action.payload)));
  const map = new Map(
    Object.entries(reducers).map(([key, value]) => {
      const name = `${namespace}/${key}`;
      const type = Symbol(name);
      (reducer as Record<string, any>)[key] = (payload: any) => ({ type, payload });
      return [type, value];
    })
  );
  return reducer as Reducer<S> & Actions<S, R>;
};
