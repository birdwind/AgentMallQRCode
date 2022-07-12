export interface AuthState {
  isLogin: boolean;
  authorization: string | any;
}

export const state: AuthState = {
  isLogin: false,
  authorization: "",
};
