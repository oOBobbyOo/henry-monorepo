<script setup lang='ts'>
import { useFormRules } from '@/hooks/useFormRules'
import { useNaiveForm } from '@/hooks/useNaiveForm'
import { useRouterPush } from '@/hooks/useRouterPush'
import { useAuthStore } from '@/stores/modules/auth'
import { computed, reactive } from 'vue'

defineOptions({ name: 'PwdLogin' })

const model: Auth.PwdLogin.FormModel = reactive({
  username: 'henry',
  password: '123456',
})

const rules = computed(() => {
  const { formRules } = useFormRules()
  return {
    username: formRules.username,
    password: formRules.pwd,
  }
})

const { toggleLoginModule } = useRouterPush()
const { formRef, validate } = useNaiveForm()

const authStore = useAuthStore()

async function handleSubmit() {
  await validate()

  await authStore.pwdLogin(model)
}
</script>

<template>
  <NForm ref="formRef" :model="model" :rules="rules" size="large" :show-label="false" @keyup.enter="handleSubmit">
    <NFormItem path="username">
      <NInput v-model:value="model.username" :placeholder="$t('page.login.common.userNamePlaceholder')" />
    </NFormItem>
    <NFormItem path="password">
      <NInput
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="$t('page.login.common.passwordPlaceholder')"
      />
    </NFormItem>
    <NSpace vertical :size="24">
      <div class="flex-y-center justify-between">
        <NCheckbox>{{ $t('page.login.pwdLogin.rememberMe') }}</NCheckbox>
        <NButton quaternary @click="toggleLoginModule('reset-pwd')">
          {{ $t('page.login.pwdLogin.forgetPassword') }}
        </NButton>
      </div>
      <NButton type="primary" size="large" round block :loading="authStore.loading" @click="handleSubmit">
        {{ $t('common.confirm') }}
      </NButton>
      <div class="flex-y-center justify-between gap-4">
        <NButton class="flex-1" block @click="toggleLoginModule('code-login')">
          {{ $t('page.login.codeLogin.title') }}
        </NButton>
        <NButton class="flex-1" block @click="toggleLoginModule('register')">
          {{ $t('page.login.register.title') }}
        </NButton>
      </div>
    </NSpace>
  </NForm>
</template>

<style scoped>

</style>
