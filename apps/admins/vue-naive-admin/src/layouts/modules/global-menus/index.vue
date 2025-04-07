<script setup lang='ts'>
import type { MenuOption } from 'naive-ui'
import { useAppStore } from '@/stores/modules/app'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({ name: 'GlobalMenus' })

const router = useRouter()

const appStore = useAppStore()

const menus: MenuOption[] = [
  {
    label: '首页',
    key: 'Dashboard',
    children: [
      {
        label: '分析页',
        key: 'Analysis',
      },
      {
        label: '工作台',
        key: 'Workbench',
      },
    ],
  },
  {
    label: '关于',
    key: 'AboutIndex',
  },
]

const expandedKeys = ref<string[]>([])

const selectedKey = ref<string>('')

function onExpandedKeys(keys: string[]) {
  expandedKeys.value = keys
}

function onSelectedKey(key: string) {
  selectedKey.value = key

  router.push({
    name: key,
  })
}
</script>

<template>
  <n-menu
    v-model:expanded-keys="expandedKeys"
    mode="vertical"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :collapsed="appStore.siderCollapse"
    :options="menus"
    :value="selectedKey"
    @update:expanded-keys="onExpandedKeys"
    @update:value="onSelectedKey"
  />
</template>

<style scoped>

</style>
