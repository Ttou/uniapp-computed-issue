/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'prettier/prettier': true,
    'block-no-empty': null,
    'unit-no-unknown': null,
    'at-rule-no-unknown': null,
    'function-no-unknown': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': null,
    'no-descending-specificity': null,
    'keyframe-selector-notation': null,
    'annotation-no-unknown': null,
    'selector-type-no-unknown': [true, { ignore: ['default-namespace'] }],
    'import-notation': null
  }
}
