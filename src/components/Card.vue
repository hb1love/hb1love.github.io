<script setup lang="ts">
import img from '@/assets/images/separator.png';
const props = defineProps<{
  wide?: boolean
  filled?: boolean
  divider?: boolean
}>()
</script>

<template>
  <section :class="['item', 'fade-in', { filled: props.filled }]">
    <div :class="['item-divider', { show: props.divider }]">
      <img :src="img"/>
    </div>
    <div :class="['item-details', { wide: props.wide }]">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  transition: 0.4s all;
  font-size: 1rem;
}
.item.filled {
  background-color: #fbfaf6;
}
.item-details {
  width: 100%;
  padding: 1rem;
}
.item-details.wide {
  padding: 0;
}
.item-divider {
  display: none;
  max-width: 300px;
}
.item-divider.show {
  display: flex;
  justify-content: center;
  padding: 0;
}
.item-divider img {
  width: 60vw;
  height: 32pt;
  object-fit: cover;
  filter: opacity(.2) drop-shadow(0 0 0 var(--vt-header-yellow));
  -moz-filter: opacity(.2) drop-shadow(0 0 0 var(--vt-header-yellow));
  -webkit-filter: opacity(.2) drop-shadow(0 0 0 var(--vt-header-yellow));
}
@media (min-width: 576px) {
  .item-details {
    max-width: 576px;
  }

  .item-details.wide {
    max-width: 1000px;
  }
}
</style>
