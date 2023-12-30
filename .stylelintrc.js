module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-descending-specificity": null,
    "selector-type-no-unknown": [true, { ignoreTypes: ["page"] }],
    "font-family-no-missing-generic-family-keyword": null,
    "declaration-colon-newline-after": null,
    "at-rule-empty-line-before": null
  }
};
