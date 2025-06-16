<script setup lang='ts'>
defineOptions({ name: 'WaterRipplesLoading' })
</script>

<template>
  <div class="water-ripples-loading">
    <div />
    <div />
  </div>
</template>

<style scoped>
.water-ripples-loading {
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto;
}
.water-ripples-loading div {
  position: absolute;
  border: 4px solid #454ade;
  border-radius: 50%;
  animation: loader 1s ease-out infinite;
}
.water-ripples-loading div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes loader {
  0% {
    top: 32px;
    left: 32px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    opacity: 0;
  }
}
</style>
