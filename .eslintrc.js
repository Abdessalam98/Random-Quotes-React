module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "extends": [
        "airbnb", "eslint:recommended", "plugin:react/recommended"
    ],
    // "parser": "babel-eslint",
    "plugins": ["react"],
    "rules": {
        "react/jsx-filename-extension": [
            1, {
                "extensions": ["", ".js", ".jsx"]
            }
        ],
        "react/prefer-stateless-function": [
            0, {
                "ignorePureComponents": true
            }
        ]
    }
};