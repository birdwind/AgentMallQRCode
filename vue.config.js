const EventHooksPlugin = require("event-hooks-webpack-plugin");
const { PromiseTask } = require("event-hooks-webpack-plugin/lib/tasks");
const { exec } = require("child_process");

const enableFormatWhileServing = false;

const transferModules = [
  //
  "vue-loading-rx",
  "vuetify",
];

// copy from src/environment.ts
const env = process.env;
const environment = {
  env: env.NODE_ENV,
  baseUrl: env.BASE_URL,
  title: env.VUE_APP_Title,
  apiHost: env.VUE_APP_ApiHost,
  logLevel: env.VUE_APP_LogLevel,
  connectMode: env.VUE_APP_ConnectMode,
};

console.log(environment);

const proxyHost = environment.apiHost;

console.log(`target proxyHost: `, proxyHost);

async function executeCmd(name, cmd)
{
  try
  {
    const start = new Date();
    const result = await new Promise((rs, rj) =>
    {
      console.log(`Starting to execute ${name}`);
      exec(cmd, (err, stdout, stderr) =>
      {
        rs(stdout.toString());
      });
    });
    // console.log(result);
    const ms = (new Date().getTime() - start.getTime()) / 1000;
    console.log("\n");
    console.log(`Finish ${name}! Time elapsed ${ms} ms`);
    console.log("\n");
  } catch (error)
  {
    console.error(error);
  }
}

module.exports = {
  productionSourceMap: false,
  transpileDependencies: [new RegExp(`node_modules[/\\\\](${transferModules.join("|")})[/\\\\]`)],
  configureWebpack: {
    optimization: {
      runtimeChunk: true,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            },
          ],
        },
        // {
        //   test: /\.js?$/,
        //   exclude: /[\\/]node_modules[\\/](?!(vue-loading-rx)[\\/])/,
        //   loader: "babel-loader",
        //   query: {
        //     presets: ["@babel/preset-env"],
        //   },
        // },
      ],
    },
    devServer: {
      disableHostCheck: true,
      compress: true,
      proxy: {
        "^/api/": {
          target: proxyHost,
          ws: true,
          changeOrigin: true,
        },
      },
      headers: {
        "cache-control": " no-cache,  max-age=1, must-revalidate",
      },
      setup: function (app, server)
      {
        app.use(function (req, res, next)
        {
          // just for debug use
          // console.log(req.path);
          next();
        });
      },
    },
    devtool: "source-map",
    plugins: [
      new EventHooksPlugin({
        // async hooks
        watchRun: new PromiseTask(async () =>
        {
          if (!enableFormatWhileServing)
          {
            return;
          }
          await executeCmd("prettier", "yarn prettier");
          // I cant bear the process time over 10 seconds ...OTZ
          await executeCmd("lint", "yarn lint");
        }),

        // sync hooks
        failed: () =>
        {
          // executeCmd("lint fix", "yarn lint:fix");
        },
        afterEmit: new PromiseTask(async () =>
        {
          try
          {
            await executeCmd("git commit", `git rev-parse --short HEAD > dist/version.txt`);
          } catch (error)
          {
            console.log("git commit output failed!");
          }
        }),
      }),
    ],
  },
};
