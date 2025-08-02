export default {
  languageOptions: {
    globals: {
      browser: true,
      es2024: true,
    },
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
    },
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
  },
};
