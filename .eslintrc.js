module.exports = {
    root: true,
    ignorePatterns: ["projects/**/*"],
    overrides: [
      {
        files: ["*.ts"],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: 'tsconfig.json',
          tsconfigRootDir: __dirname,
          sourceType: 'module',
        },
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:prettier/recommended',
        ],
        rules: {
          '@typescript-eslint/interface-name-prefix': 'off',
          '@typescript-eslint/explicit-function-return-type': 'off',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
          "prettier/prettier": ["error", {
            "endOfLine": "auto"
          }]
        }
      },
      {
        files: ["*.html"],
        extends: [
          'plugin:@angular-eslint/template/recommended',
          'plugin:@angular-eslint/template/accessibility',
          'prettier',
        ],
        rules: {}
      }
    ]
  };
  