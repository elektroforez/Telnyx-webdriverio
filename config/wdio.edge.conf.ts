import { config as baseConfig } from "../wdio.conf";

export const config = {
  ...baseConfig,
  capabilities: [
    {
      browserName: "MicrosoftEdge",
      "ms:edgeOptions": {
        args: ["--headless", "--disable-gpu", "--window-size=1920,1080"],
      },
    },
  ],
};
