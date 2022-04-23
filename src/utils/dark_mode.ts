const c = document.documentElement.classList

function d() {
  c.add('dark')
}

function l() {
  c.remove('dark')
}

function a() {
  return window.matchMedia('(prefers-color-scheme:dark)').matches
}

export function detectDarkMode() {
  const s: '1' | '0' | null = localStorage['dark']
  if (s == '1' || (s == null && a())) {
    d()
    return true
  } else {
    l()
    return false
  }
}

export function setDarkMode(isDark?: boolean) {
  if (isDark == null) {
    a() ? d() : l()
    localStorage.removeItem('dark')
  } else if (isDark) {
    d()
    localStorage['dark'] = 1
  } else {
    l()
    localStorage['dark'] = 0
  }
}
