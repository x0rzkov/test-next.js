import { FieldType, toNanoDate } from 'influx'

import { log } from '../../../common/log'

import getClient from '../client'
import { returnChartData } from '../../poloniex/client'

export const schema = {
  measurement: 'candlesticks',
  tags: ['currencyAKey', 'currencyBKey', 'period'],
  fields: {
    open: FieldType.FLOAT,
    close: FieldType.FLOAT,
    high: FieldType.FLOAT,
    low: FieldType.FLOAT,
    volume: FieldType.FLOAT,
    quoteVolume: FieldType.FLOAT,
    weightedAverage: FieldType.FLOAT,
  },
}

export const findByCurrencyPairAndPeriodBetweenStartAndEnd = async (
  currencyAKey,
  currencyBKey,
  period,
  start,
  end,
) => {
  try {
    log.debug(
      'influxdb entities candlestick findByCurrencyPairAndPeriodBetweenStartAndEnd',
      currencyAKey,
      currencyBKey,
      period,
      start,
      end,
    )

    const client = await getClient()

    const startNano = toNanoDate(String(start)).getNanoTime()
    const endNano = toNanoDate(String(end)).getNanoTime()

    const result = await client.query(`
      SELECT * FROM candlesticks
      WHERE
        currencyAKey = '${currencyAKey}' AND
        currencyBKey = '${currencyBKey}' AND
        period       = '${period}'       AND
        time        >= ${startNano}      AND
        time        <= ${endNano}
      ORDER BY time ASC
    `)

    return result
  } catch (error) {
    throw error
  }
}

const sanitizeAPIChartDataJSON = (a, currencyAKey, currencyBKey, period) => {
  return a.map((x) => {
    return {
      measurement: schema.measurement,
      timestamp: x.date * 1000 * 1000 * 1000,
      tags: {
        currencyAKey,
        currencyBKey,
        period,
      },
      fields: {
        open: x.open,
        close: x.close,
        high: x.high,
        low: x.low,
        volume: x.volume,
        quoteVolume: x.quoteVolume,
        weightedAverage: x.weightedAverage,
      },
    }
  })
}

export const importForCurrencyPairAndPeriodBetweenStartAndEnd = async (
  currencyAKey,
  currencyBKey,
  period,
  start,
  end,
) => {
  try {
    log.debug(
      'influxdb entities candlestick importForCurrencyPairAndPeriodBetweenStartAndEnd',
      currencyAKey,
      currencyBKey,
      period,
      start,
      end,
    )

    const client = await getClient()

    const apiResultJSON = await returnChartData(
      currencyAKey,
      currencyBKey,
      period,
      start / 1000 / 1000 / 1000,
      end / 1000 / 1000 / 1000,
    )

    const data = sanitizeAPIChartDataJSON(
      apiResultJSON,
      currencyAKey,
      currencyBKey,
      period,
    )

    await client.writePoints(data)
  } catch (error) {
    throw error
  }
}