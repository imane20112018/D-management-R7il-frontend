export async function loadScriptSequentially(scripts) {
  for (const src of scripts) {
    // Ne pas recharger un script déjà présent
    if (!document.querySelector(`script[src="${src}"]`)) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.defer = true
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })
    }
  }
}
