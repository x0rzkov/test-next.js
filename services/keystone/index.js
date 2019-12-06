const { Keystone } = require('@keystonejs/keystone')
const { PasswordAuthStrategy } = require('@keystonejs/auth-password')
const { Text, Checkbox, Password } = require('@keystonejs/fields')
const { GraphQLApp } = require('@keystonejs/app-graphql')
const { AdminUIApp } = require('@keystonejs/app-admin-ui')
const { KnexAdapter } = require('@keystonejs/adapter-knex')

const PROJECT_NAME = 'SmallCrypto'

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new KnexAdapter({
    knexOptions: {
      client: 'postgres',
      connection: 'postgres://postgres/keystone',
    },
  }),
})

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => {
  return Boolean(user && user.isAdmin)
}
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false
  }
  return { id: user.id }
}
const userIsAdminOrOwner = (auth) => {
  const isAdmin = userIsAdmin(auth)
  const isOwner = userOwnsItem(auth)
  return isAdmin || isOwner
}
const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner }

keystone.createList('User', {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: { type: Checkbox },
    password: {
      type: Password,
    },
  },
  // To create an initial user you can temporarily remove access controls
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
})

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
})

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    // To create an initial user you can temporarily remove the authStrategy below
    new AdminUIApp({ enableDefaultRoute: true, authStrategy }),
  ],
}
