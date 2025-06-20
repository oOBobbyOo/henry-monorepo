<script setup lang='ts'>
import { themeAnimateModeOptions } from '@/constants'
import { useThemeStore } from '@/stores/modules/theme'
import SettingItem from '../SettingItem/index.vue'

defineOptions({ name: 'PageSetting' })

const themeStore = useThemeStore()
</script>

<template>
  <NDivider>{{ $t('theme.pageSetting.title') }}</NDivider>
  <TransitionGroup tag="div" name="setting-list" class="flex-col-stretch gap-12px">
    <SettingItem key="animate" :label="$t('theme.pageSetting.animate')">
      <NSwitch v-model:value="themeStore.page.animate" />
    </SettingItem>
    <SettingItem v-if="themeStore.page.animate" key="animateMode" :label="$t('theme.pageSetting.animateMode')">
      <NSelect
        v-model:value="themeStore.page.animateMode"
        :options="themeAnimateModeOptions"
        size="small"
        class="w-120px"
      />
    </SettingItem>
  </TransitionGroup>
</template>

<style scoped>

</style>
