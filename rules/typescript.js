/**
 * 本文件的规则由 @typescript-eslint/eslint-plugin 提供，使用 @typescript-eslint/parser 作为 parser
 * 需要将 @typescript-eslint/eslint-plugin 和 @typescript-eslint/parser 安装为项目依赖
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 禁止使用 any
    '@typescript-eslint/no-explicit-any': 'warn',
    // 禁止出现空的 interface
    '@typescript-eslint/no-empty-interface': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs'],
  },
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
    extraFileExtensions: ['.vue'],
  },
};
