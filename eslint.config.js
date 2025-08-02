import { defineConfig } from "eslint/config";

export default defineConfig({
  env: {
    browser: true,
    es2024: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
  },
});
