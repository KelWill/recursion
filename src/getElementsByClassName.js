// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, current) {
  
  current = current || document.body;
  var results = [];
  var search = function(className, current){
    if (current.childNodes){
      for (var i = 0; i < current.childNodes.length; i++){
        search(className, current.childNodes[i]);
      } 
    }
    if (current.classList) {
      for (var j = 0; j < current.classList.length; j++) {
        if (current.classList[j] == className){
          results.push(current);
        }
      }
    } 
  };
  search(className, current);
  return results; 
};