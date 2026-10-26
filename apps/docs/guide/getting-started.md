# Getting started

PaperPic is in early development. The API below is a placeholder and will change.

## Installation

```sh
pnpm add vue-paperpic
```

`vue-paperpic` requires Vue 3.5 or newer.

## Usage

```vue
<script setup lang="ts">
import { PaperPic } from 'vue-paperpic'
import 'vue-paperpic/style.css'
</script>

<template>
  <PaperPic src="/document.jpg" alt="Scanned document" :rotation="90" />
</template>
```

Try it live in the [playground](/playground).
