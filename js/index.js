var classroom = -1;
var first_name;
var last_name;
var survey = -1;

function urlEncoder(str) {
  var new_string = "";
  var length = str.length;
  var i;
  for(i=0; i < length; i++){
    if(str.charAt(i) == " "){
      new_string += "%20";
    }
    else if (str.charAt(i) == "&") {
      new_string += "%26";
    }
    else if (str.charAt(i) == "'") {
      new_string += "%27";
    }
    else{
      new_string += str.charAt(i);
    }
  }
  return new_string;
}
