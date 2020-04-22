module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
        'react/no-array-index-key': 'off',
        'react/jsx-props-no-spreading': 'off',
    },
    env: {
        browser: true,
    },
};
