module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'plugin:react/recommended',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        "@typescript-eslint",
    ],
    rules: {
        'import/extensions': 0,
        'react/jsx-filename-extension': 0,
        'no-restricted-syntax': 0,
        'no-use-before-define': [
            'error',
            {
                variables: false,
            },
        ],
        'import/prefer-default-export': 0,
        indent: [
            'error',
            2,
            {
                SwitchCase: 1,
            },
        ],
        'max-len': 0,
        'prefer-promise-reject-errors': 'off',
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'off',
        'consistent-return': 'off',
        'no-param-reassign': 'off',
        'react/jsx-props-no-spreading': 0,
        'default-case': 0,
        'no-continue': 0,
        'react/no-array-index-key': 1,
        'react/require-default-props': 0,
        'react/forbid-prop-types': 1,
        'no-case-declarations': 1,
        'class-methods-use-this': 0,
        'no-throw-literal': 0,

        // временно
        'react/prop-types': 0,
        'global-require': 0,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};