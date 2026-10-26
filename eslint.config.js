import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  pnpm: { catalogs: false },
  ignores: ['**/dist', '**/.vitepress/cache', '**/.vitepress/dist'],
}, {
  name: 'paperpic/no-pnpm-catalogs',
  files: ['package.json', '**/package.json', 'pnpm-workspace.yaml'],
  rules: {
    'pnpm/json-enforce-catalog': 'off',
    'pnpm/json-valid-catalog': 'off',
    'pnpm/yaml-no-anonymous-catalog': 'off',
    'pnpm/yaml-no-duplicate-catalog-item': 'off',
    'pnpm/yaml-no-unused-catalog-item': 'off',
  },
})
