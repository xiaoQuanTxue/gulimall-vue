/**
 * 开发环境
 */
; (function () {
  // @ts-ignore
  window.SITE_CONFIG = {}

  // api接口请求地址
  // @ts-ignore
  window.SITE_CONFIG['baseUrl'] = 'http://localhost:88/api'

  // cdn地址 = 域名 + 版本号
  // @ts-ignore
  window.SITE_CONFIG['domain'] = './' // 域名
  // @ts-ignore
  window.SITE_CONFIG['version'] = ''   // 版本号(年月日时分)
  // @ts-ignore
  window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version
})()
