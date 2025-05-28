<script setup lang='ts'>
import { useThemeStore } from '@/stores/modules/theme'
import SettingItem from '../SettingItem/index.vue'

defineOptions({ name: 'DarkMode' })

const themeStore = useThemeStore()

const themeSchemaRecord: Record<Theme.ThemeScheme, string> = {
  light: 'theme.themeSchema.light',
  dark: 'theme.themeSchema.dark',
  auto: 'theme.themeSchema.auto',
}
const icons: Record<Theme.ThemeScheme, string> = {
  light: 'material-symbols:sunny',
  dark: 'material-symbols:nightlight-rounded',
  auto: 'material-symbols:hdr-auto',
}

function handleSegmentChange(value: string | number) {
  themeStore.setThemeScheme(value as Theme.ThemeScheme)
}

function handleGrayscaleChange(value: boolean) {
  themeStore.setGrayscale(value)
}

function handleColourWeaknessChange(value: boolean) {
  themeStore.setColourWeakness(value)
}
</script>

<template>
  <NDivider>{{ $t('theme.themeSchema.title') }}</NDivider>
  <div class="flex-col-stretch gap-4">
    <div class="flex-center">
      <NTabs
        :key="themeStore.themeScheme"
        type="segment"
        class="relative w-214px"
        :value="themeStore.themeScheme"
        @update:value="handleSegmentChange"
      >
        <NTab v-for="(_, key) in themeSchemaRecord" :key="key" :name="key">
          <SvgIcon :icon="icons[key]" class="h-20px" />
        </NTab>
      </NTabs>
    </div>
    <SettingItem :label="$t('theme.grayscale')">
      <NSwitch :value="themeStore.grayscale" @update:value="handleGrayscaleChange" />
    </SettingItem>
    <SettingItem :label="$t('theme.colourWeakness')">
      <NSwitch :value="themeStore.colourWeakness" @update:value="handleColourWeaknessChange" />
    </SettingItem>
  </div>
</template>

<style scoped>

</style>
