import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import eslintPtettier from "eslint-plugin-prettier/recommended";
import jestPlugin from "eslint-plugin-jest";

export default defineConfig([
  eslintPtettier,
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["node_modules/**", "html-report/**"],
    plugins: {
      js,
      "@stylistic": stylistic,
      jest: jestPlugin,
    },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      "no-unused-vars": 0, // 'off',
      "no-undef": 0, // 'off',
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
]);
