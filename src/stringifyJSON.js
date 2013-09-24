// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  
  if (typeof obj === 'string'){
    return '"' + obj + '"';
  } else if (Array.isArray(obj)){
    return '[' + obj.map(function(item){
      return stringifyJSON(item);
    }).join(',') + ']';
  } else if (obj && typeof obj === 'object'){
    return '{' + _(obj).map(function(value, key){
      return stringifyJSON(key) + ':' + stringifyJSON(value);
    }).join(',') + '}';
  }
  else {
    return obj + '';
  }
};
