export function getDifferenceBetweenTwoDatesInDays(date_to: Date, date_from: Date): number {
  const difference_in_days = Math.round(
    (date_to.getTime() - date_from.getTime()) / (1000 * 3600 * 24),
  )
  return difference_in_days
}

export function isValidDate(date: Date) {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (isNaN(date.getTime())) {
      return false
    } else {
      return true
    }
  }
  return false
}
