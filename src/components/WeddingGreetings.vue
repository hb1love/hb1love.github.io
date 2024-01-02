<script setup lang="ts">
</script>

<template>
  <div :class="['greetings', 'fade-in']">
    <div :class="['greetings-protagonists']">
      <div>
        <span>신랑</span>
        <span :class="['greetings-protagonist']">김희범</span>
      </div>
      <div>
        <span>신부</span>
        <span :class="['greetings-protagonist']">김도연</span>
      </div>
    </div>
    <div :class="['greetings-cont']">
      <p>
        코 끝이 시린 겨울의 첫 만남.<br/>
        내리는 함박눈에 젖은 소녀의 머리카락과<br/>
        눈이 수북이 쌓인 소년의 코트를 보며,<br/>
        자그맣게 피어난 설레던 마음이<br/>
        이제는 사랑이 되었습니다.<br/><br/>
        
        다시 한번 찾아온 코 끝이 시린 겨울의<br/>
        따스한 결혼식에 함께하여 주시길 청해봅니다.<br/>
      </p>
    </div>
  </div>
</template>

<style scoped>
.greetings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 0 6rem;
  gap: 8rem;
}
.greetings-protagonists {
  display: flex;
  flex-direction: row;
  gap: 14vw;
  font-size: 1rem;
}
.greetings-protagonists div {
  display: flex;
  flex-direction: column;
}
.greetings-protagonist {
  font-size: 1.5em;
}
.greetings-cont {
  display: flex;
}
.greetings-cont p {
  font-size: 1rem;
  font-weight: 500;
  line-height: 2em;
}
@media (min-width: 992px) {
  div {
    margin: 0 auto;
  }
}
</style>