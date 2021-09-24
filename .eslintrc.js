module.exports = {
    plugins: ['prettier'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'airbnb-base',
        'prettier',
    ],
    rules: {
        'no-console': 'off',
        'no-unused-vars': 'warn',
        'prettier/prettier': 'error',
    },
};
