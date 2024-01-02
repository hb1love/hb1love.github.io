<script setup lang="ts">
</script>

<template>
  <div :class="['rsvp', 'fade-in']">
    <div class="rsvp-header">
      <span>RSVP</span>
    </div>
    <div class="rsvp-body">
      <p>
        예식에 참석하시는 분들은<br/>
        아래 양식으로 참석 인원과 식사 여부를 알려주세요.<br/>
        예식 준비에 많은 도움이 됩니다 💗<br/>
      </p>
      <div class="rsvp-body-form">
        <a target="_blank" href="https://forms.gle/YZCdnXxWWvTR3jwS9">참석 여부 알려주기</a>
        * 수정이 필요하다면 한번 더 작성해주시면 됩니다
      </div>
    </div>
  </div>
</template>

<style scoped>
.rsvp {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 4rem 0;
  gap: 4rem;
}
.rsvp-header {
  color: var(--vt-header-yellow);
}
.rsvp-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-bottom: 6rem;
}
.rsvp-body a {
  padding: 0 1rem;
  border: .8rem solid var(--vt-bg-cta);
  border-radius: .5rem;
  background-color: var(--vt-bg-cta);
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
}
.rsvp-body-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: .8rem;
}
</style>