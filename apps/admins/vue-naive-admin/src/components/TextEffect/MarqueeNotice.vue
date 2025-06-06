<script setup lang='ts'>
import { useElementHover } from '@vueuse/core'
import { computed, onMounted, useTemplateRef } from 'vue'

defineOptions({ name: 'MarqueeNotice' })

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  showClose: true,
  text: '',
  icon: 'icon-park-solid:volume-notice',
  vertical: false,
  direction: 'normal',
  duration: 10,
  delay: 0,
  loop: 0,
})

const emit = defineEmits(['close'])

interface Props {
  type?: 'default' | 'success' | 'warning' | 'error' | 'info' // 通知类型
  showClose?: boolean // 是否显示关闭按钮
  text?: string // 通知文本
  icon?: string // 通知图标
  vertical?: boolean //  true: 垂直滚动 false: 水平滚动
  direction?: 'normal' | 'reverse' // 滚动方向
  duration?: number // 滚动速度
  delay?: number // 延迟时间
  loop?: number // 循环次数
}

const scrollContent = useTemplateRef<HTMLElement>('scrollContent')
const isHovered = useElementHover(scrollContent)

const shouldScroll = computed(() => {
  return !isHovered.value
})

const scrollStyle = computed(() => ({
  '--orientation': `${props.vertical ? 'vertical' : 'horizontal'}`,
  '--animation-name': `${props.vertical ? 'scrollY' : 'scrollX'}`,
  '--animation-duration': `${props.duration}s`,
  '--animation-delay': `${props.delay}s`,
  '--animation-loops': `${props.loop === 0 ? 'infinite' : props.loop}`,
  '--animation-play-state': shouldScroll.value ? 'running' : 'paused',
  '--animation-direction': `${props.direction}`,
}))

function handleClose() {
  emit('close')
}

onMounted(() => {
})
</script>

<template>
  <div class="marquee-notice relative flex-y-center px-3 py-2" :class="[`marquee-notice-${props.type}`]">
    <div class="left-icon text-base">
      <slot name="prefix">
        <SvgIcon :icon="icon" />
      </slot>
    </div>
    <div class="h-full flex-1 mx-3  text-sm overflow-hidden">
      <div
        ref="scrollContent"
        class="marquee-centent"
        :class="{
          scrolling: shouldScroll,
          vertical,
          horizontal: !vertical,
        }"
        :style="scrollStyle"
      >
        <div class="marquee">
          <slot>
            <div v-html="text" />
          </slot>
        </div>
      </div>
    </div>
    <div class="right-icon text-base cursor-pointer">
      <slot name="suffer">
        <SvgIcon v-if="showClose" icon="ic:round-close" @click="handleClose" />
      </slot>
    </div>
  </div>
</template>

<style scoped>
.marquee-notice {
  height: 40px;
  border: 1px solid var(--n-border-color);
  border-radius: var(--n-border-radius);

  &.marquee-notice-success {
    color: #63e2b7;
    border-color: #63e2b7;
  }

  &.marquee-notice-warning {
    color: #f2c97d;
    border-color: #f2c97d;
  }

  &.marquee-notice-error {
    color: #e88080;
    border-color: #e88080;
  }

  &.marquee-notice-info {
    color: #70c0e8;
    border-color: #70c0e8;
  }
}

.marquee-centent {
  display: flex;
  position: relative;
}

.marquee-centent.horizontal {
  overflow-x: hidden !important;
  flex-direction: row !important;
  width: auto;
  height: max-content;
}

.marquee-centent.vertical {
  overflow-y: hidden !important;
  flex-direction: column !important;
  height: auto;
  width: max-content;
}

.marquee-centent > .marquee {
  flex: 0 0 auto;
}

.marquee-centent.horizontal > .marquee {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.marquee-centent.vertical > .marquee {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.marquee-centent {
  animation: var(--animation-name) var(--animation-duration) linear var(--animation-delay) var(--animation-loops);
  animation-play-state: var(--animation-play-state);
  animation-direction: var(--animation-direction);
}
</style>
