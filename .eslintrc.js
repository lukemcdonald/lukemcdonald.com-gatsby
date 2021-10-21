module.exports = {
  extends: ['prettier', 'kentcdodds', 'kentcdodds/react'],
  rules: {
    'no-console': 'off',

    // meh...
    '@babel/new-cap': 'off',
    'react/jsx-filename-extension': 'off',

    // this one isn't smart enough for our "~/" imports
    'import/order': 'off',

    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        embeddedLanguageFormatting: 'auto',
        endOfLine: 'lf',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 120,
        proseWrap: 'always',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
  },
  plugins: ['prettier'],
}
