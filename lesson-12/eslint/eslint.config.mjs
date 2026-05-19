import js from "@eslint/js";
import globals from "globals";
import {defineConfig} from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
    {   
        ...stylistic.configs.all,
        "files": ["**/*.{js,mjs,cjs}"],
        "ignores": [
            "node_modules/**",
            "./eslint.config.mjs"
        ],
                    "plugins": {
            js,
            '@stylistic': stylistic
        },
        "extends": ["js/recommended"],
        "languageOptions": {"globals": globals.node},

      rules: {
          'no-useless-return': 'error',
          'no-shadow': 'error',
          '@stylistic/semi': ['error', 'always'],
          '@stylistic/block-spacing': ['error', 'always'],
          '@stylistic/arrow-spacing': 'error',
          '@stylistic/comma-dangle': ['error', 'always-multiline'],
          '@stylistic/arrow-parens': ['error', 'always'],
          '@stylistic/curly-newline': [
              'error',
              'always'
          ],
          '@stylistic/indent': ['error', 4],
          'no-unused-vars': 0 // 'off'
      },
     
    }
]);
