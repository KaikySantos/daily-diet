export function normalizeTime(value: string | undefined) {
  if (!value) return ''

  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '$1:$2')
    .replace(/(\d{2})(\d+?)/, '$1')
}