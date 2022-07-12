import * as types from "@/vuex/mutationConstant";
import { AuthState } from "@/vuex/module/auth/state";

export default {
  [types.AUTH_LOGIN](state: AuthState, isLogin: boolean): void {
    state.isLogin = isLogin;
  },
};
