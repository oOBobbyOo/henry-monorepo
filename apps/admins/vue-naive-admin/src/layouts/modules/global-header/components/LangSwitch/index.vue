<script setup lang='ts'>
import type { DropdownDividerOption, DropdownGroupOption, DropdownOption, DropdownRenderOption } from 'naive-ui'
import { $t } from '@/locales'
import { computed } from 'vue'

defineOptions({ name: 'LangSwitch' })

const props = withDefaults(defineProps<Props>(), {
  showTooltip: true,
})

const emit = defineEmits<Emits>()

interface Props {
  lang: App.I18n.LangType
  langOptions: Array<DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption>
  showTooltip?: boolean
}

interface Emits {
  (e: 'changeLang', lang: App.I18n.LangType): void
}

const tooltipContent = computed(() => {
  if (!props.showTooltip)
    return ''

  return $t('header.lang')
})

function changeLang(lang: App.I18n.LangType) {
  emit('changeLang', lang)
}
</script>

<template>
  <NDropdown :value="lang" :options="langOptions" trigger="hover" @select="changeLang">
    <div>
      <ButtonIcon circle :content="tooltipContent" placement="left">
        <SvgIcon icon="heroicons:language" />
      </ButtonIcon>
    </div>
  </NDropdown>
</template>

<style scoped>

</style>
