export default {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-vue'],
  ignoreFiles: [
    '**/dist/**',
    '**/coverage/**',
    '**/.vitepress/cache/**',
    '**/.vitepress/dist/**',
  ],
}
