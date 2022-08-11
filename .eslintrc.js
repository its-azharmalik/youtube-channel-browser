module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  "rules": {
    "consistent-return": 2,
    "indent"           : [1, 4],
    "no-else-return"   : 1,
    "semi"             : [1, "always"],
    "space-unary-ops"  : 2
}
};
