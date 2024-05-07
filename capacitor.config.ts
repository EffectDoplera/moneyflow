import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "cash.moneyflow.moneyflow",
  appName: "Money Flow",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
  },
};

export default config;
