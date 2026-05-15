import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import importX from 'eslint-plugin-import-x';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierConfig,
    ],
    plugins: {
      'import-x': importX,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // var 금지
      'no-var': 'error',

      // interface 우선 사용
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // import 순서 정렬
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            { pattern: '@pages/**', group: 'internal', position: 'after' },
            { pattern: '@routes/**', group: 'internal', position: 'after' },
            { pattern: '@store/**', group: 'internal', position: 'after' },
            { pattern: '@shared/**', group: 'internal', position: 'after' },
            { pattern: '@apis/**', group: 'internal', position: 'after' },
            { pattern: '@assets/**', group: 'internal', position: 'after' },
            { pattern: '@components/**', group: 'internal', position: 'after' },
            { pattern: '@constants/**', group: 'internal', position: 'after' },
            { pattern: '@hooks/**', group: 'internal', position: 'after' },
            { pattern: '@styles/**', group: 'internal', position: 'after' },
            { pattern: '@utils/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // @/ prefix 금지 및 3단계 이상 상대경로 금지
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/*'],
              message: '@/ prefix는 사용 금지. 지정된 alias를 사용하세요.',
            },
            {
              group: ['../../../*'],
              message: '3단계 이상 상대경로는 금지. alias를 사용하세요.',
            },
          ],
        },
      ],
    },
  },
]);
