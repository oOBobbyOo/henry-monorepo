<script setup lang='ts'>
import { themeAnimateModeOptions, themeTabModeOptions } from '@/constants'
import { useThemeStore } from '@/stores/modules/theme'
import SettingItem from '../SettingItem/index.vue'

defineOptions({ name: 'PageSetting' })

const themeStore = useThemeStore()
</script>

<template>
  <NDivider>{{ $t('theme.page.title') }}</NDivider>
  <TransitionGroup tag="div" name="setting-list" class="flex-col-stretch gap-12px">
    <!-- Page -->
    <SettingItem key="animate" :label="$t('theme.page.animate')">
      <NSwitch v-model:value="themeStore.page.animate" />
    </SettingItem>
    <SettingItem v-if="themeStore.page.animate" key="animateMode" :label="$t('theme.page.animateMode')">
      <NSelect
        v-model:value="themeStore.page.animateMode"
        :options="themeAnimateModeOptions"
        size="small"
        class="w-120px"
      />
    </SettingItem>
    <!-- Header -->
    <SettingItem key="header-height" :label="$t('theme.header.height')">
      <NInputNumber v-model:value="themeStore.header.height" size="small" :step="1" class="w-120px" />
    </SettingItem>
    <!-- Tab -->
    <SettingItem key="tab-visible" :label="$t('theme.tab.visible')">
      <NSwitch v-model:value="themeStore.tab.visible" />
    </SettingItem>
    <SettingItem v-if="themeStore.tab.visible" key="tab-height" :label="$t('theme.tab.height')">
      <NInputNumber v-model:value="themeStore.tab.height" size="small" :step="1" class="w-120px" />
    </SettingItem>
    <SettingItem v-if="themeStore.tab.visible" key="5-3" :label="$t('theme.tab.mode.title')">
      <NSelect
        v-model:value="themeStore.tab.mode"
        :options="themeTabModeOptions"
        size="small"
        class="w-120px"
      />
    </SettingItem>
    <!-- Footer -->
    <SettingItem key="footer-visible" :label="$t('theme.footer.visible')">
      <NSwitch v-model:value="themeStore.footer.visible" />
    </SettingItem>
    <SettingItem v-if="themeStore.footer.visible" key="footer-height" :label="$t('theme.footer.height')">
      <NInputNumber v-model:value="themeStore.footer.height" size="small" :step="1" class="w-120px" />
    </SettingItem>
  </TransitionGroup>
</template>

<style scoped>

</style>
