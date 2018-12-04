module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/strongly-recommended',
      //'@vue/standard'
    ],
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'no-multiple-empty-lines': [
        0,
        {
          max: 100
        }
      ],
      'no-mixed-spaces-and-tabs': [
        0
      ]
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }