import { StateCreator, create } from "zustand";
import { persist, createJSONStorage, PersistOptions } from "zustand/middleware";
import { Storage } from "constant";

interface ILoginTokenStore extends State {
  actions: Actions;
}

// state: 로그인의 accessToken
interface State {
  accessToken: string | null;
}

// action: accessToken 설정, accessToken 초기화
interface Actions {
  resetToken: () => void;
  setToken: (accessToken: State["accessToken"]) => void;
}

const initialState: State = {
  accessToken: null || localStorage.getItem(Storage.USER_ACCESS_TOKEN),
};

const LoginTokenStore = create<ILoginTokenStore>()((set, get) => ({
  ...initialState,
  actions: {
    resetToken: () => {
      localStorage.removeItem(Storage.USER_ACCESS_TOKEN);

      return set({
        accessToken: null,
      });
    },
    setToken: (accessToken: State["accessToken"]) => {
      //console.log(accessToken);
      localStorage.setItem(Storage.USER_ACCESS_TOKEN, accessToken as string);

      return set({
        accessToken: accessToken,
      });
    },
  },
}));

const useLoginToken = () => LoginTokenStore((state) => state.accessToken);
const useLoginTokenActions = () => LoginTokenStore((state) => state.actions);

export { useLoginToken, useLoginTokenActions };
