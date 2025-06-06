import type { RouteLocationRaw } from 'vue-router'
import { router as globalRouter } from '@/router'
import { useRouter } from 'vue-router'

export function useRouterPush(inSetup = true) {
  const router = inSetup ? useRouter() : globalRouter
  const route = globalRouter.currentRoute

  const routerPush = router.push

  const routerBack = router.back

  async function routerPushByKey(key: string, options?: App.Global.RouterPushOptions) {
    const { query, params } = options || {}

    const routeLocation: RouteLocationRaw = {
      name: key,
    }

    if (Object.keys(query || {}).length) {
      routeLocation.query = query
    }

    if (Object.keys(params || {}).length) {
      routeLocation.params = params
    }

    return routerPush(routeLocation)
  }

  async function routerPushByKeyWithMetaQuery(key: string) {
    const allRoutes = router.getRoutes()
    const meta = allRoutes.find(item => item.name === key)?.meta || null
    return routerPushByKey(key, { query: meta?.query || {} })
  }

  async function toHome() {
    return routerPushByKey('Root')
  }

  /**
   * Navigate to login page
   *
   * @param loginModule The login module
   * @param redirectUrl The redirect url, if not specified, it will be the current route fullPath
   */
  async function toLogin(loginModule?: Auth.LoginModuleKey, redirectUrl?: string) {
    const module = loginModule || 'pwd-login'

    const options: App.Global.RouterPushOptions = {
      params: {
        module,
      },
    }

    const redirect = redirectUrl || route.value.fullPath

    options.query = {
      redirect,
    }

    return routerPushByKey('Login', options)
  }

  /**
   * Toggle login module
   *
   * @param module
   */
  async function toggleLoginModule(module: Auth.LoginModuleKey) {
    const query = route.value.query as Record<string, string>

    return routerPushByKey('Login', { query, params: { module } })
  }

  /**
   * Redirect from login
   *
   * @param [needRedirect] Whether to redirect after login. Default is `true`
   */
  async function redirectFromLogin(needRedirect = true) {
    const redirect = route.value.query?.redirect as string

    if (needRedirect && redirect) {
      await routerPush(redirect)
    }
    else {
      await toHome()
    }
  }
  return {
    routerPush,
    routerBack,
    routerPushByKey,
    routerPushByKeyWithMetaQuery,
    toLogin,
    toggleLoginModule,
    redirectFromLogin,
  }
}
