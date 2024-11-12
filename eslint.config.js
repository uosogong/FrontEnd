import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  {
    languageOptions: { globals: globals.browser },
    parseOptions: { sourceType: 'module' },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
