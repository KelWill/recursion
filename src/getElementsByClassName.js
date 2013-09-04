// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var count = 0;
var results = [];

//TODO make sure this just goes through once.

var getElementsByClassName = function(className, node) {
  
  var current = node || document.body;
  
  if (current === document.body){
    for (var i = 2; i < document.body.childNodes.length; i++){
      getElementsByClassName(className, document.body.childNodes[i]);
    }
  }
  else {
    if (current.childNodes){
      for (var i = 0; i < current.childNodes.length; i++){
        getElementsByClassName(className, current.childNodes[i]);
      } 
    }
    results.push(current);
  }
  
  if (current == document.body){
  var answer = [];
    for (var i = 0; i < results.length; i++){
      if (results[i].classList){
        for (var j = 0; j < results[i].classList.length; j++) {
          if (results[i].classList[j] == className){
            answer.push(results[i]);
          }
        }
      }
    }
    results = [];
    return answer;  
  }
};