import { createI18n } from 'vue-i18n'
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { computed } from 'vue'

const FALLBACK_LOCALE = 'zh-CN'

export const antLocales = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

export const languageColumns = [
  { text: '简体中文', value: 'zh-CN' },
  { text: 'English', value: 'en-US' },
]

export const i18n = setupI18n()
type I18n = typeof i18n

export const locale = computed({
  get() {
    return i18n.global.locale.value
  },
  set(language: string) {
    setLang(language, i18n)
  },
})

function setupI18n() {
  const locale = getI18nLocale()
  const i18n = createI18n({
    locale,
    legacy: false,
  })
  setLang(locale, i18n)
  return i18n
}

async function setLang(lang: string, i18n: I18n) {
  const messages = await import(`../locales/${lang}.json`)
  i18n.global.setLocaleMessage(lang, messages.default)

  document.querySelector('html')?.setAttribute('lang', lang)
  localStorage.setItem('language', lang)
  i18n.global.locale.value = lang
}

function getI18nLocale() {
  const storedLocale = localStorage.getItem('language') || navigator.language
  const langs = languageColumns.map((v) => v.value as string)
  const foundLocale = langs.find((v) => v === storedLocale || v.indexOf(storedLocale) === 0)
  return foundLocale || FALLBACK_LOCALE
}
