import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-ionic',

  /**
   * see https://github.com/ionic-team/ionic-pwa-toolkit/blob/master/stencil.config.ts
   */
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
