<script setup lang='ts'>
defineOptions({ name: 'BasicBanner' })

withDefaults(defineProps<Props>(), {
  height: '12rem',
  backgroundColor: '',
  showDecoration: true,
  titleColor: '#fff',
  subtitleColor: '#fff',
  showButton: true,
  buttonText: '查看',
  buttonColor: '#fff',
  buttonTextColor: '#333',
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

interface Props {
  height?: string
  backgroundColor?: string
  showDecoration?: boolean
  title: string
  titleColor?: string
  subtitle?: string
  subtitleColor?: string
  showButton?: boolean
  buttonText?: string
  buttonColor?: string
  buttonTextColor?: string
}

function handleClick() {
  emit('click')
}
</script>

<template>
  <div
    class="basic-banner relative flex-y-center"
    :class="{ 'has-decoration': showDecoration }"
    :style="{ backgroundColor, height }"
  >
    <div class="basic-banner-content relative z-1">
      <p
        class="mb-2 text-2xl font-600"
        :style="{ color: titleColor }"
      >
        {{ title }}
      </p>
      <p
        class="mb-6 opacity-90"
        :style="{ color: subtitleColor }"
      >
        {{ subtitle }}
      </p>
      <div
        v-if="showButton"
        class="basic-banner-button inline-block py-2 px-3 rounded-md cursor-pointer"
        :style="{ backgroundColor: buttonColor, color: buttonTextColor }"
        @click="handleClick"
      >
        {{ buttonText }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.basic-banner {
  height: 12rem;
  padding: 2rem;
  overflow: hidden;
  color: #fff;
  border-radius: 6px;
  background: #5d87ff;
}

.has-decoration::after {
  content: '';
  position: absolute;
  right: -10%;
  bottom: -20%;
  width: 60%;
  height: 140%;
  content: '';
  background: rgb(255 255 255 / 10%);
  border-radius: 30%;
  transform: rotate(-20deg);
}
</style>
