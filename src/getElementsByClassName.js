// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function (className) {
  current = arguments[1] || document.body;
  var elements = [];
  if (current.childNodes) {
    return getElementsByClassName(className, current.childNodes);
  }
  else {
    for (var i in current) {
      for (var a in current[i].classList)
      {
        if (current[i].classList[a] == className) {return true;}
      }
      
    }
  }  
};