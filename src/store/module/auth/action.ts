import { MyLogger } from "@/base/utils/MyLogger";
import { AUTH_LOGIN, UI_HISTORY_MESSAGE } from "@/store/mutationConstant";

export default {
  async login(context: any, data: any): Promise<void> {
    try {
      const userName = data.account;
      const password = data.password;

      // Check Login Data Same as System
      await context.commit(AUTH_LOGIN, true);
    } catch (error) {
      MyLogger.log("Login Failed");
    }
  },
};
