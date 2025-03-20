module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended"],
    plugins: ["unused-imports"],
    rules: {
      "unused-imports/no-unused-imports": "warn",
      "no-unused-vars": ["warn", { "args": "none" }]
    }
  };
  