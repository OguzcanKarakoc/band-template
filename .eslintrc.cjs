require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "prettier",
  ],
  plugins: ["prettier"],
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  overrides: [
    {
      files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
};
