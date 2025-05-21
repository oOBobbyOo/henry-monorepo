<script setup lang='ts'>
import { computed } from 'vue'
import ChromeTab from '../ChromeTab/index.vue'

defineOptions({ name: 'PageTab' })

const props = withDefaults(defineProps<PageTabProps>(), {
  mode: 'chrome',
  commonClass: 'transition-all-300',
  closable: true,
})

const emit = defineEmits<Emits>()

interface PageTabProps {
  mode?: 'chrome'
  commonClass?: string
  chromeClass?: string
  buttonClass?: string
  closable?: boolean
}

interface Emits {
  (e: 'close'): void
}

const activeTabComponent = computed(() => {
  const { mode, chromeClass } = props

  const tabComponentMap = {
    chrome: {
      component: ChromeTab,
      class: chromeClass,
    },
  }

  return tabComponentMap[mode]
})

const bindProps = computed(() => {
  const { chromeClass: _chromeCls, buttonClass: _btnCls, ...rest } = props

  return rest
})

function handleClose() {
  emit('close')
}
</script>

<template>
  <component :is="activeTabComponent.component" :class="activeTabComponent.class" v-bind="bindProps">
    <template #prefix>
      <slot name="prefix" />
    </template>
    <slot />
    <template #suffix>
      <slot name="suffix">
        <div
          v-if="closable"
          class="w-4 h-4 inline-flex items-center justify-center rd-50% text-sm hover:text-white hover:bg-gray-300" @pointerdown.stop="handleClose"
        >
          <SvgIcon icon="mdi:close" />
        </div>
      </slot>
    </template>
  </component>
</template>

<style scoped>

</style>
