import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { PaperPic } from 'vue-paperpic'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PaperPic', PaperPic)
  },
} satisfies Theme
