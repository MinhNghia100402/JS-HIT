function person(title, body, author, view, comments, isLive) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.view = view;
  this.comments = comments;
  this.isLive = isLive;
}
var x = new person(
  "ahihi",
  "Anh Hoàng dzzz",
  "xyz",
  1000,
  [
    { author: "anh Huân đzzz", body: "lewlew" },
    { author: "anh Huân đzzz", body: "lewlew" },
  ],
  false
);
console.log(x);
