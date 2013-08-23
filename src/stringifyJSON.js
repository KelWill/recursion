// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if (obj === null) {return "null"};
  if (obj.length > 1) {
    for (var i = 0; i++; i<obj.length) 
	  {return stringifyJSON(obj[0])}
    }
  else 
    {return obj + "";}
};
