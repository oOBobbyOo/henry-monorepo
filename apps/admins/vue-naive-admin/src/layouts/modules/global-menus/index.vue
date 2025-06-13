<script setup lang='ts'>
import { useRouterPush } from '@/hooks/useRouterPush'
import { getSelectedMenuKeyPathByKey } from '@/router/utils'
import { useAppStore } from '@/stores/modules/app'
import { useRouteStore } from '@/stores/modules/route'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({ name: 'GlobalMenus' })

const route = useRoute()
const { routerPushByKeyWithMetaQuery } = useRouterPush()

const appStore = useAppStore()
const routeStore = useRouteStore()

const collapsed = computed(() => {
  return appStore.isMobile ? false : appStore.siderCollapse
})

const expandedKeys = ref<string[]>([])

const selectedKey = ref<string>('')

function onExpandedKeys(keys: string[]) {
  expandedKeys.value = keys
}

function updateExpandedKeys() {
  expandedKeys.value = getSelectedMenuKeyPathByKey(selectedKey.value, routeStore.menus)
}

function onSelectedKey(key: string) {
  selectedKey.value = key

  if (appStore.isMobile) {
    appStore.setSiderCollapse(false)
  }

  routerPushByKeyWithMetaQuery(key)
}

watch(
  () => route.name,
  () => {
    updateExpandedKeys()
  },
  { immediate: true },
)
</script>

<template>
  <NMenu
    v-model:expanded-keys="expandedKeys"
    mode="vertical"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :collapsed="collapsed"
    :options="routeStore.menus"
    :value="selectedKey"
    @update:expanded-keys="onExpandedKeys"
    @update:value="onSelectedKey"
  />
</template>

<style scoped>

</style>
