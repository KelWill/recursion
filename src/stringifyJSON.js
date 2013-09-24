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
    var array = _(obj).map(function(value, key){
      var stringKey =  stringifyJSON(key);
      var stringValue = stringifyJSON(value);
      //if (stringKey === undefined || stringValue)
      if (stringValue){
        return stringKey + ':' + stringValue;
      }
    });
    if (!_.contains(array, undefined)){
      return '{' + array.join(',') + '}';
    }
    return '{}';
  } else if (typeof obj === 'function' || obj === undefined) {
    return;
  }
  else {
    return obj + '';
  }
};
