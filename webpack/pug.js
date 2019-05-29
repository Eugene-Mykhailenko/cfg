const i18n = require('i18next');

const en = require('../src/locales/en/common');
const ua = require('../src/locales/ua/common');

i18n.init({
  lng: 'ua',
  initImmediate: false,
  resources: {
    ua: {
      common: ua,
    },
    en: {
      common: en,
    },
  },
});

global.__ = s => i18n.t(s);

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true,
            globals: ['__', 'Date'],
          },
        },
      ],
    },
  };
};
