import i18n from 'i18next';

i18n
    .init({
        whitelist: ['ru', 'uk'],
        fallbackLng: 'uk',

        // have a common namespace used around the full app
        ns: ['common'],
        defaultNS: 'common',

        interpolation: {
            escapeValue: false // not needed for react!!
        },
        react: {
            wait: false
        }
    });

export default i18n;
