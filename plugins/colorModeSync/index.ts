module.exports = function (context, options) {
    return {
        name: 'docusaurus-plugin-color-mode-sync',
        injectHtmlTags() {
            return {
                preBodyTags: [
                    {
                        tagName: 'script',
                        innerHTML: `
              (function() {
                try {
                  var mode = localStorage.getItem('chakra-ui-color-mode');
                  localStorage.setItem('theme', mode);
                } catch (e) {
                  console.error('Error setting color mode:', e);
                }
              })();
            `,
                    },
                ],
            };
        },
    };
};