import { AuthState } from "@/vuex/module/auth/state";

export default {
  isLogin: (state: AuthState): boolean => state.isLogin,
};
