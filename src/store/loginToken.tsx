import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Storage } from "constant";

// state: 로그인의 accessToken
type State = {
  accessToken: string | null;
};

// action: accessToken 설정, accessToken 초기화
type Actions = {
  resetToken: () => void;
  setToken: (accessToken: State["accessToken"]) => void;
};

const initialState: State = {
  accessToken: null,
};

const LoginTokenStore = create(
  persist<State & { actions: Actions }>(
    (set, get) => ({
      ...initialState,
      actions: {
        resetToken: () => ({ accessToken: null }),
        setToken: (accessToken: State["accessToken"]) => ({
          accessToken: accessToken,
        }),
      },
    }),
    {
      name: Storage.USER_ACCESS_TOKEN, // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

const useLoginToken = LoginTokenStore((state) => state.accessToken);
const useLoginTokenActions = LoginTokenStore((state) => state.actions);

export { useLoginToken, useLoginTokenActions };
