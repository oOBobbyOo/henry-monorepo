<script setup lang='ts'>
defineOptions({ name: 'ImgLoading' })
</script>

<template>
  <div class="img-loading" />
</template>

<style scoped>
.img-loading {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.img-loading:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  transform: rotate(45deg) translate(30%, 40%);
  background: #7adb90;
  box-shadow: 32px -34px 0 5px #278c3e;
  animation: slide 2s infinite ease-in-out alternate;
}

.img-loading:after {
  content: '';
  position: absolute;
  left: 10px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #278c3e;
  transform: rotate(0deg);
  transform-origin: 35px 145px;
  animation: rotate 2s infinite ease-in-out;
}

@keyframes slide {
  0%,
  100% {
    bottom: -35px;
  }

  25%,
  75% {
    bottom: -2px;
  }

  20%,
  80% {
    bottom: 2px;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(-15deg);
  }

  25%,
  75% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(25deg);
  }
}
</style>
