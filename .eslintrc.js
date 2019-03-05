module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module'
  },
  'env': {
    'browser': true,
    "es6": true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  'extends': 'standard',
  // required to lint *.vue files
  'plugins': [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'no-new': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    "no-throw-literal": 0,
    'generator-star-spacing': 0,
    "eqeqeq": 0,
    "space-before-function-paren": [2, "always"],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
    "quotes": [2, "single", { "avoidEscape": true }],
    // no need semi
    "semi": [2, "never"],
    // "unix" (默认) 强制使用 Unix 换行符： \n。
    // "linebreak-style": [2, "unix"],
    "no-unneeded-ternary": 0,
    "no-return-assign": 0
  }
}

// "off" 或 0 - 关闭规则
// "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
// "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
