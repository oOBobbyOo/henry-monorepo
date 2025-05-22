// @see https://github.com/vbenjs/vite-plugin-compression
import viteCompression from 'vite-plugin-compression'

export function setupCompressionPlugin() {
  return viteCompression({
    verbose: true, // 是否在控制台输出压缩结果，默认 true
    disable: false, // 是否禁用该插件，默认 false
    threshold: 10240, // 大于该阈值（单位字节b）文件才压缩，默认 1025
    algorithm: 'gzip', // 压缩算法，支持 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw'，默认 'gzip'
    ext: '.gz', // 生成文件后缀名，默认 '.gz'
    deleteOriginFile: false, // 是否在压缩后删除源文件
  })
}
