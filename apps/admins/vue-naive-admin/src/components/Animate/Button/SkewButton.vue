<script setup lang='ts'>
defineOptions({ name: 'SkewButton' })
</script>

<template>
  <button class="relative p-4 text-3xl font-600 border-none cursor-pointer bg-black text-white dark:bg-white dark:text-black">
    <span>Button</span>
  </button>
</template>

<style scoped>
button {
  text-transform: uppercase;
  transform: skew(-21deg);
}

button span {
  display: inline-block;
  transform: skew(21deg);
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
  left: 0;
  background: rgb(255, 255, 255);
  opacity: 0;
  z-index: -1;
  transition: all 0.5s;
}

.dark button::before {
  background: rgb(48, 48, 48);
}

button:hover {
  color: #000;
}

.dark button:hover {
  color: #fff;
}

button:hover::before {
  left: 0;
  right: 0;
  opacity: 1;
}
</style>
