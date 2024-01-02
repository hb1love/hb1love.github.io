<script setup lang='ts'>
import announcement from '@/assets/images/p/p_18.jpg';
import bgm from '@/assets/audio/You Look Good To Me.mp3';
</script>

<template>
  <div :class="['annou', 'fade-in']">
    <img :src="announcement"/>
    <audio :src="bgm" id="player" preload="auto" controls></audio>
    <div :class="['annou-body']"> 
      <h1>희범, 도연 결혼합니다</h1>
      <span>2024년 2월 25일 일요일 낮 12시</span>
      <span>트라디노이</span>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.annou img {
  position: absolute;
  width: 100vw;
  height: 200vw;
  object-fit: cover;
  left: 0;
  z-index: -1;
}
.annou audio {
  position: absolute;
  height: 32px;
  top: 12px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
}
.annou-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 200vw;
  color: #5b3816;
}
.annou-body h1 {
  margin: 20vw 0 4vw;
  font-size: 1.8rem;
  font-weight: bold;
}
.annou-body div {
  height: 80vw;
  margin-top: 5vw;
  border: 0 solid #fff;
}
@media (min-width: 768px) {
  .annou img {
    height: 100vh;
  }
  .annou-body {
    height: 100vh;
  }
  .annou-body h1 {
    margin: 10vh 0 2vh;
  }
  .annou-body div {
    height: 40vh;
  }
}
</style>
