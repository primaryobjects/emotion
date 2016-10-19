var brain = [
  { key: "hello",
    value: {
      neutral: "Hello, please say the name of a book to get a review.",
      positive: "Hello, please say the name of a book to get a review.",
      negative: "Perhaps, a good book would cheer you up. Please say the name of a book to get a review."
    }
  },
  { key: "alice in wonderland",
    value: {
      neutral: "The book Alice in Wonderland has a rating of 4 stars.",
      positive: "That's great to hear that you enjoy the book. You might also like \"The Annotated Alice: The Definitive Edition\" by the same author, with a rating of 4.5. Would you like to hear about it?",
      negative: "Although this book might be disappointing, you might enjoy \"The House at Pooh Corner\", by A.A. Milne, with a rating of 4.3. Would you like to hear about it?"
    }
  },
  { key: "pemberley",
    value: {
      neutral: "The book Pemberley has a rating of 2 stars.",
      positive: "That's great to hear that you enjoy the book. You might also like \"Wild Nights\" by the same author, with a rating of 3.7.",
      negative: "Although this book has quite a low rating, you might enjoy \"Mrs Darcy's Dilemma\", by Diana Birchall, with a rating of 3.4. Would you like to hear about it?"
    }
  },
  { key: "bye", 
    value: {
      neutral: "Goodbye.",
      positive: "I'm glad to have helped! Please come back soon. Goodbye.",
      negative: "I'm sorry I couldn't be of much help. Please try again, next time. Goodbye."
    }
  },
  { key: "help",
    value: {
      neutral: "Please say the name of a book to get a review.",
      positive: "Awesome! Please say the name of a book to get a review.",
      negative: "Retrieving book reviews can actually be quite easy! Just say the name of a book to get a review." 
    }
  }
];

function getSentiment(input) {
  var sentiment = 'neutral';
  var positives = ["love", "happy", "great", "enjoy"];
  var negatives = ["hate", "sad", "bad", "dislike"];
  
  // Split sentence into words.
  var words = input.split(' ');
  
  // Look for an emotional term in the sentence.
  words.every(function(word) {
    if (positives.indexOf(word) != -1) {
      sentiment = 'positive';
      return false;
    }
    else if (negatives.indexOf(word) != -1) {
      sentiment = 'negative';
      return false;
    }
    else {
      // Check next word.
      return true;
    }
  });
  
  return sentiment;
}

function respond(input) {
  var result = "Sorry, I don't understand.";
  
  input = input.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

  for (var i in brain) {
    var response = brain[i];
    if (input.indexOf(response.key.toLowerCase()) != -1) {
      // Found a matching keyword.
      
      // Determine sentiment.
      var sentiment = getSentiment(input);
      
      // Respond.
      result = response.value[sentiment];
      break;
    }
  }
  
  return result;
}
