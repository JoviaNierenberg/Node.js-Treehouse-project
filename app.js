var profile = require("./profile.js");

var users = process.argv.slice(2);
users.forEach(profile.get);


// NOTES
// doesn't matter what the file is named
// if you add .json to the end of a treehouse profile, you will get all badge information
// mozilla developer network is a good reference for native objects
// can use jsonprettyprint.com to get json code to look more understandable. Can use with the the json of a treehouse user profile

// problem: we need a simple way to look at user's badge count and javascript points
// solution: use node.js to connect to treehouse's api to get profile information to print out




