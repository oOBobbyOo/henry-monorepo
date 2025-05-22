<script setup lang='ts'>
import { $t } from '@/locales'
import { useUserStore } from '@/stores/modules/user'
import { computed } from 'vue'

defineOptions({ name: 'UserAvatar' })

const { userInfo } = useUserStore()

const options = computed(() => ([
  {
    label: $t('header.userCenter'),
    key: 'userCenter',
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: $t('header.logout'),
    key: 'logout',
  },
]))

function handleSelect() {
}
</script>

<template>
  <NDropdown
    placement="bottom"
    trigger="click"
    :options="options"
    @select="handleSelect"
  >
    <NAvatar
      round
      class="cursor-pointer"
      :src="userInfo?.avatar"
    >
      <template #fallback>
        <ButtonIcon>
          <SvgIcon icon="ph:user-circle" />
        </ButtonIcon>
      </template>
    </NAvatar>
  </NDropdown>
</template>

<style scoped>

</style>
