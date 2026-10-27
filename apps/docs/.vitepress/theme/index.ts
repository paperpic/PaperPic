import type { Theme } from 'vitepress'
import { PaperPic } from '@paperpic/vue'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PaperPic', PaperPic)
  },
} satisfies Theme
