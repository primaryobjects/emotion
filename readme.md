Emotional Artificial Intelligence
=================================

Proof-of-concept for an emotional conversational user interface about book reviews.

What is it?
-----------

This project is a simple demo of designing emotion into an artificial intelligence conversational UI. The demo consists of a chatbot interface for retrieving book reviews. The user can interact with the software in a conversational UI style, by typing and chatting with the software.

Responses from the chatbot are triggered by specific keywords and phrases.

Phrases that contain emotionally charged words (from a preset list of keywords) are responded according to neutral, positive, or negative sentiment of the user.

Each potential response from the conversational UI consists of three potential sentences, according to the sentiment of the user.

The actual determination of sentiment is performed in a mock function, where you would normally call a machine learning API for scoring sentiment (ie., http://sentimentview.com). Likewise, responses for book reviews are hard-coded, where you would normally call a book review API (ie., http://goodreads.com/api).

Why?
----

Sentiment analysis is approaching 80+% accuracy, nearly exceeding that of a human! When a computer can detect the sentiment of a user within a software system, it can interact with the user in a much more human-like fashion. Utilizing and responding to the emotional state of the user can help bring humans and computers even closer together. Imagine.. what a world!

Demo
----

Without Emotion https://jsfiddle.net/dbyzztxp/1/

```text
> hello
Hello, please say the name of a book to get a review.
> how about Alice in Wonderland?
The book Alice in Wonderland has a rating of 4 stars.
> I love Alice in Wonderland!
The book Alice in Wonderland has a rating of 4 stars.
> What about Pemberley?
The book Pemberley has a rating of 2 stars.
> Hm, Pemberley sounds like a book I would dislike.
The book Pemberley has a rating of 2 stars.
> You're not much help, pretty sad!
Please say the name of a book to get a review.
```

With Emotion https://jsfiddle.net/z0rkyq4L/2/

```text
> hello
Hello, please say the name of a book to get a review.
> Hello, the other version of you was quite bad.
Perhaps, a good book would cheer you up. Please say the name of a book to get a review.
> Ok, how about Alice in Wonderland?
The book Alice in Wonderland has a rating of 4 stars.
> I love Alice in Wonderland!
That's great to hear that you enjoy the book. You might also like "The Annotated Alice: The Definitive Edition" by the same author, with a rating of 4.5. Would you like to hear about it?
> No thanks. What about Pemberley?
The book Pemberley has a rating of 2 stars.
> That's too bad. Pemberley doesn't sound too good.
Although this book has quite a low rating, you might enjoy "Mrs Darcy's Dilemma", by Diana Birchall, with a rating of 3.4. Would you like to hear about it?
> I dislike that book too. Can you help?
Retrieving book reviews can actually be quite easy! Just say the name of a book to get a review.
> This is great! But, time to go. Bye.
I'm glad to have helped! Please come back soon. Goodbye.
```

Author
------

Kory Becker http://www.primaryobjects.com/kory-becker