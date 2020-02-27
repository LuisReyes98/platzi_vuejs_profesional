import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    search: 'Search',
    about: 'About'
  },
  es: {
    search: 'Buscar',
    about: 'Acerca de'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
