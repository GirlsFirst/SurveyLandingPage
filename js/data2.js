var regions_speakers = [{id: 0, text: "Chicago", speakers: [ // Chicago speakers
                          {id: 0, text: "Trevor Yuen"},
                          {id: 1, text: "Kara Tu"},
                          {id: 2, text: "Ellen McCullagh"}]
                        },
                        {id: 1, text: "San Francisco", speakers: [ //San Francisco Speakers
                          {id: 0, text: "Link Gan"},
                          {id: 1, text: "Emma McCullagh"}]
                        },
                        {id: 2, text: "Durham", speakers: [ //Durham Speakers
                          {id: 0, text: "Nuala McCullagh"},
                          {id: 1, text: "Stefan Byrd-Kreuger"}]
                        }
]

var url = String(window.location);

var index = url.indexOf("?");
var urlData = url.substr(index+1);

var tags = urlData.split("&")

var classroom_id = -1;

var class_splitted = tags[0].split("=");
var firstName_splitted = tags[1].split("=")
var lastName_splitted = tags[2].split("=")

if(class_splitted[0] == "class_id") {
  classroom_id = class_splitted[1];
}

var first_name = firstName_splitted[1]
var last_name = lastName_splitted[1]

var data = regions_speakers[classroom_id].speakers

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
