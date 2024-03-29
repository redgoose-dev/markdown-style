import { defineConfig, loadEnv } from 'vite';

// docs: https://vitejs.dev/config

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {

    },
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
      open: env.VITE_OPEN_BROWSER === 'true',
    },
    plugins: [
      //
    ],
  };
});
