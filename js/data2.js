var regions_speakers = [
  { id: 0, text: 'Accenture Atlanta', speakers: ["Georgia Power", "Hadiyah-Nicole Green", "Chae O'Keefe", "Clay Nelson", "Other"] },
  { id: 1, text: 'AT&T Atlanta: Ada Lovelace', speakers: ["Atlanta Tech Village", "Erin Martin", "Betsy Hare", "Terri Chu"] },
  { id: 2, text: 'AT&T Atlanta: Grace Hopper' speakers: ["Capital Factory", "Anita Johnson", "Patty Cifra"]},
  { id: 3, text: 'GE Atlanta' speakers: ["Capital Factory", "Patty Cifra"]},
  { id: 4, text: 'AT&T Austin' },
  { id: 5, text: 'The Barlovento Foundation @ Austin Community College' },
  { id: 6, text: 'The Barlovento Foundation @ Texas State University at Round Rock' },
  { id: 7, text: 'IBM Austin' },
  { id: 8, text: 'Indeed Austin' },
  { id: 9, text: 'Akamai Boston' },
  { id: 10, text: 'Microsoft Boston' },
  { id: 11, text: 'TripAdvisor Boston' },
  { id: 12, text: 'Twitter Boston' },
  { id: 13, text: 'Verizon Boston' },
  { id: 14, text: 'Accenture Chicago' },
  { id: 15, text: 'Girls Who Code @  the University of Illinois at Chicago: Ada Lovelace' },
  { id: 16, text: 'Girls Who Code @ University of Illinois at Chicago: Grace Hopper' },
  { id: 17, text: 'Microsoft Chicago' },
  { id: 18, text: 'Synchrony Financial Chicago' },
  { id: 19, text: 'Verizon Chicago' },
  { id: 20, text: 'AT&T Los Angeles' },
  { id: 21, text: 'Disney Los Angeles' },
  { id: 22, text: 'IBM Los Angeles' },
  { id: 23, text: 'Cheryl Saban Self-Worth Foundation for Women & Girls at USC Marshall School of Business: Ada Lovelace' },
  { id: 24, text: 'Cheryl Saban Self-Worth Foundation for Women & Girls at USC Marshall School of Business: Grace Hopper' },
  { id: 25, text: 'Knight Foundation at MDC Miami: Ada Lovelace' },
  { id: 26, text: 'Knight Foundation Miami @ FIU' },
  { id: 27, text: 'Knight Foundation at MDC Miami: Grace Hopper' },
  { id: 28, text: 'Accenture New York City' },
  { id: 29, text: 'Adobe New York City' },
  { id: 30, text: 'AIG New York City: Ada Lovelace' },
  { id: 31, text: 'AIG New York City: Grace Hopper' },
  { id: 32, text: 'The AOL Charitable Foundation at the CUNY Advanced Science Research Center' },
  { id: 33, text: 'AppNexus New York City' },
  { id: 34, text: 'AT&T New York City' },
  { id: 35, text: 'BlackRock New York City' },
  { id: 36, text: 'Goldman Sachs New York City: Ada Lovelace' },
  { id: 37, text: 'Goldman Sachs New York City: Grace Hopper' },
  { id: 38, text: 'IAC New York City' },
  { id: 39, text: 'IBM New York City' },
  { id: 40, text: 'JPMorgan Chase New York City' },
  { id: 41, text: 'Kate Spade & Company @ the Fashion Institute of Technology' },
  { id: 42, text: 'Moody\'s New York City' },
  { id: 43, text: 'Microsoft New York City' },
  { id: 44, text: 'Viacom New York City' },
  { id: 45, text: 'Prudential Newark' },
  { id: 46, text: 'Verizon Newark: Ada Lovelace' },
  { id: 47, text: 'Verizon Newark: Grace Hopper' },
  { id: 48, text: 'Adobe Seattle' },
  { id: 49, text: 'Amazon Seattle' },
  { id: 50, text: 'AT&T Seattle' },
  { id: 51, text: 'Expedia Seattle' },
  { id: 52, text: 'Groupon Seattle' },
  { id: 53, text: 'Microsoft Seattle' },
  { id: 54, text: 'Adobe San Francisco' },
  { id: 55, text: 'Adobe San Jose: Ada Lovelace' },
  { id: 56, text: 'Adobe San Jose: Grace Hopper' },
  { id: 57, text: 'Amazon Bay Area' },
  { id: 58, text: 'Autodesk San Francisco' },
  { id: 59, text: 'Electronic Arts Bay Area' },
  { id: 60, text: 'Facebook Bay Area' },
  { id: 61, text: 'GE Bay Area' },
  { id: 62, text: 'IBM San Jose' },
  { id: 63, text: 'Intuit Bay Area' },
  { id: 64, text: 'Moody\'s San Francisco' },
  { id: 65, text: 'Microsoft Bay Area' },
  { id: 66, text: 'Pivotal Bay Area' },
  { id: 67, text: 'Pixar Bay Area' },
  { id: 68, text: 'Sephora San Francisco' },
  { id: 69, text: 'Square San Francisco' },
  { id: 70, text: 'Twitter San Francisco' },
  { id: 71, text: 'Workday Bay Area' },
  { id: 72, text: 'AOL Washington' },
  { id: 73, text: 'AT&T Washington DC' },
  { id: 74, text: 'BSA Washington DC' },
  { id: 75, text: 'Capital One Washington DC' },
  { id: 76, text: 'Lockheed Martin Washington DC: Ada Lovelace' },
  { id: 77, text: 'Lockheed Martin Washington DC: Grace Hopper' },
  { id: 78, text: 'Select a Classroom'}
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
