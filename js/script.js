var NewQuote = [
  {
    Quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    Quote: "“A room without books is like a body without a soul”",
    author: "― Marcus Tullius Cicero",
  },
  {
    Quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    Quote: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
  {
    Quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
  },
  {
    Quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },
  {
    Quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "― Mahatma Gandhi",
  },
  {
    Quote: "“We accept the love we think we deserve.”",
    author: "― Stephen Chbosky",
  },
  { Quote: "“Time goes on even when we do not”", author: "― Tahereh Mafi" },
  {
    Quote:
      "“It's not what happens to you, but how you react to it that matters.”",
    author: "― Epictetus",
  },
  {
    Quote:
      "“Resentment is like drinking poison and waiting for your enemies to die.”",
    author: "― Nelson Mandela",
  },
];

var box;
function getRandomQuote() {
  var Quote = Math.floor((Math.random() * NewQuote.length) + 1);
  document.getElementById("quote").innerHTML = NewQuote[Quote].Quote;
  document.getElementById("author").innerHTML = NewQuote[Quote].author;
}
