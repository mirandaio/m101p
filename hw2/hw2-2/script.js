use students

var cur = db.grades.find({type: 'homework'}).sort({
  student_id: 1, score: -1
});

var prev = cur.next();
var doc;

while(cur.hasNext()) {
  doc = cur.next();
  if(prev.student_id != doc.student_id) {
    db.grades.remove(prev);
  }
  prev = doc;
}

db.grades.remove(prev);
