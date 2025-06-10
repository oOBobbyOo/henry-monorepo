<script setup lang='ts'>
import { computed } from 'vue'

defineOptions({ name: 'BasicBanner' })

const props = withDefaults(defineProps<Props>(), {
  height: '12rem',
  backgroundColor: '',
  showDecoration: true,
  titleColor: '#fff',
  subtitleColor: '#fff',
  showButton: true,
  buttonText: '查看',
  buttonColor: '#fff',
  buttonTextColor: '#333',
  backgroundImage: '',
  imgWidth: '12rem',
  imgBottom: '0rem',
  showMeteors: true,
  meteorCount: 10,
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
  backgroundImage?: string
  imgWidth?: string
  imgBottom?: string
  showMeteors?: boolean // 新增 props 控制流星显示
  meteorCount?: number
}

function handleClick() {
  emit('click')
}

// 生成指定数量的流星，分散x坐标，混合快慢速度
const meteors = computed(() => {
  const segmentWidth = 100 / props.meteorCount // Divide container into segments
  return Array.from({ length: props.meteorCount }, (_, index) => {
    const segmentStart = index * segmentWidth
    const x = segmentStart + Math.random() * segmentWidth // Random x within segment
    const isSlow = Math.random() > 0.5 // Roughly 50% chance for slow meteors
    return {
      x,
      speed: isSlow ? 5 + Math.random() * 3 : 2 + Math.random() * 2, // Slow: 5-8s, Fast: 2-4s
      delay: Math.random() * 5, // 0-5s delay
    }
  })
})
</script>

<template>
  <div
    class="basic-banner relative flex-y-center"
    :class="{ 'has-decoration': showDecoration }"
    :style="{ backgroundColor, height }"
  >
    <div v-if="showMeteors" class="basic-banner__meteors">
      <span
        v-for="(meteor, index) in meteors"
        :key="index"
        class="basic-banner__meteor"
        :style="{
          top: '-60px',
          left: `${meteor.x}%`,
          animationDuration: `${meteor.speed}s`,
          animationDelay: `${meteor.delay}s`,
        }"
      />
    </div>
    <div class="basic-banner__content relative z-1">
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
        class="basic-banner__button inline-block py-2 px-3 rounded-md cursor-pointer"
        :style="{ backgroundColor: buttonColor, color: buttonTextColor }"
        @click="handleClick"
      >
        {{ buttonText }}
      </div>
    </div>
    <img
      v-if="backgroundImage"
      class="basic-banner__background-image"
      :src="backgroundImage"
      :style="{ width: imgWidth, bottom: imgBottom }"
      alt="背景图片"
    >
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

.basic-banner__background-image {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
  width: 12rem;
}

.basic-banner__meteors {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.basic-banner__meteor {
  position: absolute;
  width: 2px;
  height: 60px;
  background: linear-gradient(to top, rgb(255 255 255 / 40%), rgb(255 255 255 / 10%), transparent);
  opacity: 0;
  transform-origin: top left;
  animation-name: meteor-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.basic-banner__meteor::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 2px;
  height: 2px;
  background: rgb(255 255 255 / 50%);
}

@keyframes meteor-fall {
  0% {
    opacity: 1;
    transform: translate(0, -60px) rotate(-45deg);
  }

  100% {
    opacity: 0;
    transform: translate(400px, 340px) rotate(-45deg);
  }
}
</style>
