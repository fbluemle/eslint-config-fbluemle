module.exports = {
  rules: {
    'no-cond-assign': 1, // disallow assignment in conditional expressions
    'no-console': 0, // disallow use of console (off by default in the node environment)
    'no-constant-condition': 0, // disallow use of constant expressions in conditions
    'no-control-regex': 1, // disallow control characters in regular expressions
    'no-debugger': 1, // disallow use of debugger
    'no-dupe-keys': 2, // disallow duplicate keys when creating object literals
    'no-empty': 0, // disallow empty statements
    'no-empty-character-class': 1, // disallow the use of empty character classes in regular expressions
    'no-ex-assign': 1, // disallow assigning to the exception in a catch block
    'no-extra-boolean-cast': 1, // disallow double-negation boolean casts in a boolean context
    'no-extra-parens': 0, // disallow unnecessary parentheses (off by default)
    'no-extra-semi': 1, // disallow unnecessary semicolons
    'no-func-assign': 1, // disallow overwriting functions written as function declarations
    'no-inner-declarations': 0, // disallow function or variable declarations in nested blocks
    'no-invalid-regexp': 1, // disallow invalid regular expression strings in the RegExp constructor
    'no-obj-calls': 1, // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-regex-spaces': 1, // disallow multiple spaces in a regular expression literal
    'no-sparse-arrays': 1, // disallow sparse arrays
    'no-unreachable': 2, // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unsafe-negation': 1, // disallow negating the left operand of relational operators
    'use-isnan': 1, // disallow comparisons with the value NaN
    'valid-typeof': 1, // Ensure that the results of typeof are compared against a valid string
  },
};
