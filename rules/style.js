module.exports = {
  rules: {
    'array-bracket-spacing': 0, // enforce consistent spacing inside array brackets
    'brace-style': 0, // enforce one true brace style (off by default)
    camelcase: 0, // require camel case names
    'comma-dangle': [1, 'always-multiline'], // allow or disallow trailing commas
    'comma-spacing': 0,
    'consistent-this': 1, // enforces consistent naming when capturing the current execution context (off by default)
    'eol-last': 1, // enforce newline at the end of file, with no multiple empty lines
    'func-call-spacing': 1, // require or disallow spacing between function identifiers and their invocations
    'func-names': 0, // require function expressions to have a name (off by default)
    'func-style': 0, // enforces use of function declarations or expressions (off by default)
    'jsx-quotes': [1, 'prefer-double'], // enforces the usage of double quotes for all JSX attribute values which doesn’t contain a double quote
    'key-spacing': 0,
    'keyword-spacing': 1, // enforce spacing before and after keywords
    'max-depth': 0, // specify the maximum depth that blocks can be nested (off by default)
    'max-len': 0, // specify the maximum length of a line in your program (off by default)
    'max-nested-callbacks': 0, // specify the maximum depth callbacks can be nested (off by default)
    'max-params': 0, // limits the number of parameters that can be used in the function declaration. (off by default)
    'max-statements': 0, // specify the maximum number of statement allowed in a function (off by default)
    'new-cap': 0, // require a capital letter for constructors
    'new-parens': 1, // disallow the omission of parentheses when invoking a constructor with no arguments
    'no-array-constructor': 1, // disallow use of the Array constructor
    'no-bitwise': 1, // disallow use of bitwise operators (off by default)
    'no-lonely-if': 0, // disallow if as the only statement in an else block (off by default)
    'no-mixed-spaces-and-tabs': 1, // disallow mixed spaces and tabs for indentation
    'no-nested-ternary': 0, // disallow nested ternary expressions (off by default)
    'no-new-object': 1, // disallow use of the Object constructor
    'no-plusplus': 0, // disallow use of unary operators, ++ and -- (off by default)
    'no-ternary': 0, // disallow the use of ternary operators (off by default)
    'no-trailing-spaces': 1, // disallow trailing whitespace at the end of lines
    'no-underscore-dangle': 0, // disallow dangling underscores in identifiers
    'object-curly-spacing': 0, // enforce consistent spacing inside braces
    'one-var': 0, // allow just one var statement per function (off by default)
    'quote-props': 0, // require quotes around object literal property names (off by default)
    quotes: [1, 'single', 'avoid-escape'], // specify whether double or single quotes should be used
    semi: 1, // require or disallow use of semicolons instead of ASI
    'semi-spacing': 1, // require a space after a semi-colon
    'sort-vars': 0, // sort variables within the same declaration block (off by default)
    'space-in-parens': 0, // require or disallow spaces inside parentheses (off by default)
    'space-infix-ops': 1, // require spaces around operators
    'space-unary-ops': [1, {words: true, nonwords: false}], // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    'wrap-regex': 0, // require regex literals to be wrapped in parentheses (off by default)
  },
};
