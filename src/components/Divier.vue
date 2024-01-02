<script setup lang="ts">
import img from '@/assets/images/separator.png';
</script>

<template>
  <div :class="['divider', 'fade-in']">
    <img :src="img"/>
  </div>
</template>

<style scoped>
.divider {
  display: flex;
  justify-content: center;
  padding: 0;
}
.divider img {
  width: 60vw;
  height: 32pt;
  object-fit: cover;
  filter: opacity(.2) drop-shadow(0 0 0 var(--vt-header-yellow));
  -moz-filter: opacity(.2) drop-shadow(0 0 0 var(--vt-header-yellow));
  -webkit-filter: opacity(.2) drop-shadow(0 0 0 var(--vt-header-yellow));
}
</style>