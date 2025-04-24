<script setup lang='ts'>
import type { Options } from '@better-scroll/core'
import BScroll from '@better-scroll/core'
import { useElementSize } from '@vueuse/core'
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue'

defineOptions({ name: 'BetterScroll' })

const props = defineProps<Props>()

interface Props {
  /**
   * BetterScroll options
   * @see https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html
   */
  options: Options
}

const bsWrapper = useTemplateRef<HTMLElement>('bsWrapperRef')
const bsContent = useTemplateRef<HTMLElement>('bsContentRef')

const { width: wrapWidth } = useElementSize(bsWrapper)
const { width, height } = useElementSize(bsContent)

const instance = ref<BScroll>()
const isScrollY = computed(() => Boolean(props.options.scrollY))

function initBetterScroll() {
  if (!bsWrapper.value)
    return
  instance.value = new BScroll(bsWrapper.value, props.options)
}

watch([() => wrapWidth.value, () => width.value, () => height.value], () => {
  instance.value?.refresh()
})

onMounted(() => {
  initBetterScroll()
})

defineExpose({ instance })
</script>

<template>
  <div ref="bsWrapperRef" class="h-full text-left">
    <div ref="bsContentRef" class="inline-block" :class="{ 'h-full': !isScrollY }">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
