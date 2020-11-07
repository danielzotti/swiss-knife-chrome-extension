export interface Config {
  env: string; // "dev" | "prod";
  scope: string; // "chrome extension" | "web";
  version: string;
  name: string;
}

export const config: Config = {
  env: process.env.REACT_APP_ENV || 'prod',
  scope: process.env.REACT_APP_SCOPE || 'web',
  version: process.env.REACT_APP_VERSION || 'v1.2.1',
  name: process.env.REACT_APP_NAME || 'Swiss knife',
};

