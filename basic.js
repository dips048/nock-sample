var jservice = require("./jservice");

jservice.getCategory(10044, function(category) {
  console.log(category);
});

jservice.getRandomQuestion(function(question) {
  console.log(question);
});

jservice.getCategoryCall(10044,function(question) {
  console.log(question);
});