<script setup lang='ts'>
defineOptions({ name: 'ProgressBarLoading' })
</script>

<template>
  <div class="progress-bar-loading">
    <div class="progress-bar" />
  </div>
</template>

<style scoped>
.progress-bar-loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.progress-bar {
  width: calc(160px / 0.707);
  height: 10px;
  margin: 0 auto;
  background: #f9f9f9;
  border-radius: 10px;
  border: 1px solid #006dfe;
  position: relative;
  overflow: hidden;
}
.progress-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 5px;
  background: repeating-linear-gradient(45deg, #0031f2 0 30px, #006dfe 0 40px) right/200% 100%;
  animation:
    fillProgress 6s ease-in-out infinite,
    lightEffect 1s infinite linear;
  animation-fill-mode: forwards;
}

@keyframes fillProgress {
  0% {
    width: 0;
  }

  33% {
    width: 33.333%;
  }

  66% {
    width: 66.67%;
  }

  100% {
    width: 100%;
  }
}

@keyframes lightEffect {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    background: repeating-linear-gradient(45deg, #0031f2 0 30px, #006dfe 0 40px) right/200% 100%;
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    background: repeating-linear-gradient(45deg, #0031f2 0 30px, #006dfe 0 40px, rgba(255, 255, 255, 0.3) 0 40px)
      right/200% 100%;
  }
}
</style>
