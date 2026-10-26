# Playground

This playground is a placeholder. Pick a rotation to turn the sample document.

<script setup>
import { ref } from 'vue'

const rotation = ref(0)
</script>

<p>
  <label>
    Rotation
    <select v-model.number="rotation">
      <option v-for="degrees in [0, 90, 180, 270]" :key="degrees" :value="degrees">
        {{ degrees }}°
      </option>
    </select>
  </label>
</p>

<PaperPic src="/samples/document.svg" alt="Sample document" :rotation="rotation" />
