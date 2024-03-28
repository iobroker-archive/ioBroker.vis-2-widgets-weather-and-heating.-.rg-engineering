module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        // 'react-app',
        'plugin:eqeqeq-fix/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'only-warn',
        'react',
    ],
    rules: {
        'arrow-parens': [1, 'as-needed'],
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/no-access-state-in-setstate': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-plusplus': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/no-render-return-value': 'off',
        'max-len': 'off',
        'react/destructuring-assignment': 'off',
        'react/prefer-stateless-function': 'off',
        'react/self-closing-comp': 'off',
        'react/jsx-filename-extension': 'off',
        'no-nested-ternary': 'off',
        'react/no-array-index-key': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/sort-comp': 'off',
        'react/no-did-update-set-state': 'off',
        'global-require': 'off',
        'import/extensions': 'off',
        'operator-linebreak': 'off',
        'no-unused-expressions': 'off',
        'prefer-destructuring': 'off',
        'no-return-assign': 'off',
        'no-multi-spaces': 'off',
        'key-spacing': 'off',
        'no-undef': 2,
        'react/forbid-prop-types': 'off',
        'react/require-default-props': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/jsx-closing-tag-location': 'off',
        'no-restricted-syntax': 'off',
        'guard-for-in': 'off',
        // 'linebreak-style': ["error", "windows"],
        'linebreak-style': ['off'],
        'no-param-reassign': 'off',
        'no-await-in-loop': 'off',
        'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
        'no-underscore-dangle': 'off',
        'no-constant-condition': 'off',
        'no-loop-func': 'off',
        'no-continue': 'off',
        'implicit-arrow-linebreak': 'off',
        radix: 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-alert': 'off',
        'react/function-component-definition': 'off',
        "quotes": [
            "error",
            "double",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ]
    },
};
