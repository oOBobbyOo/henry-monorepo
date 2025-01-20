// @see https://github.com/rstacruz/nprogress
import type NProgress from "nprogress"

/**
 * @description 创建一个NProgress实例
 */
let nProgressInstance: null | typeof NProgress = null

/**
 * @description 动态加载NProgress库，并进行初始化配置
 */
async function loadNProgress() {
  if (nProgressInstance) {
    return nProgressInstance
  }
  nProgressInstance = await import("nprogress")
  nProgressInstance.configure({
    showSpinner: true,
    speed: 300,
  })
  return nProgressInstance
}

/**
 * @description 开始显示进度条
 */
async function startProgress() {
  const nprogress = await loadNProgress()
  nprogress?.start()
}

/**
 * @description 结束隐藏进度条
 */
async function stopProgress() {
  const nprogress = await loadNProgress()
  nprogress?.done()
}

export { startProgress, stopProgress }