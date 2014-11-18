use school

var cur = db.students.find();
var doc;
var id;
var scores;

while(cur.hasNext()) {
  doc = cur.next();
  id = doc._id;
  scores = doc.scores;

  if(scores[2].score < scores[3].score) {
    scores.splice(2, 1);
  } else {
    scores.splice(3, 1);
  }

  db.students.update({_id: id}, {'$set': {scores: scores}});
}
