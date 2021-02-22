/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(author, content, timeStamp, numberOfLikes, comments  ) {
this.author= author;
this.content = content;
this.timeStamp =timeStamp;
this.numberOfLikes = numberOfLikes;
this.comments = comments;

}
addLikes(){
  this.numberOfLikes += (100)
}

addComment() {

this.comments.push("@BLinkfan: LOL");

}

};

var pedro = new Tweet("@chingonepedro21", "boneless hot wings are just chicken nuggets!",
"11:34pm 08/20/20", 53, ["@jason: Dude traditional wings are superior", "@Jessfitzz: NO BONELESS WING SLANDER ON MY WATCH!"] );
console.log(pedro);


pedro.addLikes();
console.log(pedro);

pedro.addComment();
console.log(pedro);
