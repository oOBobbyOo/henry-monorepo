<script setup lang='ts'>
defineOptions({ name: 'TextReversalLoading' })
</script>

<template>
  <div class="text-reversal-loading">
    <div>L</div>
    <div>O</div>
    <div>A</div>
    <div>D</div>
    <div>I</div>
    <div>N</div>
    <div>G</div>
  </div>
</template>

<style scoped>
.text-reversal-loading {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-reversal-loading div {
  display: inline-block;
  margin: 5px;
  font-size: 35px;
  animation: 2s obrot linear infinite;
}

@keyframes obrot {
  0% {
    transform: rotateX(0);
  }
  12.5% {
    transform: rotateX(90deg);
  }
  25% {
    transform: rotateX(180deg);
  }
  37.5% {
    transform: rotateX(270deg);
  }
  50% {
    transform: rotateX(360deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}

.text-reversal-loading div:nth-child(1) {
  animation-delay: 0s;
}
.text-reversal-loading div:nth-child(2) {
  animation-delay: 0.1s;
}
.text-reversal-loading div:nth-child(3) {
  animation-delay: 0.2s;
}
.text-reversal-loading div:nth-child(4) {
  animation-delay: 0.3s;
}
.text-reversal-loading div:nth-child(5) {
  animation-delay: 0.4s;
}
.text-reversal-loading div:nth-child(6) {
  animation-delay: 0.5s;
}
.text-reversal-loading div:nth-child(7) {
  animation-delay: 0.6s;
}
</style>
