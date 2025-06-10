<script setup lang='ts'>
defineOptions({ name: 'CardBanner' })

withDefaults(defineProps<Props>(), {
  backgroundColor: 'rgba(100, 144, 240, 1)',
  color: '#fff',
  img: '',
  title: '标题',
  description: '',
  buttonText: '确定',
  buttonColor: '#fff',
  buttonTextColor: '#333',
  showCancel: false,
  cancelButtonText: '取消',
  cancelButtonColor: '#f5f5f5',
  cancelButtonTextColor: '#666',
})

const emit = defineEmits<{
  (e: 'click'): void
  (e: 'cancel'): void
}>()

interface Props {
  backgroundColor?: string
  color?: string
  img?: string
  title?: string
  description?: string
  buttonText?: string
  buttonColor?: string
  buttonTextColor?: string
  showCancel?: boolean
  cancelButtonText?: string
  cancelButtonColor?: string
  cancelButtonTextColor?: string
}

function handleClick() {
  emit('click')
}

function handleCancel() {
  emit('cancel')
}
</script>

<template>
  <div class="card-banner relative flex-col-center" :style="{ backgroundColor }">
    <div v-if="img" class="card-banner__img">
      <img :src="img" alt="">
    </div>
    <div class="card-banner__content flex-col-center">
      <p
        class="mb-2 text-2xl font-600"
        :style="{ color }"
      >
        {{ title }}
      </p>
      <p
        class="mb-6 opacity-80"
        :style="{ color }"
        v-html="description"
      />
    </div>
    <div class="card-banner__buttons flex-y-center gap-3">
      <div
        v-if="showCancel"
        class="card-banner__button cancel-button inline-block py-2 px-3 rounded-md cursor-pointer"
        :style="{ backgroundColor: cancelButtonColor, color: cancelButtonTextColor }"
        @click="handleCancel"
      >
        {{ cancelButtonText }}
      </div>
      <div
        class="card-banner__button inline-block py-2 px-3 rounded-md cursor-pointer"
        :style="{ backgroundColor: buttonColor, color: buttonTextColor }"
        @click="handleClick"
      >
        {{ buttonText }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-banner {
  padding: 2rem;
  border-radius: 6px;
}

.card-banner__img {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.card-banner__img img {
  object-fit: cover;
}
</style>
