module.exports = {
  "rules": {
    "react/jsx-filename-extension": "off"
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
