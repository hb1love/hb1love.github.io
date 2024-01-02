<script setup lang="ts">
</script>

<template>
  <div :class="['fyh', 'fade-in']">
    <div :class="['fyh-intro']">
      <div style="display: flex; justify-content: center;"> 
        <div class="fyh-intro-relationship">
          <div class="fyh-intro-relationship-row">
            <p class="fyh-intro-name">김종재 오순분</p>
            <p>의 아들</p>
            <p class="fyh-intro-name">희범</p>
          </div>
          <div class="fyh-intro-relationship-row">
            <p class="fyh-intro-name">김수호 박명희</p>
            <p>의 딸</p>
            <p class="fyh-intro-name">도연</p>
          </div>
        </div>
      </div>
      <div class="fyh-intro-acknowledgments">
        <p>
          저희 두 사람의 작은 시작을<br/>
        축복해 주셔서 감사합니다.<br/>
        보내주시는 모든 마음들 잊지 않고<br/>

        오래도록 알콩달콩 잘 살아보겠습니다.  
        </p>
      </div>
    </div>
    <div :class="['fyh-header']">
      <span>마음 전하실 곳</span>
    </div>
    <div class="fyh-body">
      <div class="fyh-body-row">
        <p>신랑</p>
        <p class="fyh-body-row-name">김희범</p>
        <p>하나은행 284-910627-60107</p>
      </div>
      <div class="fyh-body-row">
        <p>신랑 父</p>
        <p class="fyh-body-row-name">김종재</p>
        <p>대구은행 142-08-025390-1</p>
      </div>
      <div class="fyh-body-row">
        <p>신랑 母</p>
        <p class="fyh-body-row-name">오순분</p>
        <p>새마을금고 9003-2036-2918-1</p>
      </div>
      <div class="fyh-body-row">
        <p>신부</p>
        <p class="fyh-body-row-name">김도연</p>
        <p>하나은행 263-910336-79107</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fyh {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
  gap: 1.5rem;
}
.fyh-intro {
  display: flex;
  flex-direction: column;
  padding: 0;
  line-height: 2.5rem;
}
.fyh-intro-relationship {
  display: flex;
  flex-direction: column;
}
.fyh-intro-relationship-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  font-size: .8rem;
}
.fyh-intro-name {
  font-size: 1rem;
  font-weight: bold;
}
.fyh-intro-acknowledgments {
  padding: 4rem 0;
}
.fyh-header {
  color: var(--vt-header-yellow);
}
.fyh-body {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2rem 0 0;
  gap: 1.5rem;
}
.fyh-body > p {
  font-weight: 600;
}
.fyh-body-row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: .9rem;
}
.fyh-body-row-name {
  font-weight: bold;
}
@media (min-width: 992px) {
  div {
    margin: 0 auto;
  }
}
</style>