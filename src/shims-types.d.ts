// for api import type
declare module "url";

// for element lib
declare module "element-ui/lib/*";

declare interface Window {
  clipboardData: {
    setData: (type: string, data: string) => void;
    clearData: () => void;
  };
}
