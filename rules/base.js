module.exports = {
  rules: {
    // 禁止使用 var 来声明
    'no-var': 'error',
    // 禁止修改 const 声明的变量
    'no-const-assign': 'error',
    // 优先使用 const 而不是 let
    'prefer-const': ['error', { destructuring: 'all' }],
    // 声明的变量必须被使用
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    // 推荐使用模板字符串
    'prefer-template': 'warn',
    // 使用分号结尾
    semi: ['error', 'always'],
    // 使用单引号
    quotes: ['error', 'single'],
    // JSX 使用双引号
    'jsx-quotes': ['error', 'prefer-double'],
    // 2 个空格缩进
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        offsetTernaryExpressions: true,
      },
    ],
  },
};
