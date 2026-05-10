/** Resolve root-relative `/…` paths for `public/` with Vite `base` URL. */
export function publicAssetUrl(url) {
  if (/^https?:\/\//i.test(url)) return url
  const path = url.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${path}`
}
