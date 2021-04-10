/**
 * 本文件的规则由 eslint-plugin-vue 提供，使用 vue-eslint-parser 作为 parser
 * 需要将 eslint-plugin-vue 和 vue-eslint-parser 安装为项目依赖
 */

module.exports = {
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  rules: {
    // 组件的 data 必须是一个函数
    'vue/no-shared-component-data': 'error',
    // 校验组件的 Prop 默认值类型
    'vue/require-valid-default-prop': 'error',
    // v-for 必须含有键值
    'vue/require-v-for-key': 'error',
    // 禁止注册没有使用的组件
    'vue/no-unused-components': 'warn',
    // render 函数必须有返回值
    'vue/require-render-return': 'error',
  },
};
