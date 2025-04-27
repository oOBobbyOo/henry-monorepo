<script setup lang='ts'>
import { useFormRules } from '@/hooks/useFormRules'
import { useNaiveForm } from '@/hooks/useNaiveForm'
import { useRouterPush } from '@/hooks/useRouterPush'
import { computed, reactive } from 'vue'

defineOptions({ name: 'ResetPwd' })

const model: Auth.ResetPwd.FormModel = reactive({
  phone: '',
  code: '',
  password: '',
  confirmPassword: '',
})

const rules = computed(() => {
  const { formRules, createConfirmPwdRule } = useFormRules()
  return {
    phone: formRules.phone,
    password: formRules.pwd,
    confirmPassword: createConfirmPwdRule(model.password),
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
      <n-input v-model:value="model.code" :placeholder="$t('page.login.common.codePlaceholder')" />
    </n-form-item>
    <n-form-item path="password">
      <n-input
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="$t('page.login.common.passwordPlaceholder')"
      />
    </n-form-item>
    <n-form-item path="confirmPassword">
      <n-input
        v-model:value="model.confirmPassword"
        type="password"
        show-password-on="click"
        :placeholder="$t('page.login.common.confirmPasswordPlaceholder')"
      />
    </n-form-item>
    <n-space vertical :size="18" class="w-full">
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
