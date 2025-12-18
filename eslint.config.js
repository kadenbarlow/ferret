import eslintPluginPerfectionist from "eslint-plugin-perfectionist"
import eslintPluginReact from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import eslintPluginSortDestructureKeys from "eslint-plugin-sort-destructure-keys"
import unusedImports from "eslint-plugin-unused-imports"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"

export default defineConfig([
  globalIgnores(["dist"]),
  {
    extends: [js.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.webextensions,
        __dirname: false,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      perfectionist: eslintPluginPerfectionist,
      react: eslintPluginReact,
      "sort-destructure-keys": eslintPluginSortDestructureKeys,
      "unused-imports": unusedImports,
    },
    rules: {
      "no-console": "error",
      "no-debugger": "error",
      "no-unused-vars": "off",
      "perfectionist/sort-named-exports": "error",
      "perfectionist/sort-objects": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "sort-destructure-keys/sort-destructure-keys": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
])
