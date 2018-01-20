import { Repository, EntityRepository } from "typeorm";
import { sortBy } from "lodash";

import {
  return24Volume,
  returnCurrencies,
} from "../../poloniex/client";
import CurrencyPair from "../entities/CurrencyPair";

const sanitize = (volumes, currencies) => {
  const volumeKeys = Object.keys(volumes)
    .filter(x => !x.match(/^total/))
    .sort();

  const currencyPairs = volumeKeys
    .map(key => {
      const [currencyAKey, currencyBKey] = key.split("_");
      const currencyA = currencies[currencyAKey];
      const currencyB = currencies[currencyBKey];

      return {
        key,

        currencyAKey,
        currencyAName: currencyA.name,
        currencyATxFee: currencyA.txFee,
        currencyAMinConf: currencyA.minConf,

        currencyBKey,
        currencyBName: currencyB.name,
        currencyBTxFee: currencyB.txFee,
        currencyBMinConf: currencyB.minConf,

        currencyA24HVolume: volumes[key][currencyAKey],
        currencyB24HVolume: volumes[key][currencyBKey],
      };
    });

  const sortedCurrencyPairs = sortBy(currencyPairs, ["key", "volume24h.currencyAVolume"]);

  return sortedCurrencyPairs;
};

@EntityRepository(CurrencyPair)
export default class CurrencyPairRepository extends Repository<CurrencyPair> {
  async import() {
    console.log("CurrencyPairRespository#import")

    await this.deleteAllRows();

    const volumes = await return24Volume();
    const currencies = await returnCurrencies();

    const currencyPairDocuments = sanitize(volumes, currencies);


    const result = await this.save(currencyPairDocuments);

    console.log('RESULT', result);

    return result

    /*
    return Promise.all(currencyPairDocuments.map(async (x) => {
      try {
        return await this.save(x);
      } catch (error) {
        if (error.message.match('duplicate key value violates unique constraint')) {
          const result = await this.updateRow(x);


          return result;
        }
      }
    }));
    */
  }

  deleteAllRows() {
    console.log("CurrencyPairRespository#deleteAllRows")

    return this.createQueryBuilder("currency_pair")
      .delete()
      .execute();
  }

  updateRow(currencyPair) {
    return this.createQueryBuilder("currency_pair")
      .update(CurrencyPair)
      .set(currencyPair)
      .where(`key = :key`, currencyPair)
      .execute();
  }

  findOneByKeys(currencyAKey: string, currencyBKey: string) {
    // console.log("CurrencyPairRespository#findOneByKeys")

    return this.createQueryBuilder("currency_pair")
      .where(`"currencyAKey" = :currencyAKey`, { currencyAKey })
      .andWhere(`"currencyBKey" = :currencyBKey`, { currencyBKey })
      .getOne();
  }
}
