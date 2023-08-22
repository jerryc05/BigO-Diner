export const isDev = process.env.NODE_ENV === 'development'

export const SSO_ENDPOINT = 'https://sso.jerryc05.icu'

export function selfServiceUrl(op: string) {
  const url = new URL(`${SSO_ENDPOINT}/self-service/${op}/browser`)
  url.searchParams.append('return_to', window.location.href)
  return url.href
}
