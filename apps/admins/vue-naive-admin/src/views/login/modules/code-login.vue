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
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false" @keyup.enter="handleSubmit">
    <n-form-item path="phone">
      <n-input v-model:value="model.phone" :placeholder="$t('page.login.common.phonePlaceholder')" />
    </n-form-item>
    <n-form-item path="code">
      <div class="w-full flex-y-center gap-4">
        <n-input v-model:value="model.code" :placeholder="$t('page.login.common.codePlaceholder')" />
        <n-button size="large" :disabled="isCounting" :loading="loading" @click="getCaptcha(model.phone)">
          {{ label }}
        </n-button>
      </div>
    </n-form-item>
    <n-space vertical :size="18" class="w-full">
      <n-button type="primary" size="large" round block :loading="authStore.loading" @click="handleSubmit">
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
