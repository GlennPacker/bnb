module.exports = {
  "root": true,
  "ignorePatterns": [
    "projects/**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
      "rules": {
        'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 0 }],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'linebreak-style': ['error', 'unix'],
        'function-paren-newline': ['warn', 'multiline-arguments'],
        'operator-linebreak': ['error', 'after'],
        curly: 'off',
        'arrow-parens': ['warn', 'as-needed'],
        'object-curly-newline': ['error', { consistent: true }],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility"
      ],
      "rules": {}
    }
  ]
}
