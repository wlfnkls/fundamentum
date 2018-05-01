module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6
    },
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
};