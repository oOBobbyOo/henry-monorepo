<script setup lang='ts'>
import { useCaptcha } from '@/hooks/useCaptcha'
import { useFormRules } from '@/hooks/useFormRules'
import { useNaiveForm } from '@/hooks/useNaiveForm'
import { useRouterPush } from '@/hooks/useRouterPush'
import { useAuthStore } from '@/stores/modules/auth'
import { computed, reactive } from 'vue'

defineOptions({ name: 'Register' })

const model: Auth.Register.FormModel = reactive({
  phone: '',
  code: '',
  password: '',
  confirmPassword: '',
})

const rules = computed(() => {
  const { formRules, createConfirmPwdRule } = useFormRules()
  return {
    phone: formRules.phone,
    code: formRules.code,
    password: formRules.pwd,
    confirmPassword: createConfirmPwdRule(model.password),
  }
})

const { toggleLoginModule } = useRouterPush()
const { formRef, validate } = useNaiveForm()
const { label, isCounting, loading, getCaptcha } = useCaptcha()

const authStore = useAuthStore()

async function handleSubmit() {
  await validate()

  await authStore.register({
    phone: model.phone,
    code: model.code,
    password: model.password,
  })
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
    <NFormItem path="password">
      <NInput
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="$t('page.login.common.passwordPlaceholder')"
      />
    </NFormItem>
    <NFormItem path="confirmPassword">
      <NInput
        v-model:value="model.confirmPassword"
        type="password"
        show-password-on="click"
        :placeholder="$t('page.login.common.confirmPasswordPlaceholder')"
      />
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
