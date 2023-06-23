import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "dev.astsu.moneyflow",
  appName: "Money Flow",
  webDir: "dist",
  server: {
    url: "http://192.168.1.3:5173",
    cleartext: true,
  },
};

export default config;
