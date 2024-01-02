<script setup lang="ts">
import img_1 from '@/assets/images/j/j_35.jpg';
import img_2 from '@/assets/images/p/p_16.jpg';
</script>

<template>
  <div :class="['gallery', 'fade-in']">
    <div :class="['gallery-header']">
      <span>Gallery</span>
    </div>
    <div :class="['gallery-body']">
      <div :class="['gallery-body-concept']">
        <img :src="img_2"/>
        <router-link to="/wedding-p/palace" target="_blank">창경궁 사진</router-link>
      </div>
      <div :class="['gallery-body-concept']">
        <img :src="img_1"/>
        <router-link to="/wedding-p/jeju" target="_blank">제주도 사진</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
  gap: 6rem;
}
.gallery-header {
  color: var(--vt-header-yellow);
}
.gallery-body {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
.gallery-body-concept {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}
.gallery-body-concept img {
  width: 90%;
  border-radius: .8rem;
}
.gallery-body-concept a {
  padding: 0 1rem;
  border: .8rem solid var(--vt-bg-cta);
  border-radius: .5rem;
  background-color: var(--vt-bg-cta);
  color: #fff;
  font-weight: 500;
  text-decoration: none;
}
</style>