use test

var cursor = db.images.find();
var img_id;
var count;

while(cursor.hasNext()) {
  img_id = cursor.next()._id;
  count = db.albums.count({images: img_id});

  if(count === 0)
    db.images.remove({_id: img_id});
}
