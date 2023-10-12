interface TimeUnits {
  hours: string
  minutes: string
  seconds: string
}

export function getRemainingTime(): TimeUnits {
  const now = new Date().getTime()
  const midnight = new Date()
  midnight.setHours(24, 0, 0, 0)
  const midnightTime = midnight.getTime()
  const timeDifference = midnightTime - now

  return calculateTimeUnits(timeDifference)
}

export function calculateTimeUnits(timeDifference: number): TimeUnits {
  const hours = Math.floor(timeDifference / (1000 * 60 * 60))
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
  return {
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  }
}
