/**
 * 本文件的规则由 eslint-plugin-react 和 eslint-plugin-react-hooks 提供
 * 需要将 eslint-plugin-react 和 eslint-plugin-react-hooks 安装为项目依赖
 */

module.exports = {
  plugins: ['react', 'react-hooks'],
  rules: {
    // prop 值为 true 时，可以省略它的值
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],
    // 不要使用未声明的组件
    'react/jsx-no-undef': 'error',
    // 使用大驼峰风格命名组件
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    // 声明的 state 必须被使用
    'react/no-unused-state': 'error',
    // 使用 this.state 获取状态，用 setState 改变状态
    'react/no-direct-mutation-state': 'off',
    // 不要在 setState 中使用 this.state
    'react/no-access-state-in-setstate': 'error',
    // 声明的 prop 必须被使用
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    // render 方法必须要有返回值
    'react/require-render-return': 'error',
    // 不要用数组索引作为 map 元素的 key
    'react/no-array-index-key': 'warn',
    // 检查 react hooks 规范
    // @link https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
