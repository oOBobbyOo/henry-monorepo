<script setup lang='ts'>
import { computed } from 'vue'
import CodeLogin from './modules/code-login.vue'
import PwdLogin from './modules/pwd-login.vue'
import Register from './modules/register.vue'
import ResetPwd from './modules/reset-pwd.vue'

interface Props {
  /** The login module */
  module?: Auth.LoginModuleKey
}

const props = defineProps<Props>()

const moduleMap: Record<Auth.LoginModuleKey, Auth.LoginModule> = {
  'pwd-login': { label: 'page.login.pwdLogin.title', component: PwdLogin },
  'code-login': { label: 'page.login.codeLogin.title', component: CodeLogin },
  'register': { label: 'page.login.register.title', component: Register },
  'reset-pwd': { label: 'page.login.resetPwd.title', component: ResetPwd },
}

const activeModule = computed(() => moduleMap[props.module || 'pwd-login'])
</script>

<template>
  <div class="relative flex-center">
    <main class="pt-6">
      <h3 class="text-4 font-medium">
        {{ $t(activeModule.label) }}
      </h3>
      <div class="pt-6">
        <Transition mode="out-in" appear>
          <component :is="activeModule.component" />
        </Transition>
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>
