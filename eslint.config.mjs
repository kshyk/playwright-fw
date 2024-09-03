import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { includeIgnoreFile } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
  {
    files: ['**/*.js', '**/*.ts']
  },
  {
    ignores: ['**/node_modules', '**/test-results']
  },
  includeIgnoreFile(gitignorePath),
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier
    },

    languageOptions: {
      globals: {
        ...globals.browser
      },

      parser: tsParser,
      ecmaVersion: 2023,
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',
        allowImportExportEverywhere: true
      }
    },

    rules: {
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'no-use-before-define': 'off',

      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ],

      'no-unused-vars': 'warn',

      'no-console': [
        'warn',
        {
          allow: ['log', 'info', 'error']
        }
      ],

      'func-names': 'off',
      'no-process-exit': 'off',
      'object-shorthand': 'off',
      'class-methods-use-this': 'off',

      'no-param-reassign': [
        2,
        {
          props: false
        }
      ],

      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true
        }
      ]
    }
  }
];
