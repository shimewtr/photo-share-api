const Query = require('./Query')
const Mutation = require('./Mutation')
const Type = require('./Type')

// var _id = 0
// var users = [
//   { "githubLogin": "mHattrup1", "name": "Mike" },
//   { "githubLogin": "mHattrup2", "name": "Bob" },
//   { "githubLogin": "mHattrup3", "name": "John" },
// ]
// var photos = [
//   {
//     "id": "1",
//     "name": "dropping the heart cute",
//     "description": "herat",
//     "category": "SELFIE",
//     "githubUser": "mHattrup2",
//     "created": "3-28-1997"
//   },
//   {
//     "id": "2",
//     "name": "sky and cloud",
//     "description": "sky",
//     "category": "LANDSCAPE",
//     "githubUser": "mHattrup1",
//     "created": "3-28-1997"
//   },
//   {
//     "id": "3",
//     "name": "human and dog",
//     "description": "human",
//     "category": "PORTRAIT",
//     "githubUser": "mHattrup3",
//     "created": "3-28-1997"
//   },
//   {
//     "id": "4",
//     "name": "human and dog",
//     "description": "human",
//     "category": "PORTRAIT",
//     "githubUser": "mHattrup3",
//     "created": "3-28-2100"
//   },
// ]
// var tags = [
//   { "photoID": "1", "userID": "mHattrup1" },
//   { "photoID": "2", "userID": "mHattrup1" },
//   { "photoID": "2", "userID": "mHattrup2" },
//   { "photoID": "2", "userID": "mHattrup3" },
// ]

const resolvers = {
  Query,
  // Query: {

  //   // totalPhotos: () => photos.length,
  //   // allPhotos: () => photos
  //   // allPhotos: (parent, args) => {
  //   // allPhotos: () => {
  //     // args.after
  //     // photos
  //   // }
  // },
  Mutation,
  // Mutation: {
  //   postPhoto(parent, args) {

  //     var newPhoto = {
  //       id: _id++,
  //       ...args.input,
  //       created: new Date()
  //     }
  //     photos.push(newPhoto)
  //     return newPhoto
  //   }
  // },
  ...Type
  // Photo: {
  //   url: parent => `http://yoursite.com/img/${parent.id}.jpg`,
  //   postedBy: parent => {
  //     return users.find(u => u.githubLogin === parent.githubUser)
  //   },
  //   taggedUsers: parent => tags
  //     .filter(tag => tag.photoID === parent.id)
  //     .map(tag => tag.userID)
  //     .map(userID => users.find(u => u.githubLogin === userID))
  // },

  // User: {
  //   postedPhotos: parent => {
  //     return photos.filter(p => p.githubUser === parent.githubLogin )
  //   },
  //   inPhotos: parent => tags
  //     .filter(tag => tag.userID === parent.id)
  //     .map(tag => tag.photoID)
  //     .map(photoID => photos.find(p => p.id === photoID))
  // },

  // DateTime: new GraphQLScalarType({
  //   name: `DateTime`,
  //   description: `A valid date time value.`,
  //   parseValue: value => new Date(value),
  //   serialize: value => new Date(value).toISOString(),
  //   parseLiteral: ast => ast.value
  // })
}

module.exports = resolvers
