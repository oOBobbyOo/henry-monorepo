<script setup lang='ts'>
import BetterScroll from '@/components/BetterScroll/index.vue'
import { useTabStore } from '@/stores/modules/tab'
import { useThemeStore } from '@/stores/modules/theme'
import { useElementBounding } from '@vueuse/core'
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageTab from './components/PageTab/index.vue'

const route = useRoute()
const tabStore = useTabStore()
const themeStore = useThemeStore()

const tabHeight = computed(() => `${themeStore.tab.height}px`)

const bsWrapper = ref<HTMLElement>()
const { width: bsWrapperWidth, left: bsWrapperLeft } = useElementBounding(bsWrapper)
const bsScroll = ref<InstanceType<typeof BetterScroll>>()
const tabRef = ref<HTMLElement>()

const TAB_DATA_ID = 'data-tab-id'

type TabNamedNodeMap = NamedNodeMap & {
  [TAB_DATA_ID]: Attr
}

async function scrollToActiveTab() {
  await nextTick()
  if (!tabRef.value)
    return

  const { children } = tabRef.value

  for (let i = 0; i < children.length; i += 1) {
    const child = children[i]

    const { value: tabId } = (child.attributes as TabNamedNodeMap)[TAB_DATA_ID]

    if (tabId === tabStore.activeTabId) {
      const { left, width } = child.getBoundingClientRect()
      const clientX = left + width / 2

      setTimeout(() => {
        scrollByClientX(clientX)
      }, 50)

      break
    }
  }
}

function scrollByClientX(clientX: number) {
  const currentX = clientX - bsWrapperLeft.value
  const deltaX = currentX - bsWrapperWidth.value / 2

  if (bsScroll.value?.instance) {
    const { maxScrollX, x: leftX, scrollBy } = bsScroll.value.instance

    const rightX = maxScrollX - leftX
    const update = deltaX > 0 ? Math.max(-deltaX, rightX) : Math.min(-deltaX, -leftX)

    scrollBy(update, 0, 300)
  }
}

async function handleCloseTab(tab: App.Global.Tab) {
  await tabStore.removeTab(tab.id)
}

function init() {
  tabStore.initTabStore(route)
}

init()

watch(() => route.fullPath, () => {
  tabStore.addTab(route)
})

watch(
  () => tabStore.activeTabId,
  () => {
    scrollToActiveTab()
  },
)
</script>

<template>
  <div class="global-layout-tabs size-full flex-y-center px-4">
    <div ref="bsWrapper" class="h-full flex-1-hidden">
      <BetterScroll ref="bsScroll" :options="{ scrollX: true, scrollY: false }">
        <div
          ref="tabRef"
          class="h-full flex items-end pr-18px"
          :class="[themeStore.tab.mode === 'chrome' ? 'items-end' : 'items-center gap-12px']"
        >
          <PageTab
            v-for="tab in tabStore.tabs"
            :key="tab.id"
            :[TAB_DATA_ID]="tab.id"
            :mode="themeStore.tab.mode"
            :dark-mode="themeStore.darkMode"
            :active="tab.id === tabStore.activeTabId"
            :active-color="themeStore.themeColor"
            @pointerdown="tabStore.switchRouteByTab(tab)"
            @close="handleCloseTab(tab)"
          >
            <template #prefix>
              <SvgIcon :icon="tab.icon" class="inline-block align-text-bottom text-16px" />
            </template>
            <div class="max-w-240px text-ellipsis overflow-hidden whitespace-nowrap">
              {{ tab.label }}
            </div>
          </PageTab>
        </div>
      </BetterScroll>
    </div>
    <ReloadButton />
    <FullScreen />
  </div>
</template>

<style scoped>
.global-layout-tabs {
  height: v-bind(tabHeight);
  box-shadow: var(--hb-tabs-shadow);
}
</style>
