module.exports = {
  plugins: ['stylelint-prettier', 'stylelint-order'],
  // extends: [
  //   'stylelint-config-standard',
  //   'stylelint-config-css-modules',
  //   'stylelint-config-standard-scss',
  // ],
  rules: {
    'selector-class-pattern': null,
    'font-family-no-duplicate-names': null,
    // 'color-no-invalid-hex': true,
    'prettier/prettier': true,
    // 'order/order': ['custom-properties', 'declarations'],
    // 'order/properties-order': ['width', 'height'],
  },
  overrides: [
    {
      files: ['**/*.css'],
      extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
      rules: {},
    },
    {
      files: ['**/*.scss'],
      extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
        'stylelint-config-clean-order',
      ],
      rules: {
        'no-empty-source': null,
      },
    },
  ],
};
