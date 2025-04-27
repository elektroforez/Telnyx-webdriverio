import { config as baseConfig } from '../wdio.conf';

export const config = {
  ...baseConfig,
  specs: ['./test/specs/**/*.ts'],
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--window-size=1920,1080'],
      },
    },
  ],
};