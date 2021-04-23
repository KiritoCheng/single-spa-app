import { registerApplication, start } from "single-spa";

registerApplication(
  "vue",
  () => import("./src/vue/vue.app.js"),
  () => {
    if (location.pathname === "/react" || location.pathname === "/angular") {
      return false;
    }
    return true;
  }
);

registerApplication(
  "react",
  () => import("./src/react/main.app.js"),
  () => {
    if (location.pathname === "/vue" || location.pathname === "/angular") {
      return false;
    }
    return true;
  }
);

registerApplication(
  "angular",
  () => import("./src/angular/index.ts"),
  () => {
    if (location.pathname === "/react" || location.pathname === "/vue") {
      return false;
    }
    return true;
  }
);

start();
