module.exports = {
  "rules": {
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "off",
    "jsx-quotes": ["error", "prefer-single"],
    "class-methods-use-this": "off",
  },
  "extends": [
    "airbnb",
    "plugin:jest/recommended"
  ],
  "plugins": ["jest"],
  "env": {
    "jest/globals": true
  }
};
