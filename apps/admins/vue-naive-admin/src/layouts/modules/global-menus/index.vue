<script setup lang='ts'>
import { useRouterPush } from '@/hooks/useRouterPush'
import { getSelectedMenuKeyPathByKey } from '@/routes/utils'
import { useAppStore } from '@/stores/modules/app'
import { useRouteStore } from '@/stores/modules/route'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({ name: 'GlobalMenus' })

const route = useRoute()
const { routerPushByKeyWithMetaQuery } = useRouterPush()

const appStore = useAppStore()
const routeStore = useRouteStore()

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
  <n-menu
    v-model:expanded-keys="expandedKeys"
    mode="vertical"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :collapsed="appStore.siderCollapse"
    :options="routeStore.menus"
    :value="selectedKey"
    @update:expanded-keys="onExpandedKeys"
    @update:value="onSelectedKey"
  />
</template>

<style scoped>

</style>
