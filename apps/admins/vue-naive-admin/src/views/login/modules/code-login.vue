<script setup lang='ts'>
import { useCaptcha } from '@/hooks/useCaptcha'
import { useFormRules } from '@/hooks/useFormRules'
import { useNaiveForm } from '@/hooks/useNaiveForm'
import { useRouterPush } from '@/hooks/useRouterPush'
import { useAuthStore } from '@/stores/modules/auth'
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
const { label, isCounting, loading, getCaptcha } = useCaptcha()

const authStore = useAuthStore()

async function handleSubmit() {
  await validate()

  await authStore.codeLogin(model)
}
</script>

<template>
  <NForm ref="formRef" :model="model" :rules="rules" size="large" :show-label="false" @keyup.enter="handleSubmit">
    <NFormItem path="phone">
      <NInput v-model:value="model.phone" :placeholder="$t('page.login.common.phonePlaceholder')" />
    </NFormItem>
    <NFormItem path="code">
      <div class="w-full flex-y-center gap-4">
        <NInput v-model:value="model.code" :placeholder="$t('page.login.common.codePlaceholder')" />
        <NButton size="large" :disabled="isCounting" :loading="loading" @click="getCaptcha(model.phone)">
          {{ label }}
        </NButton>
      </div>
    </NFormItem>
    <NSpace vertical :size="18" class="w-full">
      <NButton type="primary" size="large" round block :loading="authStore.loading" @click="handleSubmit">
        {{ $t('common.confirm') }}
      </NButton>
      <NButton size="large" round block @click="toggleLoginModule('pwd-login')">
        {{ $t('page.login.common.back') }}
      </NButton>
    </NSpace>
  </NForm>
</template>

<style scoped>

</style>
