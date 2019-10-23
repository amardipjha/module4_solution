 // Here,
 // We used Immediately Invoked function expression (IIFE).

 (function () {

  var names = ["Amar", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura",
   "Jim"];

  for (var i = 0; i < names.length; i++) {

   var firstLetter = names[i].charAt(0).toLowerCase();

  
   if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
   } else {
    helloSpeaker.speak(names[i]);
   }
}

})();