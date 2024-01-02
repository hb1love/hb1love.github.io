<script setup lang="ts">
</script>

<template>
  <div :class="['album', 'fade-in']">
    <slot></slot>
  </div>
</template>

<style>
.album {
  position: relative;
  padding: 1rem;
}
.album img {
  width: 100%;
}
</style>