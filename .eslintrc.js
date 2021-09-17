module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  env: { node: true, browser: true, es6: true },
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
