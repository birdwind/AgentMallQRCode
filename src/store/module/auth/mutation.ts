import * as types from "@/store/mutationConstant";
import { AuthState } from "@/store/module/auth/state";

export default {
  [types.AUTH_LOGIN](state: AuthState, isLogin: boolean): void {
    state.isLogin = isLogin;
  },
};
