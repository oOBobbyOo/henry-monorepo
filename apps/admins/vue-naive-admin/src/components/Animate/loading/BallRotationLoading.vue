<script setup lang='ts'>
defineOptions({ name: 'BallRotationLoading' })
</script>

<template>
  <div class="ball-rotation-loading" />
</template>

<style scoped>
.ball-rotation-loading {
  height: 50px;
  width: 50px;
  margin: 0 auto;
  animation: rotate 1s infinite;
}

.ball-rotation-loading::before,
.ball-rotation-loading::after {
  border-radius: 50%;
  content: '';
  display: block;
  height: 20px;
  width: 20px;
}

.ball-rotation-loading::before {
  animation: ball1 1s infinite;
  background-color: #cb2025;
  box-shadow: 30px 0 0 #f8b334;
  margin-bottom: 10px;
}

.ball-rotation-loading::after {
  animation: ball2 1s infinite;
  background-color: #00a096;
  box-shadow: 30px 0 0 #97bf0d;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg) scale(0.8);
    -moz-transform: rotate(0deg) scale(0.8);
  }

  50% {
    -webkit-transform: rotate(360deg) scale(1.2);
    -moz-transform: rotate(360deg) scale(1.2);
  }

  100% {
    -webkit-transform: rotate(720deg) scale(0.8);
    -moz-transform: rotate(720deg) scale(0.8);
  }
}

@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 #f8b334;
  }

  50% {
    box-shadow: 0 0 0 #f8b334;
    margin-bottom: 0;
    -webkit-transform: translate(15px, 15px);
    -moz-transform: translate(15px, 15px);
  }

  100% {
    box-shadow: 30px 0 0 #f8b334;
    margin-bottom: 10px;
  }
}

@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 #97bf0d;
  }

  50% {
    box-shadow: 0 0 0 #97bf0d;
    margin-top: -20px;
    -webkit-transform: translate(15px, 15px);
    -moz-transform: translate(15px, 15px);
  }

  100% {
    box-shadow: 30px 0 0 #97bf0d;
    margin-top: 0;
  }
}
</style>
