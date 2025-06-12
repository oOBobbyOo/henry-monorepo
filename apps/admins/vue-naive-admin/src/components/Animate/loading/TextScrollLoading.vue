<script setup lang='ts'>
defineOptions({ name: 'TextScrollLoading' })
</script>

<template>
  <div class="text-scroll-loading">
    <div>L</div>
    <div>o</div>
    <div>a</div>
    <div>d</div>
    <div>i</div>
    <div>n</div>
    <div>g</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
  </div>
</template>

<style scoped>
.text-scroll-loading {
  min-height: 3rem;
  min-width: 14rem;
  margin: 0 auto;
  font-size: 2rem;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0));
}

.text-scroll-loading div {
  width: 1ch;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  left: 100%;
  animation: scroll 2.5s linear infinite;
}

.text-scroll-loading div:nth-child(1) {
  animation-delay: calc(2.5s / 10 * (10 - 1) * -1);
}
.text-scroll-loading div:nth-child(2) {
  animation-delay: calc(2.5s / 10 * (10 - 2) * -1);
}
.text-scroll-loading div:nth-child(3) {
  animation-delay: calc(2.5s / 10 * (10 - 3) * -1);
}
.text-scroll-loading div:nth-child(4) {
  animation-delay: calc(2.5s / 10 * (10 - 4) * -1);
}
.text-scroll-loading div:nth-child(5) {
  animation-delay: calc(2.5s / 10 * (10 - 5) * -1);
}
.text-scroll-loading div:nth-child(6) {
  animation-delay: calc(2.5s / 10 * (10 - 6) * -1);
}
.text-scroll-loading div:nth-child(7) {
  animation-delay: calc(2.5s / 10 * (10 - 7) * -1);
}
.text-scroll-loading div:nth-child(8) {
  animation-delay: calc(2.5s / 10 * (10 - 8) * -1);
}
.text-scroll-loading div:nth-child(9) {
  animation-delay: calc(2.5s / 10 * (10 - 9) * -1);
}
.text-scroll-loading div:nth-child(10) {
  animation-delay: calc(2.5s / 10 * (10 - 10) * -1);
}

@keyframes scroll {
  to {
    left: -1ch;
  }
}
</style>
