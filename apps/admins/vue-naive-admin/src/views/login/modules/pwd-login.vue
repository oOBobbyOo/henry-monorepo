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
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false" @keyup.enter="handleSubmit">
    <n-form-item path="username">
      <n-input v-model:value="model.username" :placeholder="$t('page.login.common.userNamePlaceholder')" />
    </n-form-item>
    <n-form-item path="password">
      <n-input
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="$t('page.login.common.passwordPlaceholder')"
      />
    </n-form-item>
    <n-space vertical :size="24">
      <div class="flex-y-center justify-between">
        <n-checkbox>{{ $t('page.login.pwdLogin.rememberMe') }}</n-checkbox>
        <n-button quaternary @click="toggleLoginModule('reset-pwd')">
          {{ $t('page.login.pwdLogin.forgetPassword') }}
        </n-button>
      </div>
      <n-button type="primary" size="large" round block @click="handleSubmit">
        {{ $t('common.confirm') }}
      </n-button>
      <div class="flex-y-center justify-between gap-4">
        <n-button class="flex-1" block @click="toggleLoginModule('code-login')">
          {{ $t('page.login.codeLogin.title') }}
        </n-button>
        <n-button class="flex-1" block @click="toggleLoginModule('register')">
          {{ $t('page.login.register.title') }}
        </n-button>
      </div>
    </n-space>
  </n-form>
</template>

<style scoped>

</style>
