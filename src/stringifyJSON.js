// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  console.log(obj)
  //base cases
  if (obj === null) {return "null"};
  if (typeof obj === 'number' || typeof obj === 'boolean') {return obj + ""}
  if (typeof obj === 'string') {return '"' + obj + '"'}
  
  var temp = [];  
  //if the object is an array
  if (Array.isArray(obj)) {
    for (var i=0; i<obj.length; i++){
      temp.push(stringifyJSON(obj[i]));
    }  
    return "[" + temp + "]";   //This is to turn it into something that looks like an array
 }
 var temp = {};
 //if the object is a regular object
 for (var key in obj){
    temp[stringifyJSON(key)] = stringifyJSON(obj[key]);
    }
    var tempString = "";
    for (var i in temp)
      {    
      tempString = tempString + i + ":" + temp[i] + ',';
      }
    return "{" + tempString.substr(0,tempString.length-1) + "}";   //this is to turn it into something that looks an object
};
