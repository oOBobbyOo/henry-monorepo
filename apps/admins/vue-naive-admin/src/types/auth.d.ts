declare namespace Auth {
  type Component = import('vue').Component
  type FormRule = import('naive-ui').FormItemRule
  type FormItemRule = import('naive-ui').FormItemRule

  type LoginModuleKey = 'pwd-login' | 'code-login' | 'register' | 'reset-pwd'

  interface LoginModule {
    label: string
    component: Component
  }

  namespace PwdLogin {
    interface FormModel {
      username: string
      password: string
      captcha?: string
    }
  }

  namespace CodeLogin {
    interface FormModel {
      phone: string
      code: string
    }
  }

  namespace Register {
    interface FormModel {
      phone: string
      code: string
      password: string
      confirmPassword: string
    }
  }

  namespace ResetPwd {
    interface FormModel {
      phone: string
      code: string
      password: string
      confirmPassword: string
    }
  }
}
