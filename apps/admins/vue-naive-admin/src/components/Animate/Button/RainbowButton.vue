<script setup lang='ts'>
defineOptions({ name: 'RainbowButton' })

withDefaults(defineProps<{ text?: string }>(), { text: ' Hover me!' })
</script>

<template>
  <button class="relative p-5 text-xl font-600 dark:text-white border-none cursor-pointer">
    Hover me!
  </button>
</template>

<style scoped>
button {
  --border-radius: 15px;
  --border-width: 4px;
  appearance: none;
}

button::after {
  --m-i: linear-gradient(#000, #000);
  --m-o: content-box, padding-box;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: var(--border-width);
  border-radius: var(--border-radius);
  background-image: conic-gradient(#488cfb, #29dbbc, #ddf505, #ff9f0e, #e440bb, #655adc, #488cfb);
  -webkit-mask-image: var(--m-i), var(--m-i);
  mask-image: var(--m-i), var(--m-i);
  -webkit-mask-origin: var(--m-o);
  mask-origin: var(--m-o);
  mask-clip: var(--m-o);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  filter: hue-rotate(0);
  animation: rotate-hue linear 500ms infinite;
  animation-play-state: paused;
}

button:hover::after {
  animation-play-state: running;
}

@keyframes rotate-hue {
  to {
    filter: hue-rotate(1turn);
  }
}

button,
button::after {
  box-sizing: border-box;
}

button:active {
  --border-width: 5px;
}
</style>
