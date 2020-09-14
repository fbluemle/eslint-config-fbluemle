module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {
    'no-const-assign': 2, // disallow assignment to const-declared variables
    'no-dupe-class-members': 2, // Disallow duplicate name in class members
  },
};
