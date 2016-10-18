var brain = [
  { key: "hello", value: "Hello, please say the name of a book to get a review." },
  { key: "alice in wonderland", value: "The book Alice in Wonderland has a rating of 4 stars." },
  { key: "pemberley", value: "The book Pemberley has a rating of 2 stars." },
  { key: "bye", value: "Goodbye." },
  { key: "help", value: "Please say the name of a book to get a review." }
];

function respond(input) {
  var result = "Sorry, I don't understand.";
  
  input = input.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

  for (var i in brain) {
    var response = brain[i];
    if (input.indexOf(response.key.toLowerCase()) != -1) {
      // Found a matching keyword.
      result = response.value;
      break;
    }
  }
  
  return result;
}