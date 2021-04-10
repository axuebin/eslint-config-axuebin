module.exports = {
  extends: ['./index', './rules/vue'].map(require.resolve),
  parserOptions: {
    parser: 'babel-eslint',
  },
};
