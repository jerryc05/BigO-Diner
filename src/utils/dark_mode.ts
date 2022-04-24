import big_o from '@/assets/big_o.png'
import bingbing from '@/assets/bingbing.png'


const c = document.documentElement.classList
let icon: HTMLLinkElement | undefined

function i() {
  if (icon == null) {
    const link = document.head.querySelector("link[rel~='icon']")
    if (link == null) {
      icon = document.createElement('link')
      icon.rel = 'icon'
      document.head.appendChild(icon)
    } else {
      icon = link as HTMLLinkElement
    }
  }
  return icon
}

function d() {
  i().href = big_o
  document.title = 'BigO Diner'
  c.add('dark')
}

function l() {
  i().href = bingbing
  document.title = 'MilkTea Diner'
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
