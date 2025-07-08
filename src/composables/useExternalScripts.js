export function useExternalScripts() {
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve(); return;
      }
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  return {
    loadExternalScripts: async () => {
      // Charger les scripts dans l’ordre
      await loadScript('https://code.jquery.com/jquery-3.6.0.min.js');
      await loadScript('/template/js/plugins.min.js');
      await loadScript('/template/js/functions.bundle.js');
      await loadScript('/template/js/components/datepicker.js');

      // Attendre que le DOM soit prêt (très important)
      const waitForDOM = () =>
        new Promise((resolve) => {
          if (document.readyState === 'complete' || document.readyState === 'interactive') {
            resolve();
          } else {
            document.addEventListener('DOMContentLoaded', resolve);
          }
        });

      await waitForDOM();

      // Initialiser le datepicker après que tout soit prêt
      if (window.jQuery) {
        window.jQuery('.home-date').datepicker({
          autoclose: true,
          startDate: "today",
        });
      } else {
        console.error('jQuery not available');
      }
    }
  };
}
