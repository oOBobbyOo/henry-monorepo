<script setup lang='ts'>
defineOptions({ name: 'MisplacedButton' })

withDefaults(defineProps<{ text?: string }>(), { text: 'Button' })
</script>

<template>
  <button class="button relative p-5 text-xl font-600 text-white border-none cursor-pointer">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  background-color: rgb(74, 153, 255);
  transition:
    background-color 0.2s ease-in,
    all 0.15s ease-in;
}

button::after {
  display: flex;
  align-items: center;
  justify-content: center;
  content: 'Button';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(5px, 5px);
  background-color: rgb(1, 111, 255);
  transition: all 0.15s ease-in;
}

button:hover::after {
  transform: translate(0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(5px, 5px);
  background-color: rgb(1, 111, 255);
  transition: all 0.15s ease-in;
}

button:hover::after {
  transform: translate(-5px, -6px);
}

button:hover {
  transform: translate(5px, 5px);
}

button:active::after {
  background-color: rgb(0, 83, 192);
}
</style>
