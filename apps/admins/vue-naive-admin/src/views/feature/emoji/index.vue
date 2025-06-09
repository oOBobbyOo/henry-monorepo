<script setup lang='ts'>
import { useThemeStore } from '@/stores/modules/theme'
import { ref } from 'vue'
import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'

const themeStore = useThemeStore()

const text = ref('input')

function onSelectEmoji(emoji: any) {
  console.log('[ emoji ] >>:', emoji)
}

function onChangeText(new_text: string | undefined) {
  text.value = new_text || ''
}
</script>

<template>
  <div class="flex-center h-full">
    <EmojiPicker :native="true" :display-recent="true" :theme="themeStore.themeScheme" @select="onSelectEmoji" @update:text="onChangeText" />
  </div>
</template>

<style scoped>

</style>
