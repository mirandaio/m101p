use test

db.grades.aggregate([{
  $unwind: '$scores'
}, {
  $project: {
    student_id: 1,
    class_id: 1,
    type: '$scores.type',
    score: '$scores.score'
  }
}, {
  $match: {
    $or: [{type: 'exam'}, {type: 'homework'}]
  }
}, {
  $group: {
    _id: {class_id: '$class_id', student_id: '$student_id'},
    student_avg: {$avg: '$score'}
  }
}, {
  $group: {
    _id: '$_id.class_id',
    class_avg: {$avg: '$student_avg'}
  }
}, {
  $sort: {
    class_avg: -1
  }
}]).pretty();
