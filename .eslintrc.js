module.exports = {
  root: true,

  overrides: [
    {
      files: ['*.js'],
      extends: '@meteorlxy/prettier',
    },
    {
      files: ['*.ts'],
      extends: '@meteorlxy/prettier-typescript',
      parserOptions: {
        project: ['tsconfig.json'],
      },
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['*.vue'],
      extends: [
        '@meteorlxy',
        'plugin:vue/recommended',
        'plugin:self/recommended',
        'prettier',
      ],
      rules: {
        'self/prettier': [
          'error',
          {
            // singleQuote: false,
            // semi: true,
            // trailingComma: 'none',
          },
        ],
        'import/prefer-default-export': 'off',
      },
    },
  ],

  settings: {
    'prettier-vue-scorpionknifes': {
      SFCBlocks: {
        template: true,
        script: true,
        style: true,
        customBlocks: {
          'docs': { lang: 'markdown' },
          'no-prettier-block': false,
        },
      },
      usePrettierrc: true,
      fileInfoOptions: {
        ignorePath: '.testignore',
      },
    },
  },
};
