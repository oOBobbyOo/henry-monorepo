import type { ComputedRef, Ref } from 'vue'
import { $t } from '@/locales'
import { REG_CODE_SIX, REG_EMAIL, REG_PHONE, REG_PWD, REG_USER_NAME } from '@henry/utils'
import { toValue } from 'vue'

export function useFormRules() {
  const patternRules = {
    username: {
      pattern: REG_USER_NAME,
      message: $t('form.username.invalid'),
      trigger: 'change',
    },
    phone: {
      pattern: REG_PHONE,
      message: $t('form.phone.invalid'),
      trigger: 'change',
    },
    pwd: {
      pattern: REG_PWD,
      message: $t('form.pwd.invalid'),
      trigger: 'change',
    },
    code: {
      pattern: REG_CODE_SIX,
      message: $t('form.code.invalid'),
      trigger: 'change',
    },
    email: {
      pattern: REG_EMAIL,
      message: $t('form.email.invalid'),
      trigger: 'change',
    },
  } satisfies Record<string, Auth.FormRule>

  const formRules = {
    username: [createRequiredRule($t('form.username.required')), patternRules.username],
    phone: [createRequiredRule($t('form.phone.required')), patternRules.phone],
    pwd: [createRequiredRule($t('form.pwd.required')), patternRules.pwd],
    code: [createRequiredRule($t('form.code.required')), patternRules.code],
    email: [createRequiredRule($t('form.email.required')), patternRules.email],
  } satisfies Record<string, Auth.FormRule[]>

  const defaultRequiredRule = createRequiredRule($t('form.required'))

  function createRequiredRule(message: string): Auth.FormRule {
    return {
      required: true,
      message,
    }
  }

  function createConfirmPwdRule(pwd: string | Ref<string> | ComputedRef<string>) {
    const confirmPwdRule: Auth.FormRule[] = [
      { required: true, message: $t('form.confirmPwd.required') },
      {
        asyncValidator: (rule, value) => {
          if (value.trim() !== '' && value !== toValue(pwd)) {
            return Promise.reject(rule.message)
          }
          return Promise.resolve()
        },
        message: $t('form.confirmPwd.invalid'),
        trigger: 'input',
      },
    ]
    return confirmPwdRule
  }

  return {
    patternRules,
    formRules,
    defaultRequiredRule,
    createRequiredRule,
    createConfirmPwdRule,
  }
}
