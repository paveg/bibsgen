/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['sznm/react', 'plugin:react/jsx-runtime'],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off'
  },
};
