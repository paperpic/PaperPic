<script lang="ts">
</script>

<script setup lang="ts">
import { normalizeRotation } from '@paperpic/core'
import { computed } from 'vue'

export interface PaperPicProps {
  src: string
  alt?: string
  rotation?: number
}

const props = withDefaults(defineProps<PaperPicProps>(), {
  alt: '',
  rotation: 0,
})

const transform = computed(() => `rotate(${normalizeRotation(props.rotation)}deg)`)
</script>

<template>
  <div class="paperpic">
    <img :src :alt :style="{ transform }">
  </div>
</template>

<style>
.paperpic {
  display: inline-block;
  overflow: hidden;
}

.paperpic img {
  display: block;
  max-width: 100%;
  transition: transform 0.2s ease;
}
</style>
