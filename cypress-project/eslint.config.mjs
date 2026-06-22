import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import eslintPtettier from "eslint-plugin-prettier/recommended";
import pluginCypress from "eslint-plugin-cypress";
import pluginMocha from "eslint-plugin-mocha";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: [
      "node_modules/**",
      "html-report/**",
      ".gitignore",
      "cypress/reports/**",
      "allure-results/**",
    ],
    plugins: {
      js,
      "@stylistic": stylistic,
    },
    extends: [
      js.configs.recommended,
      eslintPtettier,
      pluginCypress.configs.recommended,
      pluginMocha.configs.recommended,
    ],
    languageOptions: { globals: globals.node },
    rules: {
      "no-undef": 0, // 'off',
      "no-unused-vars": 0, // 'off',
      "mocha/no-exclusive-tests": "error",
      "mocha/no-pending-tests": "warn",
      "mocha/no-mocha-arrows": "off",
      "mocha/max-top-level-suites": "off",
      "cypress/no-unnecessary-waiting": "off",
    },
  },
]);
