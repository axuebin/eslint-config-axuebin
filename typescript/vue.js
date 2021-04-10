module.exports = {
  extends: ['./index', '../rules/vue'].map(require.resolve),
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
