<script setup lang='ts'>
import { useRouterPush } from '@/hooks/useRouterPush'
import { computed } from 'vue'

defineOptions({ name: 'ExceptionBase' })

const props = defineProps<Props>()

type ExceptionType = '403' | '404' | '500'

interface Props {
  type: ExceptionType
}

const iconMap: Record<ExceptionType, string> = {
  403: 'local:no-permission',
  404: 'local:not-found',
  500: 'local:service-error',
}

const icon = computed(() => iconMap[props.type])

const { routerPushByKey } = useRouterPush()
</script>

<template>
  <div class="size-full flex-col-center gap-6 overflow-hidden">
    <div class="flex text-400px text-primary">
      <SvgIcon :icon="icon" />
    </div>
    <NButton type="primary" @click="routerPushByKey('root')">
      {{ $t('common.backToHome') }}
    </NButton>
  </div>
</template>

<style scoped>

</style>
