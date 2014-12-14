use enron

db.messages.aggregate([
  {
    $project: {
      from: '$headers.From',
      to: '$headers.To'
    }
  },
  {
    $unwind: '$to'
  },
  {
    $group: {
      _id: '$_id',
      from: {$addToSet: '$from'},
      to: {$addToSet: '$to'}
    }
  },
  {
    $unwind: '$from'
  },
  {
    $unwind: '$to'
  },
  {
    $group: {
      _id: {from: '$from', to: '$to'},
      num: {$sum: 1}
    }
  },
  {
    $sort: {
      num: -1
    }
  }
]);
