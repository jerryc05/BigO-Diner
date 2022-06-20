import bigO from '@/assets/bigO.png'
import bingbing from '@/assets/bingbing.png'


const bodyClasses = document.body.classList
let icon: HTMLLinkElement | null = null

function favicon () {
  if (icon === null) {
    const link = document.head.querySelector('link[rel~="icon"]')
    if (link === null) {
      icon = document.createElement('link')
      icon.rel = 'icon'
      document.head.appendChild(icon)
    } else {
      icon = link as HTMLLinkElement
    }
  }
  return icon
}

function setDark () {
  favicon().href = bigO
  document.title = 'BigO Diner'
  bodyClasses.add('dark')
}

function setLight () {
  favicon().href = bingbing
  document.title = 'MilkTea Diner'
  bodyClasses.remove('dark')
}

function isSystemDark () {
  return window.matchMedia('(prefers-color-scheme:dark)').matches
}

export function detectAndSetDarkMode () {
  const userSettingIsDark = localStorage.getItem('dark')
  if (userSettingIsDark === '1' || (userSettingIsDark === null && isSystemDark())) {
    setDark()
    return true
  }
  setLight()
  return false
}

export function setDarkMode (isDark?: boolean) {
  if (isDark === null) {
    if (isSystemDark()) {
      setDark()
    } else {
      setLight()
    }
    localStorage.removeItem('dark')
  } else if (isDark) {
    setDark()
    localStorage.dark = 1
  } else {
    setLight()
    localStorage.dark = 0
  }
}
