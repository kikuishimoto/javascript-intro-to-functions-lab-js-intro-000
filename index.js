function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var answer = string.toUpperCase()
  console.log(answer)
}

function logWhisper(string) {
  var answerr = string.toLowerCase()
  console.log(answerr)
}
funtion sayHiToGrandma(string) {
 var input = string

 if (input.toUperCase() === input) {
   return `I can't hear you!`;
 } else if (input.toLowerCase()=== input) {
   return `YES INDEED!`;
 } else if (input = "I love you, Grandma") {
   return `I love you, too.`;
 } else {
   return `WHAT`;
 }
}
