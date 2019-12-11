export function periodTimeframe(period: string): string | undefined {
  const result = period.match(/([A-Z]+)/)

  if (result) {
    return result[1]
  }
}

export function periodAmount(period: string): string | undefined {
  const result = period.match(/(\d+)/)

  if (result) {
    return result[1]
  }
}

// TODO: This is probably pretty bad
export function periodToMilliSeconds(period: string): number {
  const timeframe = periodTimeframe(period)
  const amount = periodAmount(period)

  const result = Number(amount) * 1000

  switch (timeframe) {
    case 'MINUTE':
      return result * 60

    case 'HOUR':
      return result * 60 * 60

    case 'DAY':
      return result * 60 * 60 * 24

    case 'WEEK':
      return result * 60 * 60 * 24 * 7

    case 'MONTH':
      return result * 60 * 60 * 24 * 7 * 4

    default:
      return result
  }
}

export function periodToMarketStore(period: string): string {
  const amount = periodAmount(period)
  let timeframe = periodTimeframe(period)

  switch (timeframe) {
    case 'MINUTE':
      timeframe = 'Min'
      break

    case 'HOUR':
      timeframe = 'Hour'
      break

    case 'DAY':
      timeframe = 'Day'
      break

    case 'WEEK':
      timeframe = 'Week'
      break

    case 'MONTH':
      timeframe = 'Month'
      break

    default:
      timeframe = 'Day'
  }

  return `${amount}${timeframe}`
}

export function getExpectedLengthForPeriod(period: string, from: number, to: number) {
  const now = new Date().valueOf()
  const f = new Date(from).valueOf()
  let t = new Date(to).valueOf()

  if (t > now) {
    t = now
  }

  const difference = t - f

  return Math.ceil(difference / periodToMilliSeconds(period))
}
