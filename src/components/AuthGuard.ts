import { Vue, Component, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";

import { Getter } from "vuex-class";

import Unauthorized from "@/components/Unauthorized.vue";

@Component
export class AuthGuard extends Vue {
  @Getter(`Auth/isLogin`)
  private readonly isLogin!: boolean;

  @Prop()
  private readonly isReady!: boolean;

  render(h: CreateElement): VNode {
    // if (!this.isReady && !this.isLogin) {
    //   return h(Loading);
    // }

    // if (this.isReady && !this.isLogin) {
    //   return h(Login);
    // }

    // if (this.isLogin && this.$slots && this.$slots.default) {
    if (this.$slots && this.$slots.default) {
      return this.$slots.default[0];
    }
    // return this.$slots.default[0];
    // }

    return h(Unauthorized);
  }
}
