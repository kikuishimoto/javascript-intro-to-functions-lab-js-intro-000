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
 var uppercase = string
 var lowercase = string

 if (uppercase.toUperCase() === uppercase) {
   return `I can't hear you!`;
 } else if (lowercase.toLowerCase()=== lowercase) {
   return `YES INDEED!`;
 } else if (string = "I love you, Grandma") {
   return `I love you, too.`;
 } else {
   return `WHAT`;
 }
}