import { config as baseConfig } from "../wdio.conf";

export const config = {
  ...baseConfig,
  capabilities: [
    {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["--headless", "--width=1920", "--height=1080"],
      },
    },
  ],
};
