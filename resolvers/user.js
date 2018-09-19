export default {
  Query: {
    allUsers: (parent, args , { db }) => db.user.findAll()
  },
  Mutation: {
    createUser: (parent, args, { db }) => db.user.create(args)
  }
}