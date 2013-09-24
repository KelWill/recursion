// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  var length = json.length;
    if (json[0] === "'" || json[0] === '"'){
      return json.slice(1, length-1);
    } /*else if (json[0] === '[') { //this whole array section isn't passing (what do italisized brackets mean in chrome devtools?)
      var results = [];
      var start = 1;
      var end = json.length-1;
      for (var j = 0; j < json.length; j++){
        if (json[j] === ',' || json[j] === ']'){
          results.push(parseJSON(json.slice(start, j)));
          start = j + 1;
        }
      }
      console.log('Original json is:');
      console.log(json);
      console.log('results are:');
      console.log(results);
    } */
    else {
      return parseFloat(json);
    }
  // your code goes here
};
