// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, current) {
  current = current || document.body;
  var results = [];
  if (hasClass(current, className)){
    results.push(current);
  }
  for (var i = 0; i < current.childNodes.length; i++){
    var subArray = getElementsByClassName(className, current.childNodes[i]);
    results = results.concat(subArray);
  }
  return results;
};

var hasClass = function(node, className){
  return _.contains(node.classList, className);
};
