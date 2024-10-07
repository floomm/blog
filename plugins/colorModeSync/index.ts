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
        
        window.addEventListener('DOMContentLoaded', function() {
            var themeToggle = document.querySelector('.theme-toggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', function() {
                    var currentMode = document.documentElement.getAttribute('data-theme');
                    var newMode = currentMode === 'dark' ? 'light' : 'dark';
                    localStorage.setItem('chakra-ui-color-mode', newMode);
                });
            }
        });
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