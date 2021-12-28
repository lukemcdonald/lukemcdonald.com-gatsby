module.exports = {
  extends: ['kentcdodds', 'kentcdodds/react', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    '@babel/new-cap': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-pascal-case': 'off', // Allow for uppercase SEO component

    // Options: https://prettier.io/docs/en/options.html
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        printWidth: 120,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
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
        // useTabs: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
