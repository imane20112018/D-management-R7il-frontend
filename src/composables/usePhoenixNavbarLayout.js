export function usePhoenixNavbarLayout() {
  const config = window.config?.config
  if (!config) {
    console.warn('⚠️ window.config.config est introuvable. Vérifie que /assets/js/config.js est bien chargé dans index.html')
    return
  }

  const {
    phoenixIsRTL,
    phoenixNavbarTopShape,
    phoenixNavbarPosition,
    phoenixNavbarTopStyle,
    phoenixNavbarVerticalStyle
  } = config

  const html = document.documentElement

  // 🔁 Gestion RTL
  if (phoenixIsRTL) {
    document.getElementById('style-default')?.setAttribute('disabled', true)
    document.getElementById('user-style-default')?.setAttribute('disabled', true)
    html.setAttribute('dir', 'rtl')
  } else {
    document.getElementById('style-rtl')?.setAttribute('disabled', true)
    document.getElementById('user-style-rtl')?.setAttribute('disabled', true)
  }

  const docEl = document.documentElement
  const navbarDefault = document.querySelector('#navbarDefault')
  const navbarTop = document.querySelector('#navbarTop')
  const topNavSlim = document.querySelector('#topNavSlim')
  const navbarTopSlim = document.querySelector('#navbarTopSlim')
  const navbarCombo = document.querySelector('#navbarCombo')
  const navbarComboSlim = document.querySelector('#navbarComboSlim')
  const dualNav = document.querySelector('#dualNav')
  const navbarVertical = document.querySelector('.navbar-vertical')

  // 🧠 Choix du layout selon config Phoenix
  if (phoenixNavbarPosition === 'dual-nav') {
    topNavSlim?.remove()
    navbarTop?.remove()
    navbarTopSlim?.remove()
    navbarCombo?.remove()
    navbarComboSlim?.remove()
    navbarDefault?.remove()
    navbarVertical?.remove()
    dualNav?.removeAttribute('style')
    docEl.setAttribute('data-navigation-type', 'dual')
  } else if (phoenixNavbarTopShape === 'slim' && phoenixNavbarPosition === 'vertical') {
    navbarDefault?.remove()
    navbarTop?.remove()
    navbarTopSlim?.remove()
    navbarCombo?.remove()
    navbarComboSlim?.remove()
    topNavSlim?.style.setProperty('display', 'block')
    navbarVertical?.style.setProperty('display', 'inline-block')
    docEl.setAttribute('data-navbar-horizontal-shape', 'slim')
  } else if (phoenixNavbarTopShape === 'slim' && phoenixNavbarPosition === 'horizontal') {
    navbarDefault?.remove()
    navbarVertical?.remove()
    navbarTop?.remove()
    topNavSlim?.remove()
    navbarCombo?.remove()
    navbarComboSlim?.remove()
    dualNav?.remove()
    navbarTopSlim?.removeAttribute('style')
    docEl.setAttribute('data-navbar-horizontal-shape', 'slim')
  } else if (phoenixNavbarTopShape === 'slim' && phoenixNavbarPosition === 'combo') {
    navbarDefault?.remove()
    navbarTop?.remove()
    topNavSlim?.remove()
    navbarCombo?.remove()
    navbarTopSlim?.remove()
    dualNav?.remove()
    navbarComboSlim?.removeAttribute('style')
    navbarVertical?.removeAttribute('style')
    docEl.setAttribute('data-navbar-horizontal-shape', 'slim')
  } else if (phoenixNavbarTopShape === 'default' && phoenixNavbarPosition === 'horizontal') {
    navbarDefault?.remove()
    topNavSlim?.remove()
    navbarVertical?.remove()
    navbarTopSlim?.remove()
    navbarCombo?.remove()
    navbarComboSlim?.remove()
    dualNav?.remove()
    navbarTop?.removeAttribute('style')
    docEl.setAttribute('data-navigation-type', 'horizontal')
  } else if (phoenixNavbarTopShape === 'default' && phoenixNavbarPosition === 'combo') {
    topNavSlim?.remove()
    navbarTop?.remove()
    navbarTopSlim?.remove()
    navbarDefault?.remove()
    navbarComboSlim?.remove()
    dualNav?.remove()
    navbarCombo?.removeAttribute('style')
    navbarVertical?.removeAttribute('style')
    docEl.setAttribute('data-navigation-type', 'combo')
  } else {
    topNavSlim?.remove()
    navbarTop?.remove()
    navbarTopSlim?.remove()
    navbarCombo?.remove()
    navbarComboSlim?.remove()
    dualNav?.remove()
    navbarDefault?.removeAttribute('style')
    navbarVertical?.removeAttribute('style')
  }

  // 🎨 Styles "darker"
  const navbarTopElement = document.querySelector('.navbar-top')
  if (phoenixNavbarTopStyle === 'darker') {
    navbarTopElement?.setAttribute('data-navbar-appearance', 'darker')
  }

  const navbarVerticalElement = document.querySelector('.navbar-vertical')
  if (phoenixNavbarVerticalStyle === 'darker') {
    navbarVerticalElement?.setAttribute('data-navbar-appearance', 'darker')
  }
}

// 🧩 Fonction utilitaire pour charger les JS dynamiquement dans l'ordre
export async function loadScriptSequentially(scripts) {
  for (const src of scripts) {
    // Ne pas recharger un script déjà présent
    if (!document.querySelector(`script[src="${src}"]`)) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.async = false
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })
    }
  }
}
