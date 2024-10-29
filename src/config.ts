export interface Config {
  version: string;
  name: string;
}

declare const __APP_VERSION__: string;

export const config: Config = {
  version: __APP_VERSION__ || 'v0.0.0',
  name: import.meta.env.VITE_APP_NAME || 'Swiss knife',
};
