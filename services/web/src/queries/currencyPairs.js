import gql from 'graphql-tag'

export const currencyPairsQuery = gql`
  query currencyPairs {
    currencyPairs {
      id
      key
      currencyAKey
      currencyAName
      currencyATxFee
      currencyAMinConf
      currencyBKey
      currencyBName
      currencyBTxFee
      currencyBMinConf
      currencyA24HVolume
      currencyB24HVolume
    }
  }
`
