<script setup lang='ts'>
defineOptions({ name: 'ComicButton' })
</script>

<template>
  <button class="relative p-4 text-3xl text-white font-600 border-none cursor-pointer">
    Click!
  </button>
</template>

<style scoped>
button {
  border-radius: 2rem;
  background-color: #ff7675;
  text-transform: uppercase;
  text-shadow: 2px 2px #000;
  box-shadow: 6px 6px 0px #d63031;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #fdcb6e;
  box-shadow: 4px 4px 0px #e17055;
  transform: translate(2px, 2px);
}

button:active {
  background-color: #e17055;
  box-shadow: 0px 0px 0px #d63031;
  transform: translate(6px, 6px);
}
</style>
