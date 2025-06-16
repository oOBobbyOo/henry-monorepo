<script setup lang='ts'>
defineOptions({ name: 'SweepButton' })
</script>

<template>
  <button class="relative p-4 text-3xl text-white font-600 border-none cursor-pointer">
    Apply Now
  </button>
</template>

<style scoped>
button {
  background-color: rgb(0, 0, 0);
  border-radius: 9999px;
  border: 3px solid #ffffff4d;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

button:hover::before {
  animation: shine 1.5s ease-out infinite;
}

button::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}
</style>
