import Vuex from "@/vuex";
import axios, { AxiosResponse } from "axios";
import router from "@/router";
import { MyLogger } from "@/base/utils/MyLogger";

const store = Vuex;

const instance = axios.create({
  baseURL: "/api",
  timeout: 1000 * 300,
  maxContentLength: 1024 * 50,
});

function showLoading(isShow: boolean): void {
  store.commit("System/SYSTEM_SHOW_LOADING", isShow);
  console.log("showLoading", isShow);
}

function showMessage(text: string): void {
  store.commit("NetAlert/NET_ALERT_SHOW_LOADING", {
    isShow: true,
    content: text,
  });
}

function logout() {
  store.dispatch("Auth/cleanAuth", {});
  router.push("logout");
}

// instance.defaults.baseURL = "/api";
// instance.defaults.withCredentials = true;
instance.defaults.headers.post["Content-Type"] = "application/json";

// 請求攔截
instance.interceptors.request.use((config) => {
  if (store.getters["Auth/authorization"] !== "") {
    config.headers.Authorization = "Bearer " + store.getters["Auth/authorization"];
  }
  config.headers["x-client-action-time"] = new Date().getTime().toString();
  const customConfig: any = config;
  if (customConfig.isShowLoading) {
    showLoading(true);
  }

  return config;
});

// 響應攔截
instance.interceptors.response.use(
  (response) => {
    showLoading(false);
    return response;
  },
  (error) => {
    showLoading(false);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          showMessage("您沒有權限");
          logout();
          break;
        case 404:
          showMessage("找不到該頁面");
          console.log("找不到該頁面");
          break;
        case 500:
          showMessage("伺服器出錯");
          console.log("伺服器出錯");
          break;
        case 503:
          showMessage("服務失效");
          console.log("服務失效");
          break;
        case 400:
          break;
        default:
          showMessage(`連接錯誤${error.response.status}`);
          console.log(`連接錯誤${error.response.status}`);
      }
    } else {
      showMessage("連接到服務器失敗");
      console.log("連接到服務器失敗");
    }
    return Promise.reject(error);
  }
);

const axiosInstance = instance;

export function fetch(url: string, config: {} = {}): any {
  return new Promise<string>((resolve, reject) => {
    axiosInstance
      .get(url, config)
      .then((response) => {
        if (response.data === "") {
          console.log("資料錯誤，尚未處理");
          return reject(response.data);
        } else if (response.data === "Update Failed!") {
          return reject(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function post(url: string, data: {} | null = {}, config: {} = {}): any {
  return new Promise<string>((resolve, reject) => {
    axiosInstance.post(url, data, config).then(
      (response) => {
        if (response.data === "") {
          console.log("資料錯誤，尚未處理");
          return reject(response.data);
        } else if (response.data === "Update Failed!") {
          return reject(response.data);
        } else {
          return resolve(response.data);
        }
      },
      (err) => {
        reject(err);
      }
    );
  });
}

export function remove(url: string, data = {}): any {
  return new Promise<string>((resolve, reject) => {
    axiosInstance.delete(url, data).then(
      (response) => {
        if (response.data === "") {
          console.log("資料錯誤，尚未處理");
          return reject(response.data);
        } else if (response.data === "Update Failed!") {
          return reject(response.data);
        } else {
          return resolve(response.data);
        }
      },
      (err) => {
        reject(err);
      }
    );
  });
}

export function put(url: string, data = {}): any {
  return new Promise<string>((resolve, reject) => {
    axiosInstance.put(url, data).then(
      (response) => {
        if (response.data === "") {
          console.log("資料錯誤，尚未處理");
          return reject(response.data);
        } else if (response.data === "Update Failed!") {
          return reject(response.data);
        } else {
          return resolve(response.data);
        }
      },
      (err) => {
        reject(err);
      }
    );
  });
}

export default {
  post,
  fetch,
  put,
  remove,
};
