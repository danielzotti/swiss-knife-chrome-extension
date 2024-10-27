export interface Config {
  env: string; // "dev" | "prod";
  scope: string; // "chrome extension" | "web";
  version: string;
  name: string;
}

export const config: Config = {
  env: import.meta.env.VITE_APP_ENV || 'prod',
  scope: import.meta.env.VITE_APP_SCOPE || 'web',
  version: import.meta.env.VITE_APP_VERSION || '2.0.1',
  name: import.meta.env.VITE_APP_NAME || 'Swiss knife',
};

