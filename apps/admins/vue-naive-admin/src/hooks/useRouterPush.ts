import type { RouteLocationRaw } from 'vue-router'
import { router as globalRouter } from '@/routes'
import { useRouter } from 'vue-router'

export function useRouterPush(inSetup = true) {
  const router = inSetup ? useRouter() : globalRouter

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

  return {
    routerPush,
    routerBack,
    routerPushByKey,
    routerPushByKeyWithMetaQuery,
  }
}
