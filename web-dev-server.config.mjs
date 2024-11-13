import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  rootDir: '.',
  appIndex: 'index.html',
  nodeResolve: true,
  watch: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      target: 'es2020',
    }),
  ],
};