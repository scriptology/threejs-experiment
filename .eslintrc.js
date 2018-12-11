module.exports = {
  "rules": {
    "react/prefer-stateless-function": false,
    "react/forbid-prop-types": false,
    "no-debugger": 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }],
  },
  "globals": {
    "document": true,
    "window": true,
    "FormData": true,
    "debugger": true,
  },
  "extends": ["airbnb"]
}
