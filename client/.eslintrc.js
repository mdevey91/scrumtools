module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ["error", "windows"],
    'import/no-unresolved': 'off',
    'max-len': [2, { 'code': 150 }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    "import/resolver": {
      "import/extensions": [
        ".js",
        ".jsx",
        ".mjs",
        ".ts",
        ".tsx",
        ".vue"
      ]
    }
  }
};
