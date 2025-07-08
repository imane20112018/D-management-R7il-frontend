// plugins/template-scripts.js
export default {
    install(app) {
        app.config.globalProperties.$loadTemplateScripts = () => {
            return new Promise((resolve) => {
                const scripts = [
                    '/template/js/plugins.min.js',
                    '/template/js/functions.bundle.js',
                    '/template/js/components/datepicker.js'
                ];

                let loaded = 0;

                scripts.forEach(src => {
                    const script = document.createElement('script');
                    script.src = src;
                    script.defer = true;
                    script.onload = () => {
                        loaded++;
                        if (loaded === scripts.length) {
                            resolve();
                        }
                    };
                    document.body.appendChild(script);
                });
            });
        };
    }
};
