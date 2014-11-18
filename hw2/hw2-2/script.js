use students

var cur = db.grades.find({type: 'homework'}).sort({
  student_id: 1, score: 1
});

var prev_student_id = -1;
var doc;

while(cur.hasNext()) {
  doc = cur.next();
  if(prev_student_id != doc.student_id) {
    db.grades.remove(doc);
    prev_student_id = doc.student_id;
  }
}
