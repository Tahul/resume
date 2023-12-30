module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: true,
      },
    ],
  },
};
