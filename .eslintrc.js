module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    // 0 = off, 1 = warn, 2 = error
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    // 기본 설정을 꺼주어야 한다.
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-unknown-property": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-children-prop": "off",
    "@typescript-eslint/no-empty-function":"error"
  },
};
