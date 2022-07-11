const env = process.env;

export const environment = {
  env: env.NODE_ENV,
  baseUrl: env.BASE_URL,
  title: env.VUE_APP_Title,
  appName: env.VUE_APP_AppName,
  copyRight: env.VUE_APP_CopyRight,
  apiHost: env.VUE_APP_ApiHost,
  logLevel: env.VUE_APP_LogLevel,
  connectMode: env.VUE_APP_ConnectMode,
};
