import gql from 'graphql-tag'

export const getBandIndicator: string = gql`
  query getBandIndicator(
    $trader: String!
    $name: String!
    $base: String!
    $quote: String!
    $period: String!
    $from: Date!
    $to: Date!
  ) {
    getBandIndicator(trader: $trader, name: $name, base: $base, quote: $quote, period: $period, from: $from, to: $to) {
      timestamp
      upper
      middle
      lower
    }
  }
`
