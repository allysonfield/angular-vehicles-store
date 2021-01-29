module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.*?.json",
          "e2e/tsconfig.e2e.json",
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "airbnb-typescript/base",
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      rules: {
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          }
        ],
        "prettier/prettier": ["error", {
         "endOfLine":"auto"
       }],
       '@angular-eslint/no-empty-lifecycle-method': 'off',
       '@typescript-eslint/naming-convention': 'off',
       'no-underscore-dangle': 'off',
       'no-console': 'off',
       'no-alert': 'off',
       'radix': 'off',
       'import/no-extraneous-dependencies': 'off',
       'prefer-destructuring': 'off'
      }
    },
    {
      files: ["*.html",],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": "off"
      }
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    },
    {
      files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
      parserOptions: {
        project: './tsconfig.spec.json',
      },
      // Jasmine rules
      extends: ['plugin:jasmine/recommended'],
      // Plugin to run Jasmine rules
      plugins: ['jasmine'],
      env: { jasmine: true },
      // Turn off 'no-unused-vars' rule
      rules: {
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
}
