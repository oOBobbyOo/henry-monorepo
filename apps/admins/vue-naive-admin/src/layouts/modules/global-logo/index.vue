<script setup lang='ts'>
import { useAppStore } from '@/stores/modules/app'
import { useThemeStore } from '@/stores/modules/theme'
import { computed } from 'vue'

defineOptions({ name: 'GlobalLogo' })

const appStore = useAppStore()
const themeStore = useThemeStore()

const headerHeight = computed(() => `${themeStore.header.height}px`)

const collapsed = computed(() => {
  return appStore.isMobile ? false : appStore.siderCollapse
})
</script>

<template>
  <div class="global-layout-logo flex-center">
    <h1 className="logo">
      {{ collapsed ? 'HA' : 'Henry Admin' }}
    </h1>
  </div>
</template>

<style scoped>
.global-layout-logo {
  height: v-bind(headerHeight);
  box-shadow: var(--hb-header-shadow);
}

.logo {
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  white-space: nowrap;
  list-style-type: none;
  background-image: linear-gradient(to right, #0a98d2, #1ffdc4, #0a98d2, orange, #0a98d2, #1ffdc4, #0a98d2);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 200% 100%;
  animation: bgp 8s infinite linear;
}

@keyframes bgp {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -100% 0;
  }
}
</style>
