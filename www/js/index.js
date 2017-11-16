var answers = [
  "Yes!",
  "No!",
  "Maybe",
  "Possibly",
  "Doubtful",
  "Looks likely",
  "Doesn't look good",
  "Absolulutely",
  "Negative",
  "Ask again later",
  "Unsure",
  "Without a doubt",
  "Nope",
  "Yep",
  "No one knows",
  "Guaranteed",
  "Don't even think about it",
  "Looks Unlikely",
  "Definitely not",
  "Hmmm, I don't know"

];

var onShake = function(){
alert(randomAnswer());
}

//returns a randon number between 0 - 19 inclusive
function random() {
  var num = Math.floor(Math.random() * 20);
  return num;
}


//returns a random answer from the array
function randomAnswer() {
  var result = answers[random()];
  return result;
  
}

