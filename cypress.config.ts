import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
