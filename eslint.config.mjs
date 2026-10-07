import antfu from '@antfu/eslint-config';

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(antfu({
  stylistic: {
    semi: true,
    braceStyle: '1tbs',
  },
}, {
  rules: {
    'ts/consistent-type-definitions': ['error', 'type'],
    'no-console': ['warn'],
    'antfu/no-top-level-await': ['off'],
    'node/prefer-global/process': ['off'],
  },
}));
