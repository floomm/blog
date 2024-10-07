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
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem('theme', mode);
    } catch (e) {
        console.error('Error setting theme:', e);
    }
})();
`,
                    },
                ],
            };
        },
    };
};