import { getInfluxClient } from '../../../../common/influxdb/client'
import {
  findByCurrencyPairAndPeriodBetweenStartAndEnd,
  importForCurrencyPairAndPeriodBetweenStartAndEnd,
} from '../../../../common/influxdb/entities/candlestick'

import fetchPoloniex from '../fetchPoloniex'

const MILLISECOND_MULTIPLIER = 1000

const convertToGraphQLFormat = data => {
  return data.map(x => {
    x.id = x.time

    return x
  })
}

export default async function candlesticks(
  root,
  // { currencyAKey, currencyBKey, period, start, end }: CandlesticksOptions,
) {
  console.log(
    'graphql resolvers RootQuery candlesticks',
    // currencyAKey,
    // currencyBKey,
    // period,
    // start,
    // end,
  )

  // const currencyPairKey = `${currencyAKey}_${currencyBKey}`;

  // const influxDBClient = await getInfluxClient();

  // let candlesticksFindResult = await findByCurrencyPairAndPeriodBetweenStartAndEnd(
  //   currencyAKey,
  //   currencyBKey,
  //   period,
  //   start * 1000 * 1000,
  //   end * 1000 * 1000,
  // );

  // let output: any[];

  // if (candlesticksFindResult && candlesticksFindResult.length) {
  //   output = convertToGraphQLFormat(candlesticksFindResult);

  //   return output;
  // }

  // const importResult = await importForCurrencyPairAndPeriodBetweenStartAndEnd(
  //   currencyAKey,
  //   currencyBKey,
  //   period,
  //   start * 1000 * 1000,
  //   end * 1000 * 1000,
  // );

  // candlesticksFindResult = await findByCurrencyPairAndPeriodBetweenStartAndEnd(
  //   currencyAKey,
  //   currencyBKey,
  //   period,
  //   start * 1000 * 1000,
  //   end * 1000 * 1000,
  // );

  // output = convertToGraphQLFormat(candlesticksFindResult);

  // return output;
}