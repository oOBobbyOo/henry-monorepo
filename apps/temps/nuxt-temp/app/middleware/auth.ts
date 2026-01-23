export default defineNuxtRouteMiddleware((to, _) => {
  if (to.path === '/profile') {
    return navigateTo('/')
  }
})
