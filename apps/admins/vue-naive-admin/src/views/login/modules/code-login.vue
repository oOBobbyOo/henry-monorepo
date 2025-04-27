<script setup lang='ts'>
import { useFormRules } from '@/hooks/useFormRules'
import { useNaiveForm } from '@/hooks/useNaiveForm'
import { useRouterPush } from '@/hooks/useRouterPush'
import { computed, reactive } from 'vue'

defineOptions({ name: 'CodeLogin' })

const model: Auth.CodeLogin.FormModel = reactive({
  phone: '',
  code: '',
})

const rules = computed(() => {
  const { formRules } = useFormRules()
  return {
    phone: formRules.phone,
    code: formRules.code,
  }
})

const { toggleLoginModule } = useRouterPush()
const { formRef, validate } = useNaiveForm()

async function handleSubmit() {
  await validate()
}
</script>

<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false" @keyup.enter="handleSubmit">
    <n-form-item path="phone">
      <n-input v-model:value="model.phone" :placeholder="$t('page.login.common.phonePlaceholder')" />
    </n-form-item>
    <n-form-item path="code">
      <div class="w-full flex-y-center gap-4">
        <n-input v-model:value="model.code" :placeholder="$t('page.login.common.codePlaceholder')" />
        <n-button size="large" />
      </div>
    </n-form-item>
    <n-space vertical :size="18">
      <n-button type="primary" size="large" round block @click="handleSubmit">
        {{ $t('common.confirm') }}
      </n-button>
      <n-button size="large" round block @click="toggleLoginModule('pwd-login')">
        {{ $t('page.login.common.back') }}
      </n-button>
    </n-space>
  </n-form>
</template>

<style scoped>

</style>
