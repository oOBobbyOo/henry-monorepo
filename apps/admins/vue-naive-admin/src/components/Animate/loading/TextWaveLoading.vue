<script setup lang='ts'>
defineOptions({ name: 'TextWaveLoading' })
</script>

<template>
  <div class="text-wave-loading">
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
  </div>
</template>

<style scoped>
.text-wave-loading {
  width: max-content;
  height: 50px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 600;
  font-family: monospace;
  letter-spacing: 1em;
  color: #8b8a8a;
  filter: drop-shadow(0 0 10px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dark .text-wave-loading {
  color: #f5f5f5;
}

.text-wave-loading span {
  animation: loading 1.75s ease infinite;
}
.text-wave-loading span:nth-child(2) {
  animation-delay: 0.25s;
}
.text-wave-loading span:nth-child(3) {
  animation-delay: 0.5s;
}
.text-wave-loading span:nth-child(4) {
  animation-delay: 0.75s;
}
.text-wave-loading span:nth-child(5) {
  animation-delay: 1s;
}
.text-wave-loading span:nth-child(6) {
  animation-delay: 1.25s;
}
.text-wave-loading span:nth-child(7) {
  animation-delay: 1.5s;
}

@keyframes loading {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>
