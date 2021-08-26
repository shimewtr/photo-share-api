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

module.exports = {
  postPhoto(parent, args) {
    var newPhoto = {
      id: _id++,
      ...args.input,
      created: new Date()
    }
      photos.push(newPhoto)
      return newPhoto
  }
}
