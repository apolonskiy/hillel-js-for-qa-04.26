import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import eslintPtettier from "eslint-plugin-prettier/recommended";
import playwright from "eslint-plugin-playwright";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: [
      "node_modules/**",
      ".gitignore",
      "test-results/**",
      "playwright-report/**",
    ],
    plugins: {
      js,
      "@stylistic": stylistic,
    },
    extends: [
      js.configs.recommended,
      eslintPtettier,
      playwright.configs["flat/recommended"],
    ],
    languageOptions: { globals: globals.node },
    rules: {
      "no-undef": 0, // 'off',
      "no-unused-vars": 0, // 'off',
    },
  },
]);
