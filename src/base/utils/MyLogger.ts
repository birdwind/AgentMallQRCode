import logger from "loglevel";
import loggerPrefixPlugin from "loglevel-plugin-prefix";
import { environment } from "@/environment";

// @ts-ignore
logger.setLevel(environment.logLevel || "info");

loggerPrefixPlugin.reg(logger);
loggerPrefixPlugin.apply(logger, {
  format(level, name, timestamp) {
    return `[${timestamp}] ${level} ${name}:`;
  },
});

export const MyLogger = logger;
