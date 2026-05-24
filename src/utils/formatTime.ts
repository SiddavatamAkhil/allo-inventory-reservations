export function formatTime(milliseconds: number) {
  const minutes = Math.floor(milliseconds / 1000 / 60)
  const seconds = Math.floor((milliseconds / 1000) % 60)

  return `${minutes}m ${seconds}s`
}