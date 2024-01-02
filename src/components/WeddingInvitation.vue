<script setup lang="ts">
</script>

<template>
  <div :class="['invitation', 'fade-in']">
    <div :class="['invitation-header']">
      <span>THE WEDDING DAY</span>
    </div>
    <div :class="['invitation-body']">
      <div class="invitation-date">
        <p>
          2024년 2월 25일 일요일<br/>
          낮 12시
        </p>
      </div>
      <div class="invitation-location">
        <p>
          트라디노이<br/>
          강남구 도곡로 99길 16 (6층)<br/>
        </p>
      </div>
      <div class="invitation-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2593334909147!2d127.06342577722114!3d37.50180122783537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5532bc0e133%3A0x98187055c9b13e4a!2z7Yq4652865SU64W47J20!5e0!3m2!1sko!2skr!4v1705218596999!5m2!1sko!2skr" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="invitation-ride">
        <p>[주차가능]</p>
        <a target="_blank" href="https://naver.me/5zJozzqz">NaverMap</a><br/>
        <a target="_blank" href="https://kko.to/5ogEPLoucw">KakaoMap</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.invitation {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 6rem 0;
  gap: 6rem;
}
.invitation-header {
  color: var(--vt-header-yellow);
}
.invitation-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  font-size: 1rem;
}
.invitation-map iframe {
  width: 100%;
  max-height: 320px;
  padding: 1rem 0 0;
}
.invitation-ride {
  line-height: 2.5rem;
}
</style>