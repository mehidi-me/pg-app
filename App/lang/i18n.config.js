import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, bn} from './translations';

//empty for now
const resources = {
  en: {
    translation: en,
  },
  bn: {
    translation: bn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  //language to use if translations in user language are not available
  //debug: true,
  fallbackLng: 'bn',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
