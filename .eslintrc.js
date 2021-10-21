const prettierConfig = require('./prettier.config')
module.exports = {
  extends: ['prettier', 'kentcdodds', 'kentcdodds/react'],
  rules: {
    'no-console': 'off',

    // meh...
    '@babel/new-cap': 'off',
    'react/jsx-filename-extension': 'off',

    // this one isn't smart enough for our "~/" imports
    'import/order': 'off',

    'prettier/prettier': ['error', prettierConfig],
  },
  plugins: ['prettier'],
}
