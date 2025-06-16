<script setup lang='ts'>
defineOptions({ name: 'StripWaveLoading' })
</script>

<template>
  <div class="strip-wave-loading">
    <div class="loader l1" />
    <div class="loader l2" />
    <div class="loader l3" />
    <div class="loader l4" />
    <div class="loader l5" />
    <div class="loader l6" />
    <div class="loader l7" />
  </div>
</template>

<style scoped>
.strip-wave-loading {
  display: flex;
  justify-content: center;
  align-items: center;
}

.strip-wave-loading .loader {
  display: inline-block;
  width: 5px;
  height: 35px;
  margin-left: 3px;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  background-color: rgb(53, 235, 29);
  position: relative;
}

.l1 {
  animation: l1 1s 0s infinite ease;
}

.l2 {
  animation: l1 1s 0.1s infinite ease;
}

.l3 {
  animation: l1 1s 0.2s infinite ease;
}

.l4 {
  animation: l1 1s 0.3s infinite ease;
}

.l5 {
  animation: l1 1s 0.4s infinite ease;
}

.l6 {
  animation: l1 1s 0.5s infinite ease;
}

.l7 {
  animation: l1 1s 0.6s infinite ease;
}

@keyframes l1 {
  0% {
    height: 35px;
  }
  50% {
    height: 5px;
    background-color: rgba(0, 190, 16, 0);
  }

  100% {
    height: 35px;
  }
}
</style>
