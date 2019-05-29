import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import $ from 'jquery';
import locI18next from 'jquery-i18next';

import ua from '../locales/ua/common.json';
import en from '../locales/en/common.json';

const setInitialLanguage = () => {
  const lang = i18next.language.split(/-/)[0];

  const activeLangButton = $('.languages__item.active');

  if (!activeLangButton) {
    $(`[data-i18n="common:langSwitch:${lang}"]`).addClass('active');

    return;
  }

  const active = activeLangButton
    .attr('data-i18n')
    .split(':')
    .pop();

  if (active !== lang) {
    activeLangButton.removeClass('active');

    $(`[data-i18n="common:langSwitch:${lang}"]`).addClass('active');
  }

  return lang;
};

const bindlanguageSwitcher = () =>
  $('.languages__item').on('click', e => {
    const el = $(e.target);
    const newLanguage = el
      .attr('data-i18n')
      .split(':')
      .pop();

    if (newLanguage === i18next.language) {
      return false;
    }

    i18next
      .changeLanguage(newLanguage)
      .then(() => $('[data-i18n]').localize())
      .catch(console.log);

    $('[data-i18n]').localize();

    $('.languages__item.active').removeClass('active');
    $(`[data-i18n='${el.attr('data-i18n')}']`).addClass('active');

    return false;
  });

export const setupI18N = () => {
  return i18next
    .use(I18nextBrowserLanguageDetector)
    .init({
      fallbackLng: 'ua',
      resources: {
        ua: {
          common: ua,
        },
        en: {
          common: en,
        },
      },
    })
    .then(() => {
      locI18next.init(i18next, $);

      $('[data-i18n]').localize();

      bindlanguageSwitcher();

      return setInitialLanguage();
    });
};
