const { Kind } = require('graphql/language')

const user = require('../lib/models/user')
const currency = require('../lib/models/currency')

const jsonresult = (a) => {
  if (Array.isArray(a)) {
    return a.map((x) => {
      return x.toJSON()
    })
  }

  return a.toJSON()
}

module.exports = {
  /*
  Currency: {
  },
  */

  Date: {
    __serialize: (value) => {
      return value.getTime()
    },

    __parseValue: (value) => {
      return new Date(value)
    },

    __parseLiteral: (ast) => {
      if (ast.kind === Kind.INT) {
        return ast.value
      }
    },
  },

  RootQuery: {
    users: () => {
      return user.getUsers()
    },

    userById: (root, { id }) => {
      return user.getUserById(id)
    },

    userByEmail: (root, { email }) => {
      return user.getUserByEmail(email)
    },

    currencies: () => {
      return currency.getCurrencies()
    },

    currencyById: (root, { id }) => {
      return currency.getCurrencyById(id)
    },
  },

  RootMutation: {
    // TODO: Remove.
    loginWithEmailPassword: (root, args) => {
      return null
    },
  },
}
