use blog

db.posts.aggregate([{
  $unwind: '$comments'
}, {
  $project: {
    _id: 0,
    author: '$comments.author'
  }
}, {
  $group: {
    _id: '$author',
    num_comments: {$sum: 1}
  }
}, {
  $sort: {
    num_comments: -1
  }
}]);
