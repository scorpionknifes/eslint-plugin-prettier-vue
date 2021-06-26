import type { Linter } from 'eslint';

export const configs: Record<string, Linter.BaseConfig> = {
  recommended: {
    /**
     * extends `eslint-config-prettier`
     */
    extends: ['prettier'],

    /**
     * use this plugin
     */
    plugins: ['prettier-vue-scorpionknifes'],

    /**
     * use prettier rules
     */
    rules: {
      'prettier-vue-scorpionknifes/prettier': 'error',
    },
  },
};
