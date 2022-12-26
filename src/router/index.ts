import Vue from "vue";
import VueRouter from "vue-router";
import Enumerable from "linq";

Vue.use(VueRouter);

const globalRoutes = [
  // ===== global =====
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/views/GoogleSheet/GoogleSheet.vue"),
    // component: () => import("@/views/NotFound.vue"),
  },
];

// 自動註冊 routes, export 變數名稱一定要含有 `Routes` 或直接 export default
const requireRouteContext = require.context("./children", false, /\w+.ts$/);
const requireRoutes = requireRouteContext
  .keys()
  .map((filename) => requireRouteContext(filename))
  .map((m) => m.default || m)
  .map((m) => {
    const routeKey = Enumerable.from(Object.keys(m)).firstOrDefault((key) => key.indexOf("Routes") > -1);
    if (routeKey) {
      return m[routeKey];
    }
    return m;
  });

const childrenRoutes = [
  // children routes here
  ...requireRoutes,
  globalRoutes,
].reduce((acc, item) => acc.concat(item), []);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/Index/Index.vue"),
    children: childrenRoutes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
