const Query = require('./Query')
const Mutation = require('./Mutation')
const Type = require('./Type')

const resolvers = {
  Query,
  Mutation,
  Subscription: {
    newPhoto: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('photo-added')
    },
    newUser: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('user-added')
    },
  },
  ...Type
}

module.exports = resolvers
