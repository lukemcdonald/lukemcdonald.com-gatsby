module.exports = {
  extends: ['prettier', 'kentcdodds', 'kentcdodds/react'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',

    // Meh...
    '@babel/new-cap': 'off',
    'react/jsx-filename-extension': 'off',

    // These are not smart enough for our resolved imports.
    'import/order': 'off',
    'import/no-unresolved': 'off',

    // Options: https://prettier.io/docs/en/options.html
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        printWidth: 120,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        // bracketSpacing: true,
        // bracketSameLine: false,
        // embeddedLanguageFormatting: 'auto',
        // endOfLine: 'lf',
        // htmlWhitespaceSensitivity: 'css',
        // insertPragma: false,
        // jsxSingleQuote: false,
        // proseWrap: 'preserve',
        // quoteProps: 'as-needed',
        // requirePragma: false,
        // tabWidth: 2,
        // useTabs: false,
      },
    ],
  },
}
