/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const sharedPrettierConfig = {
  singleQuote: true,
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: true,
  useTabs: false,
  semi: true,
  tabWidth: 2,
  trailingComma: 'none',
  arrowParens: 'avoid',
  embeddedLanguageFormatting: 'auto',
  plugins: ['@ianvs/prettier-plugin-sort-imports']
};

module.exports = sharedPrettierConfig;
