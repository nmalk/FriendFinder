var friends = require("../app/data/friends");


module.exports = function(app) {
  // Displays all friends
app.get("/api/friends", function(req, res) {
  res.json(friends);
});


// Create new friend
app.post("/api/friends", function(req, res) {
  var newFriend = req.body;

  //logic to compare

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});
};
