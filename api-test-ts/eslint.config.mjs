import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import eslintPtettier from "eslint-plugin-prettier/recommended";
import jestPlugin from "eslint-plugin-jest";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: ["node_modules/**", "html-report/**", ".gitignore"],
    plugins: {
      js,
      "@stylistic": stylistic,
      jest: jestPlugin,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      eslintPtettier,
    ],
    languageOptions: { globals: globals.node },
    rules: {
      "no-undef": 0, // 'off',
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]);
